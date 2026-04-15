const User = require("../models/user.model");
const ApiError = require("../utilities/apiError.util");
const { success } = require("../utilities/response");
const {
  generateAccessToken,
  generateRefreshToken,
  verifyToken,
} = require("../utilities/jwt");
const crypto = require("crypto");
const { enqueueVerificationEmail, enqueueWelcomeEmail } = require("../service/email.service");
const { recordAudit } = require("../utilities/audit.util");

// Pre-register (students only)
exports.preRegister = async (req, res, next) => {
  try {
    const {
      firstName,
      lastName,
      email,
      phoneNumber,
      discipline,
      expertiseLevel,
      statement,
      portfolioUrl,
      githubOrLinkedIn,
    } = req.body;

    // Validate discipline and expertiseLevel against enums
    const validDisciplines = [
      "backend",
      "frontend",
      "uiux",
      "graphicdesign",
      "socialmedia",
      "cybersecurity",
    ];
    const validExpertiseLevels = ["entry", "intermediate", "senior", "lead"];

    if (!validDisciplines.includes(discipline)) {
      throw new ApiError(400, "Invalid discipline selection");
    }
    if (!validExpertiseLevels.includes(expertiseLevel)) {
      throw new ApiError(400, "Invalid expertise level");
    }

    let user = await User.findOne({ email, provider: "local" });
    if (user) throw new ApiError(400, "User already exists");

    const invitationCode = crypto.randomBytes(6).toString("hex").toUpperCase();
    const token = generateRefreshToken({ email });

    
    const expiryHours = Number(process.env.INVITE_EXPIRY_HOURS_STUDENT) || 24;

    user = await User.create({
      firstName,
      lastName,
      email,
      phoneNumber,
      role: "student",
      discipline,
      expertiseLevel,
      statement,
      portfolioUrl,
      githubOrLinkedIn,
      preRegistered: true,
      invitationCode,
      verificationToken: token,
      verificationTokenExpiry: Date.now() + expiryHours * 60 * 60 * 1000,
    });

    await enqueueVerificationEmail(email, token, invitationCode, "student");

    await recordAudit({
  userId: user._id,
  action: "PRE_REGISTER",
  details: `Student pre-registered: ${discipline}, ${expertiseLevel} level`,
  req,
  status: "success",
  resourceId: user._id,
  resourceType: "User",
  metadata: {
    discipline,
    expertiseLevel,
    email,
    portfolioUrl,
    githubOrLinkedIn,
    cohort: user.cohort || "Pending assignment",
  },
});

    return success(
      res,
      { token, invitationCode },
      `Pre-registration successful. You will get an email notification if selected. Please check your inbox (including Spam/Junk) within 10 minutes. Link expires in ${expiryHours} hours.`,
    );
  } catch (err) {
    next(err);
  }
};
// Verify invitation
exports.verifyInvitation = async (req, res, next) => {
  try {
    const { token, code } = req.body;
    const decoded = verifyToken(token, process.env.JWT_REFRESH_SECRET);
    const user = await User.findOne({
      email: decoded.email,
      preRegistered: true,
    });

    if (
      !user ||
      user.verificationToken !== token ||
      user.verificationTokenExpiry < Date.now()
    ) {
      throw new ApiError(400, "Invalid or expired token");
    }
    if (user.invitationCode !== code)
      throw new ApiError(400, "Invalid invitation code");

    user.isInvited = true;
    user.isVerified = true;
    user.verificationToken = null;
    user.invitationCode = null;
    // Skip validation here, course will be set later
    await user.save({ validateBeforeSave: false });
    await recordAudit({
  userId: user._id,
  action: "VERIFY_INVITATION",
  details: `Invitation verified for ${user.email}`,
  req,
  status: "success",
  resourceId: user._id,
  resourceType: "User",
  metadata: {
    email: user.email,
    discipline: user.discipline,
    expertiseLevel: user.expertiseLevel,
    cohort: user.cohort || "Phase 1 - 2026",
  },
});


    await enqueueWelcomeEmail(user.email);

    return success(res, null, "Invitation verified. Continue registration.");
  } catch (err) {
    next(err);
  }
};

