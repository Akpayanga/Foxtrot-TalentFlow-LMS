const User = require("../models/user.model");
const Enrollment = require("../models/enrollment.model");
const Assignment = require("../models/assignment.model");
const Submission = require("../models/submission.model");
const Course = require("../models/course.model");
const { recordAudit } = require("../utilities/audit.util");
const { success } = require("../utilities/response");
const ApiError = require("../utilities/apiError.util");
const AuditLog = require("../models/AuditLog.model");

/**
 * Aggregates all data required for the student dashboard
 */

exports.getDashboardData = async (req, res, next) => {
  try {
    const userId = req.user._id;

    const enrollment = await Enrollment.findOne({ userId }).populate(
      "courseId",
    );
    if (!enrollment) {
      return next(new ApiError(404, "Enrollment not found for this user"));
    }

    const allAssignments = await Assignment.find()
      .limit(5)
      .sort({ dueDate: 1 });
    const userSubmissions = await Submission.find({ userId });

    const pendingAssignments = allAssignments.filter((a) => {
      const submission = userSubmissions.find(
        (s) => s.assignmentId.toString() === a._id.toString(),
      );
      return (
        !submission ||
        submission.status === "in-progress" ||
        submission.status === "pending"
      );
    });

    const recentFeedback = await Submission.find({ userId, status: "graded" })
      .sort({ gradedAt: -1 })
      .limit(2)
      .populate("mentorId", "firstName lastName role");

    const activeCourses = await Course.find({ phase: 1 }).limit(3);
    if (!activeCourses || activeCourses.length === 0) {
      return next(new ApiError(404, "No active courses found"));
    }

    const mentor =
      recentFeedback.length > 0 ? recentFeedback[0].mentorId : null;

    // Audit log
    await recordAudit({
      userId,
      action: "DASHBOARD_FETCH",
      details: "User fetched dashboard data",
      req,
      status: "success",
      resourceType: "Dashboard",
    });

    return success(
      res,
      {
        user: {
          firstName: req.user.firstName,
          overallProgress: enrollment.progressPercentage,
          phase: 1,
        },
        assignments: pendingAssignments.map((a) => ({
          _id: a._id,
          title: a.title,
          type: a.type,
          isUrgent: a.isUrgent,
          dueDate: a.dueDate,
        })),
        recentFeedback: recentFeedback.map((f) => ({
          content: f.feedback,
          mentorName: f.mentorId
            ? `${f.mentorId.firstName} ${f.mentorId.lastName}`
            : "Mentor",
          gradedAt: f.gradedAt,
        })),
        activeCourses: activeCourses.map((c) => ({
          _id: c._id,
          title: c.title,
          category: c.category,
          progress: 10,
          week: c.week,
        })),
        mentor: mentor
          ? {
              name: `${mentor.firstName} ${mentor.lastName}`,
              role: mentor.role || "Senior Mentor",
              isAvailable: true,
            }
          : null,
      },
      "Dashboard data fetched",
    );
  } catch (err) {
    next(err);
  }
};

/**
 * Aggregates platform-wide data for the Admin Dashboard
 */
