const Joi = require("joi");

// Pre-register schema (students only)
exports.preRegisterSchema = Joi.object({
  firstName: Joi.string().trim().required(),
  lastName: Joi.string().trim().required(),
  email: Joi.string().email().required(),
  phoneNumber: Joi.string().trim().required(),

  discipline: Joi.string()
    .valid(
      "backend",
      "frontend",
      "uiux",
      "graphicdesign",
      "socialmedia",
      "cybersecurity",
    )
    .required(),

  expertiseLevel: Joi.string()
    .valid("entry", "intermediate", "senior", "lead")
    .required(),

  statement: Joi.string().trim().required(),
  portfolioUrl: Joi.string().uri().required(),
  githubOrLinkedIn: Joi.string().uri().required(),
});

// Admin register schema (normal flow)
exports.adminRegisterSchema = Joi.object({
  firstName: Joi.string().required(),
  lastName: Joi.string().required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(8).required(),
  role: Joi.string().valid("admin").required(),
});

//  Admin login schema
exports.adminLoginSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().min(8).required(),
});

//  Admin refresh token schema
exports.adminRefreshTokenSchema = Joi.object({
  refreshToken: Joi.string().required(),
});

// Login schema (local or Google)
exports.loginSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().min(8),
  provider: Joi.string().valid("local", "google").default("local"),
});

// Forgot password schema
exports.forgotPasswordSchema = Joi.object({
  email: Joi.string().email().required(),
});

// Reset password schema
exports.resetPasswordSchema = Joi.object({
  token: Joi.string().required(),
  newPassword: Joi.string().min(8).required(),
});

// Student profile completion
exports.completeStudentProfileSchema = Joi.object({
  course: Joi.string()
    .valid(
      "backend",
      "frontend",
      "uiux",
      "graphicdesign",
      "socialmedia",
      "cybersecurity",
    )
    .required(),
  profilePhoto: Joi.string().uri().optional(), // NEW
});

exports.completeMentorProfileSchema = Joi.object({
  bio: Joi.string().min(10).required(),
  roleTitle: Joi.string().required(),
  linkedIn: Joi.string().uri().optional(),
  phoneNumber: Joi.string().optional(),
  profilePhoto: Joi.string().uri().optional(),
  availability: Joi.boolean().default(true),
});

exports.adminInviteMentorSchema = Joi.object({
  fullName: Joi.string().required(),
  email: Joi.string().email().required(),
  discipline: Joi.string()
    .valid(
      "backend",
      "frontend",
      "uiux",
      "graphicdesign",
      "socialmedia",
      "cybersecurity",
    )
    .required(),
  roleTitle: Joi.string().required(),
});


exports.updateProfileSchema = Joi.object({
  bio: Joi.string().min(10).optional(),
  roleTitle: Joi.string().optional(),
  linkedIn: Joi.string().uri().optional(),
  phoneNumber: Joi.string().optional(),
  profilePhoto: Joi.string().uri().optional(),
  availability: Joi.boolean().optional(),
  course: Joi.string().valid(
    "backend",
    "frontend",
    "uiux",
    "graphicdesign",
    "socialmedia",
    "cybersecurity"
  ).optional()
});

// Admin update user schema
exports.adminUpdateUserSchema = Joi.object({
  firstName: Joi.string().optional(),
  lastName: Joi.string().optional(),
  email: Joi.string().email().optional(),
  phoneNumber: Joi.string().optional(),
  profilePhoto: Joi.string().uri().optional(),
  isActive: Joi.boolean().optional(),

  // Student-specific
  course: Joi.string().valid(
    "backend",
    "frontend",
    "uiux",
    "graphicdesign",
    "socialmedia",
    "cybersecurity"
  ).optional(),

  // Mentor-specific
  bio: Joi.string().min(10).optional(),
  roleTitle: Joi.string().optional(),
  linkedIn: Joi.string().uri().optional(),
  availability: Joi.boolean().optional()
});

exports.adminGetUsersSchema = Joi.object({
  role: Joi.string().valid("student", "instructor").optional(),
  name: Joi.string().optional(),
  email: Joi.string().email().optional()
});
