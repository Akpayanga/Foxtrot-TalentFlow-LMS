const User = require("../models/user.model");
const ApiError = require("../utilities/apiError.util");
const { success } = require("../utilities/response");
const crypto = require("crypto");
const { enqueueVerificationEmail } = require("../service/email.service");
const { recordAudit } = require("../utilities/audit.util");
const Course = require("../models/course.model");
// const Instructor = require("../models/instructor.model");

exports.adminRegister = async (req, res, next) => {
  try {
    const { firstName, lastName, email, password } = req.body;

    let user = await User.findOne({ email, provider: "local" });
    if (user) throw new ApiError(400, "User already exists");

    const token = crypto.randomBytes(32).toString("hex");

    user = await User.create({
      firstName,
      lastName,
      email,
      password,
      provider: "local",
      role: "admin",
      isVerified: false,
      verificationToken: token,
      verificationTokenExpiry: Date.now() + 3600000,
    });

    await enqueueVerificationEmail(user.email, token, null);

    await recordAudit({
      userId: user._id,
      action: "ADMIN_REGISTER",
      details: "Admin registered",
      req,
      status: "success",
      resourceId: user._id,
      resourceType: "User",
      metadata: { role: "admin" },
    });

    return success(
      res,
      null,
      "Admin registration successful. Please verify your email.",
      { user, token },
      token
    );

  } catch (err) {
    next(err);
  }
};

exports.adminVerifyEmail = async (req, res, next) => {
  try {
    const { token } = req.query;

    const user = await User.findOne({
      verificationToken: token,
      verificationTokenExpiry: { $gt: Date.now() },
      role: "admin",
    });
    if (!user) throw new ApiError(400, "Invalid or expired token");

    user.isVerified = true;
    user.verificationToken = null;
    user.verificationTokenExpiry = null;
    await user.save();
    await recordAudit({
      userId: user._id,
      action: "ADMIN_VERIFY_EMAIL",
      details: "Admin email verified",
      req,
      status: "success",
      resourceId: user._id,
      resourceType: "User",
      metadata: { role: "admin" },
    });

    return success(res, null, "Admin email verified successfully");
  } catch (err) {
    next(err);
  }
};

exports.googleAdminLogin = async (req, res, next) => {
  try {
    if (!req.user)
      throw new ApiError(403, "Please verify your email before logging in");

    const { user, token } = req.user;

    if (user.role !== "admin")
      throw new ApiError(403, "Google login restricted to admins here");
    await recordAudit({
      userId: user._id,
      action: "ADMIN_GOOGLE_LOGIN",
      details: "Admin logged in via Google",
      req,
      status: "success",
      resourceId: user._id,
      resourceType: "User",
      metadata: { role: "admin" },
    });

    return success(res, { user, token }, "Admin Google login successful");
  } catch (err) {
    next(err);
  }
};

// =======================
//  COURSE LOGIC
// =======================

// Add Course
exports.addCourse = async (req, res) => {
  try {
    const {
      title,
      description,
      week,
      moduleNumber,
      videoUrl,
      isLockedByDefault,
      phase,
      category
    } = req.body;

    // Basic validation
    if (!title || !week || !moduleNumber) {
      return res.status(400).json({ message: "Missing required fields" });
    }

    const course = new Course({
      title,
      description,
      week,
      moduleNumber,
      videoUrl,
      isLockedByDefault,
      phase,
      category
    });

    await course.save();

    res.status(201).json({
      message: "Course created successfully",
      course
    });

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


// Update Course
exports.updateCourse = async (req, res) => {
  try {
    const { id } = req.params;

    const updatedCourse = await Course.findByIdAndUpdate(
      id,
      req.body,
      { new: true, runValidators: true }
    );

    if (!updatedCourse) {
      return res.status(404).json({ message: "Course not found" });
    }

    res.json({
      message: "Course updated successfully",
      updatedCourse
    });

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


// Delete Course
exports.deleteCourse = async (req, res) => {
  try {
    const { id } = req.params;

    const deleted = await Course.findByIdAndDelete(id);

    if (!deleted) {
      return res.status(404).json({ message: "Course not found" });
    }

    res.json({ message: "Course deleted successfully" });

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


// =======================
//  INSTRUCTOR LOGIC
// =======================

// Add Instructor
// exports.addInstructor = async (req, res) => {
//   try {
//     const instructor = await Instructor.create(req.body);

//     res.status(201).json({
//       message: "Instructor added",
//       instructor
//     });

//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// };


// //  Update Instructor
// exports.updateInstructor = async (req, res) => {
//   try {
//     const instructor = await Instructor.findByIdAndUpdate(
//       req.params.id,
//       req.body,
//       { new: true }
//     );

//     if (!instructor) {
//       return res.status(404).json({ message: "Instructor not found" });
//     }

//     res.json({
//       message: "Instructor updated",
//       instructor
//     });

//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// };


// //  Delete Instructor
// exports.deleteInstructor = async (req, res) => {
//   try {
//     const instructor = await Instructor.findByIdAndDelete(req.params.id);

//     if (!instructor) {
//       return res.status(404).json({ message: "Instructor not found" });
//     }

//     res.json({ message: "Instructor deleted" });

//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// };