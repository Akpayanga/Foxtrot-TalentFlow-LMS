const User = require("../models/user.model");
const Enrollment = require("../models/enrollment.model");
const Submission = require("../models/submission.model");
const { success } = require("../utilities/response");

/**
 * Lists all instructors with performance metrics for Admin
 */
exports.listInstructors = async (req, res, next) => {
  try {
    const instructors = await User.find({ role: "instructor", deletedAt: null });
    
    const instructorsWithStats = await Promise.all(instructors.map(async (i) => {
      // Find assigned interns via submissions
      const submissions = await Submission.find({ instructorId: i._id }).select("userId");
      const uniqueStudentIds = [...new Set(submissions.map(s => s.userId.toString()))];
      
      // Calculate avg progress of assigned interns
      const enrollments = await Enrollment.find({ userId: { $in: uniqueStudentIds } });
      const avgProgress = enrollments.length > 0
        ? Math.round(enrollments.reduce((acc, curr) => acc + curr.progressPercentage, 0) / enrollments.length)
        : 0;

      return {
        _id: i._id,
        name: `${i.firstName} ${i.lastName}`,
        discipline: i.course || "General",
        title: "Instructor",
        assignedInterns: uniqueStudentIds.length,
        avgProgress: `${avgProgress}%`,
        lastActive: "Just now", // Placeholder
        status: m.isActive ? "ACTIVE" : "INACTIVE",
        avatar: "" // Placeholder
      };
    }));

    return success(res, instructorsWithStats, "Instructors list fetched successfully");
  } catch (err) {
    next(err);
  }
};

/**
 * Lists all interns (students) with progress and status for Admin/Instructor
 */
exports.listInterns = async (req, res, next) => {
  try {
    const { instructorId, discipline } = req.query;
    
    let query = { role: "student", deletedAt: null };
    if (discipline) query.course = discipline.toLowerCase();

    // If filtered by instructor, first find students assigned to that instructor
    if (instructorId) {
      const submissions = await Submission.find({ instructorId }).select("userId");
      const assignedIds = [...new Set(submissions.map(s => s.userId.toString()))];
      query._id = { $in: assignedIds };
    }

    const students = await User.find(query);
    
    const internsWithStats = await Promise.all(students.map(async (s) => {
      const enrollment = await Enrollment.findOne({ userId: s._id });
      
      // Determine status label based on progress and activity
      let statusLabel = "ON TRACK";
      if (enrollment) {
        const daysSinceLastAccess = (Date.now() - new Date(enrollment.lastAccessed)) / (1000 * 60 * 60 * 24);
        if (enrollment.progressPercentage < 45) statusLabel = "AT RISK";
        if (daysSinceLastAccess > 7) statusLabel = "WARNING";
      }

      return {
        _id: s._id,
        name: `${s.firstName} ${s.lastName}`,
        studentId: s.studentId || "N/A",
        discipline: s.course || "General",
        instructor: "Assigned Instructor", // Placeholder
        progress: enrollment ? enrollment.progressPercentage : 0,
        lastActive: enrollment ? "Recent" : "Never",
        status: statusLabel,
        avatar: ""
      };
    }));

    return success(res, internsWithStats, "Interns list fetched successfully");
  } catch (err) {
    next(err);
  }
};