// Complete registration
exports.completeRegistration = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({
      email,
      isInvited: true,
      preRegistered: true,
    });
    if (!user) throw new ApiError(404, "User not found or not invited");

    user.password = password;
    user.preRegistered = false;
    await user.save({ validateBeforeSave: false });

   await recordAudit({
  userId: user._id,
  action: "COMPLETE_REGISTRATION",
  details: `Registration completed for ${user.email}`,
  req,
  status: "success",
  resourceId: user._id,
  resourceType: "User",
  metadata: {
    email: user.email,
    discipline: user.discipline,
    expertiseLevel: user.expertiseLevel,
    portfolioUrl: user.portfolioUrl,
    githubOrLinkedIn: user.githubOrLinkedIn,
    cohort: user.cohort || "Phase 2 - 2026",
  },
});

    return success(res, user, "Registration completed successfully");
  } catch (err) {
    next(err);
  }
};

/// LOGIN
exports.login = async (req, res, next) => {
  try {
    // Default provider to "local" if not provided
    const { email, password, provider = "local" } = req.body;

    const user = await User.findOne({ email, provider }).notDeleted();
    if (!user) throw new ApiError(404, "User not found");
    if (!user.isVerified) throw new ApiError(403, "Account not verified");

    if (provider === "local") {
      const isMatch = await user.comparePassword(password);
      if (!isMatch) throw new ApiError(401, "Invalid credentials");
    }

    const accessToken = generateAccessToken({ id: user._id, role: user.role });
    const refreshToken = generateRefreshToken({ id: user._id });

    res.cookie("refreshToken", refreshToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });

    
    await recordAudit({
  userId: user._id,
  action: "LOGIN",
  details: `Student logged in: ${user.email}`,
  req,
  status: "success",
  resourceId: user._id,
  resourceType: "User",
  metadata: {
    email: user.email,
    discipline: user.discipline,
    expertiseLevel: user.expertiseLevel,
    course: user.course,
    studentId: user.studentId,
    cohort: user.cohort || "Phase 1 - 2026",
    provider,
  },
});


    return success(res, { user, accessToken }, "Login successful");
  } catch (err) {
    next(err);
  }
};

exports.googleUserInstructorLogin = async (req, res, next) => {
  try {
    if (!req.user)
      throw new ApiError(403, "Please verify your invitation before logging in");

    const { user, token } = req.user;

    if (user.role !== "student") {
      throw new ApiError(403, "Google login restricted to students here");
    }

    
    await recordAudit({
      userId: user._id,
      action: "USER_GOOGLE_LOGIN",
      details: `Student logged in via Google: ${user.email}`,
      req,
      status: "success",
      resourceId: user._id,
      resourceType: "User",
      metadata: {
        email: user.email,
        discipline: user.discipline,
        expertiseLevel: user.expertiseLevel,
        course: user.course,
        studentId: user.studentId,
        provider: "google",
      },
    });

    return success(res, { user, token }, "Google login successful");
  } catch (err) {
    next(err);
  }
};


// REFRESH TOKEN
exports.refreshToken = async (req, res, next) => {
  try {
    const refreshToken = req.cookies.refreshToken;
    if (!refreshToken) throw new ApiError(401, "Refresh token missing");

    const decoded = verifyToken(refreshToken, process.env.JWT_REFRESH_SECRET);
    const user = await User.findById(decoded.id).notDeleted();
    if (!user) throw new ApiError(404, "User not found");

    const newAccessToken = generateAccessToken({
      id: user._id,
      role: user.role,
    });
    await recordAudit({
      userId: user._id,
      action: "REFRESH_TOKEN",
      details: "Access token refreshed",
      req,
      status: "success",
      resourceId: user._id,
      resourceType: "User",
    });

    return success(
      res,
      { accessToken: newAccessToken },
      "Access token refreshed",
    );
  } catch (err) {
    next(err);
  }
};

