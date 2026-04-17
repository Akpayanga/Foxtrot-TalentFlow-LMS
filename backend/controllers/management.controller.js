const User = require("../models/user.model");
const Enrollment = require("../models/enrollment.model");
const Submission = require("../models/submission.model");
const { success } = require("../utilities/response");

/**
 * Lists all mentors (instructors) with performance metrics for Admin
 */
exports.listMentors = async (req, res, next) => {
  try {
    const mentors = await User.find({ role: "instructor", deletedAt: null });
    
    const mentorsWithStats = await Promise.all(mentors.map(async (m) => {
      // Find assigned interns via submissions
      const submissions = await Submission.find({ mentorId: m._id }).select("userId");
      const uniqueStudentIds = [...new Set(submissions.map(s => s.userId.toString()))];
      
      // Calculate avg progress of assigned interns
      const enrollments = await Enrollment.find({ userId: { $in: uniqueStudentIds } });
      const avgProgress = enrollments.length > 0
        ? Math.round(enrollments.reduce((acc, curr) => acc + curr.progressPercentage, 0) / enrollments.length)
        : 0;

      return {
        _id: m._id,
        name: `${m.firstName} ${m.lastName}`,
        discipline: m.course || "General",
        title: m.role === "instructor" ? "Mentor" : m.role,
        assignedInterns: uniqueStudentIds.length,
        avgProgress: `${avgProgress}%`,
        lastActive: "Just now", // Placeholder
        status: m.isActive ? "ACTIVE" : "INACTIVE",
        avatar: "" // Placeholder
      };
    }));

    return success(res, mentorsWithStats, "Mentors list fetched successfully");
  } catch (err) {
    next(err);
  }
};

/**
 * Lists all interns (students) with progress and status for Admin/Mentor
 */
exports.listInterns = async (req, res, next) => {
  try {
    const { mentorId, discipline } = req.query;
    
    let query = { role: "student", deletedAt: null };
    if (discipline) query.course = discipline.toLowerCase();

    // If filtered by mentor, first find students assigned to that mentor
    if (mentorId) {
      const submissions = await Submission.find({ mentorId }).select("userId");
      const assignedIds = [...new Set(submissions.map(s => s.userId.toString()))];
      query._id = { $in: assignedIds };
    }

    const students = await User.find(query);
    
    let onTrack = 0;
    let atRisk = 0;
    let inactive = 0;
    let totalPhase1Progress = 0;

    const disciplineCounts = {};

    const internsWithStats = await Promise.all(students.map(async (s) => {
      const enrollment = await Enrollment.findOne({ userId: s._id });
      
      // Track discipline counts
      const courseName = s.course || "General";
      disciplineCounts[courseName] = (disciplineCounts[courseName] || 0) + 1;

      let statusLabel = "AT RISK";
      let progress = 0;
      let lastActive = "Never";

      if (enrollment) {
        progress = enrollment.progressPercentage || 0;
        totalPhase1Progress += progress;
        lastActive = enrollment.lastAccessed;
        
        const daysSinceLastAccess = (Date.now() - new Date(enrollment.lastAccessed)) / (1000 * 60 * 60 * 24);
        if (progress >= 60 && daysSinceLastAccess <= 3) {
          statusLabel = "ON TRACK";
          onTrack++;
        } else if (daysSinceLastAccess > 7) {
          statusLabel = "INACTIVE";
          inactive++;
        } else {
          statusLabel = "AT RISK";
          atRisk++;
        }
      } else {
        atRisk++; // Students with no enrollment are at risk
      }

      // Try to find assigned mentor name
      const sub = await Submission.findOne({ userId: s._id }).populate("mentorId", "firstName lastName");
      const mentorName = sub && sub.mentorId ? `${sub.mentorId.firstName} ${sub.mentorId.lastName}` : "Assignee Needed";

      return {
        _id: s._id,
        name: `${s.firstName} ${s.lastName}`,
        studentId: s.studentId || "N/A",
        discipline: courseName,
        mentor: mentorName,
        progress,
        lastActive,
        status: statusLabel,
        avatar: ""
      };
    }));

    const avgPhase1 = students.length > 0 ? Math.round(totalPhase1Progress / students.length) : 0;

    const responsePayload = {
      headerStats: {
        totalInterns: students.length,
        onTrack,
        atRisk,
        inactive
      },
      progressBreakdown: {
        phase1: avgPhase1,
        phase2: 25, // Concept Mock
        presentation: 10 // Concept Mock
      },
      byDiscipline: Object.keys(disciplineCounts).map(k => ({
        name: k.charAt(0).toUpperCase() + k.slice(1),
        count: disciplineCounts[k]
      })),
      interns: internsWithStats
    };

    return success(res, responsePayload, "Interns list fetched successfully");
  } catch (err) {
    next(err);
  }
};

/**
 * Retrieves a detailed profile for a specific Intern
 */
exports.getInternProfile = async (req, res, next) => {
  try {
    const { id } = req.params;
    const intern = await User.findById(id);
    
    if (!intern || intern.role !== "student") {
      return next(new ApiError(404, "Intern not found"));
    }

    const enrollments = await Enrollment.find({ userId: id }).populate("courseId");
    
    // Determine overall phase 1 progress based on active enrollment
    let mainProgress = 0;
    let lastActive = null;
    let status = "AT RISK";

    if (enrollments.length > 0) {
      const e = enrollments[0]; // Assuming phase 1 is primary for now
      mainProgress = e.progressPercentage;
      lastActive = e.lastAccessed;
      
      const days = (Date.now() - new Date(e.lastAccessed)) / (1000 * 60 * 60 * 24);
      if (mainProgress >= 60 && days <= 3) status = "ON TRACK";
      else if (days > 7) status = "INACTIVE";
    }

    // Assignments logic
    const totalAssignments = await Assignment.countDocuments(); // In a real app, count assignments linked to their course
    const completedAssignments = await Submission.countDocuments({ userId: id, status: { $in: ["submitted", "graded"]} });

    // Course Progress Breakdown 
    // Mapped from existing enrollments or mocked to fit UI design
    const courseBreakdown = enrollments.map(e => ({
      moduleName: e.courseId ? e.courseId.title : "Unknown Module",
      progress: e.progressPercentage
    }));

    if (courseBreakdown.length === 0) {
      courseBreakdown.push(
        { moduleName: "Conduct UX Research", progress: 100 },
        { moduleName: "Define User Persona", progress: 45 },
        { moduleName: "Foundation Modules", progress: 2 }
      );
    }

    const payload = {
      header: {
        name: `${intern.firstName} ${intern.lastName}`,
        status,
        avatar: "",
        discipline: intern.course || "General",
        cohort: "Cohort 3 (Winter 2024)",
        phase1Progress: mainProgress,
        assignments: `${completedAssignments}/${totalAssignments || 6}`,
        lastActive
      },
      internInfo: {
        name: `${intern.firstName} ${intern.lastName}`,
        discipline: intern.course || "General",
        cohort: "Cohort 3 (Winter 2024)",
        enrollmentDate: intern.createdAt,
        email: intern.email
      },
      courseProgress: courseBreakdown,
      sessions: {
        lastSession: { date: "JUN 12", title: "Portfolio Foundations" },
        nextSession: { date: "TODAY", time: "2:00PM", platform: "Zoom Call" }
      }
    };

    return success(res, payload, "Intern profile fetched");
  } catch (err) {
    next(err);
  }
};