exports.getAdminDashboardStats = async (req, res, next) => {
  try {
    const totalInterns = await User.countDocuments({ role: "student", deletedAt: null });
    
    // Calculate new interns in the last 7 days
    const sevenDaysAgo = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000);
    const newInternsThisWeek = await User.countDocuments({ 
      role: "student", 
      deletedAt: null,
      createdAt: { $gte: sevenDaysAgo }
    });

    const mentors = await User.find({ role: "instructor", deletedAt: null });
    const totalMentors = mentors.length;
    
    // Count unique disciplines for mentors
    const uniqueFields = new Set(mentors.map(m => m.course).filter(Boolean)).size;
    
    // Progress Snapshot logic
    const enrollments = await Enrollment.find().select("progressPercentage lastAccessed");
    
    let onTrack = 0;
    let atRisk = 0;
    let inactive = 0;
    
    enrollments.forEach(e => {
      const daysSinceLastAccess = (Date.now() - new Date(e.lastAccessed)) / (1000 * 60 * 60 * 24);
      if (e.progressPercentage >= 60 && daysSinceLastAccess <= 3) {
        onTrack++;
      } else if (daysSinceLastAccess > 7) {
        inactive++;
      } else {
        atRisk++; // Fallback for anyone not on track or completely inactive
      }
    });

    // Avg completion rate
    const avgCompletion = enrollments.length > 0 
      ? Math.round(enrollments.reduce((acc, curr) => acc + curr.progressPercentage, 0) / enrollments.length)
      : 0;

    // Fetch an active course to represent the current cohort
    const activeCourse = await Course.findOne({ phase: { $gte: 1 } });
    const currentCohort = activeCourse ? {
      name: activeCourse.title,
      phase: activeCourse.phase,
      category: activeCourse.category,
      progress: avgCompletion // Approximated for now
    } : null;

    // Activity feed (last 4 audit logs)
    const activityFeed = await AuditLog.find()
      .sort({ createdAt: -1 })
      .limit(4)
      .populate("userId", "firstName lastName");

    const formattedFeed = activityFeed.map(log => ({
      text: log.details || `${log.userId?.firstName || 'System'} performed ${log.action}`,
      time: log.createdAt
    }));

    return success(res, {
      adminOverview: {
        totalInterns: {
          count: totalInterns,
          addedThisWeek: newInternsThisWeek
        },
        totalMentors: {
          count: totalMentors,
          fieldsCount: uniqueFields || 0
        },
        cohortStatus: {
          name: activeCourse ? activeCourse.title : "No Active Cohort",
          status: activeCourse ? "ACTIVE" : "INACTIVE"
        },
        courseCompletionRate: {
          percentage: avgCompletion,
          target: 75
        }
      },
      internProgressSnapshot: {
        onTrack,
        atRisk,
        inactive
      },
      currentCohort,
      activityFeed: formattedFeed
    }, "Admin dashboard stats fetched");
  } catch (err) {
    next(err);
  }
};

/**
 * Aggregates data for the specific Mentor Dashboard (My Interns Overview)
 */
exports.getMentorDashboardStats = async (req, res, next) => {
  try {
    const mentorId = req.user._id;

    // Find students assigned via submissions
    const submissions = await Submission.find({ mentorId }).select("userId");
    const uniqueStudentIds = [...new Set(submissions.map(s => s.userId.toString()))];
    
    const assignedInternCount = uniqueStudentIds.length;
    
    // Snapshot logic for these students
    const enrollments = await Enrollment.find({ userId: { $in: uniqueStudentIds } }).populate('courseId');
    
    let onTrack = 0;
    let atRisk = 0;
    let inactive = 0;
    
    enrollments.forEach(e => {
      const daysSinceLastAccess = (Date.now() - new Date(e.lastAccessed)) / (1000 * 60 * 60 * 24);
      if (e.progressPercentage >= 60 && daysSinceLastAccess <= 3) {
        onTrack++;
      } else if (daysSinceLastAccess > 7) {
        inactive++;
      } else {
        atRisk++; 
      }
    });

    const avgProgress = enrollments.length > 0
      ? Math.round(enrollments.reduce((acc, curr) => acc + curr.progressPercentage, 0) / enrollments.length)
      : 0;

    // Get assigned interns mapped properly
    const assignedStudents = await User.find({ _id: { $in: uniqueStudentIds }});
    const myInternsList = assignedStudents.map(student => {
      const e = enrollments.find(e => e.userId.toString() === student._id.toString());
      
      let status = "AT RISK";
      if (e) {
        const days = (Date.now() - new Date(e.lastAccessed)) / (1000 * 60 * 60 * 24);
        if (e.progressPercentage >= 60 && days <= 3) status = "ON TRACK";
        else if (days > 7) status = "INACTIVE";
      }

      return {
        _id: student._id,
        name: `${student.firstName} ${student.lastName}`,
        discipline: student.course || "General",
        cohort: e && e.courseId ? e.courseId.title : "Not Enrolled",
        phase1Progress: e ? e.progressPercentage : 0,
        lastActive: e ? e.lastAccessed : null,
        status
      };
    });

    return success(res, {
      overview: {
        assignedInterns: assignedInternCount,
        cohortDisciplineLabel: req.user.course ? `${req.user.course} Discipline` : "General Support",
        averageProgress: avgProgress,
        menteeSnapshot: {
          onTrack,
          atRisk,
          inactive
        }
      },
      myInterns: myInternsList
    }, "Mentor dashboard stats fetched");
  } catch (err) {
    next(err);
  }
};