//FORGOT PASSWORD
exports.forgotPassword = async (req, res, next) => {
  try {
    const { email } = req.body;
    const user = await User.findOne({ email, provider: "local" }).notDeleted();
    if (!user) throw new ApiError(404, "User not found");

    const resetToken = generateAccessToken({ id: user._id });
    user.resetToken = resetToken;
    user.resetTokenExpiry = new Date(Date.now() + 3600000); // 1 hour
    await user.save();

    
   await recordAudit({
  userId: user._id,
  action: "FORGOT_PASSWORD",
  details: `Password reset requested for ${user.email}`,
  req,
  status: "success",
  resourceId: user._id,
  resourceType: "User",
  metadata: {
    email: user.email,
    discipline: user.discipline,
    expertiseLevel: user.expertiseLevel,
    course: user.course,
    studentId: user.studentId,
    cohort: user.cohort || "Phase 1 - 2026",
  },
});


    return success(res, { resetToken }, "Password reset token generated");
  } catch (err) {
    next(err);
  }
};

// RESET PASSWORD
exports.resetPassword = async (req, res, next) => {
  try {
    const { token, newPassword } = req.body;
    const decoded = verifyToken(token);

    const user = await User.findById(decoded.id);
    if (!user || user.resetToken !== token || user.resetTokenExpiry < Date.now()) {
      throw new ApiError(400, "Invalid or expired token");
    }

    user.password = newPassword;
    user.resetToken = null;
    user.resetTokenExpiry = null;
    await user.save();

    await recordAudit({
  userId: user._id,
  action: "RESET_PASSWORD",
  details: `Password reset completed for ${user.email}`,
  req,
  status: "success",
  resourceId: user._id,
  resourceType: "User",
  metadata: {
    email: user.email,
    discipline: user.discipline,
    expertiseLevel: user.expertiseLevel,
    course: user.course,
    studentId: user.studentId,
    cohort: user.cohort || "Phase 1 - 2026",
  },
});


    return success(res, null, "Password reset successful");
  } catch (err) {
    next(err);
  }
};

const generateStudentId = async (discipline) => {
  const year = new Date().getFullYear();
  const disciplineMap = {
    backend: "BE",
    frontend: "FE",
    uiux: "UX",
    graphicdesign: "GD",
    socialmedia: "SM",
    cybersecurity: "CS",
  };

  const prefix = disciplineMap[discipline];
  if (!prefix) throw new Error("Invalid discipline for student ID");

  // Count students in this discipline for sequential numbering
  const count = await User.countDocuments({ discipline });
  const number = String(count + 1).padStart(4, "0"); // e.g., 1906

  return `FA-${year}-${prefix}-${number}`;
};
exports.completeStudentProfile = async (req, res, next) => {
  try {
    const { course, profilePhoto } = req.body;
    const user = await User.findById(req.user.id);

    if (!user.isVerified) throw new ApiError(403, "Verify your email first");
    if (user.role !== "student")
      throw new ApiError(403, "Only students can complete this profile");
    if (!course) throw new ApiError(400, "Course selection is required");

    user.course = course;
    user.studentId = await generateStudentId(course);
    user.profilePhoto = profilePhoto || user.profilePhoto; // NEW

    await user.save();

    await recordAudit({
      userId: user._id,
      action: "COMPLETE_STUDENT_PROFILE",
      details: `Student profile completed: ${user.course}, ID ${user.studentId}`,
      req,
      status: "success",
      resourceId: user._id,
      resourceType: "User",
      metadata: {
        email: user.email,
        course: user.course,
        studentId: user.studentId,
        discipline: user.discipline,
        expertiseLevel: user.expertiseLevel,
        cohort: user.cohort,
        profilePhoto: user.profilePhoto, // NEW
      },
    });

    return success(res, user, "Student profile completed successfully");
  } catch (err) {
    next(err);
  }
};

// PROFILE
exports.profile = async (req, res, next) => {
  try {
    const user = await User.findById(req.user.id).notDeleted();
    if (!user) throw new ApiError(404, "User not found");

    await recordAudit({
      userId: user._id,
      action: "PROFILE_VIEW",
      details: `Profile viewed for ${user.email}`,
      req,
      status: "success",
      resourceId: user._id,
      resourceType: "User",
      metadata: {
        email: user.email,
        discipline: user.discipline,
        expertiseLevel: user.expertiseLevel,
        course: user.course,
        studentId: user.studentId,
        cohort: user.cohort,
      },
    });

    return success(res, user, "Profile retrieved successfully");
  } catch (err) {
    next(err);
  }
};

// Mentor profile completion
exports.completeMentorProfile = async (req, res, next) => {
  try {
    const {
      bio,
      roleTitle,
      linkedIn,
      phoneNumber,
      profilePhoto,
      availability,
    } = req.body;

    // Ensure only instructors can complete mentor profile
    if (req.user.role !== "instructor") {
      throw new ApiError(403, "Only instructors can complete mentor profile");
    }

    const user = await User.findById(req.user.id).notDeleted();
    if (!user) throw new ApiError(404, "Mentor not found");

    user.bio = bio;
    user.roleTitle = roleTitle;
    user.linkedIn = linkedIn || user.linkedIn;
    user.phoneNumber = phoneNumber || user.phoneNumber;
    user.profilePhoto = profilePhoto || user.profilePhoto;
    user.availability =
      availability !== undefined ? availability : user.availability;

    await user.save();

    // Audit log
    await recordAudit({
      userId: user._id,
      action: "COMPLETE_MENTOR_PROFILE",
      details: "Mentor completed profile",
      req,
      status: "success",
      resourceId: user._id,
      resourceType: "User",
      metadata: { role: "instructor" },
    });

    return success(res, { user }, "Mentor profile completed successfully");
  } catch (err) {
    next(err);
  }
};

exports.updateProfile = async (req, res, next) => {
  try {
    const { bio, roleTitle, linkedIn, phoneNumber, profilePhoto, availability, course } = req.body;

    const user = await User.findById(req.user.id).notDeleted();
    if (!user) throw new ApiError(404, "User not found");

    if (user.role === "student") {
      if (course) user.course = course;
      if (profilePhoto) user.profilePhoto = profilePhoto;
    }

    if (user.role === "instructor") {
      if (bio) user.bio = bio;
      if (roleTitle) user.roleTitle = roleTitle;
      if (linkedIn) user.linkedIn = linkedIn;
      if (phoneNumber) user.phoneNumber = phoneNumber;
      if (profilePhoto) user.profilePhoto = profilePhoto;
      if (availability !== undefined) user.availability = availability;
    }

    await user.save();

    await recordAudit({
      userId: user._id,
      action: "UPDATE_PROFILE",
      details: `${user.role} updated profile`,
      req,
      status: "success",
      resourceId: user._id,
      resourceType: "User",
      metadata: { role: user.role },
    });

    return success(res, user, "Profile updated successfully");
  } catch (err) {
    next(err);
  }
};
exports.deleteProfile = async (req, res, next) => {
  try {
    const user = await User.findById(req.user.id).notDeleted();
    if (!user) throw new ApiError(404, "User not found");

    await User.softDelete(user._id);

    await recordAudit({
      userId: user._id,
      action: "DELETE_PROFILE",
      details: `${user.role} deleted profile`,
      req,
      status: "success",
      resourceId: user._id,
      resourceType: "User",
      metadata: { role: user.role },
    });

    return success(res, null, "Profile deleted successfully");
  } catch (err) {
    next(err);
  }
};

// LOGOUT
exports.logout = async (req, res, next) => {
  try {
    res.clearCookie("refreshToken");
    await recordAudit({
  userId: req.user?.id,
  action: "LOGOUT",
  details: `Student logged out: ${req.user?.email}`,
  req,
  status: "success",
  resourceId: req.user?.id,
  resourceType: "User",
  metadata: {
    email: req.user?.email,
    discipline: req.user?.discipline,
    expertiseLevel: req.user?.expertiseLevel,
    course: req.user?.course,
    studentId: req.user?.studentId,
    cohort: req.user?.cohort || "Phase 1 - 2026",
  },
});


    return success(res, null, "Logout successful. Redirecting to login...");
  } catch (err) {
    next(err);
  }
};

// delete user
exports.deleteUser = async (req, res, next) => {
  try {
    const { email } = req.body;

    if (!email) {
      throw new ApiError(400, "Email is required");
    }

    const user = await User.findOne({ email });

    if (!user) {
      throw new ApiError(404, "User not found");
    }

    await User.deleteOne({ email });

    return success(res, null, "User deleted successfully");
  } catch (err) {
    next(err);
  }
};
