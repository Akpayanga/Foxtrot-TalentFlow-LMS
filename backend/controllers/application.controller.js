const Application = require("../models/application.model");
const User = require("../models/user.model");
const { recordAudit } = require("../utilities/audit.util");
const { success } = require("../utilities/response");
const ApiError = require("../utilities/apiError.util");
const crypto = require("crypto");
const { generateRefreshToken } = require("../utilities/jwt");
const { enqueueVerificationEmail } = require("../service/email.service");
const dotenv = require("dotenv");
dotenv.config();

/**
 * Submit a new internship application
 */

exports.submitApplication = async (req, res, next) => {
  try {
    const {
      fullName,
      email,
      phoneNumber,
      primaryDiscipline,
      expertiseLevel,
      personalStatement,
      portfolioUrl,
      githubLinkedin,
    } = req.body;

    const existing = await Application.findOne({ email });
    if (existing) {
      return next(
        new ApiError(
          400,
          "An application with this email has already been submitted.",
        ),
      );
    }

    const existingUser = await User.findOne({ email, provider: "local" });
    if (existingUser) {
      return next(
        new ApiError(
          400,
          "A user account with this email already exists.",
        ),
      );
    }

    const invitationCode = crypto.randomBytes(6).toString("hex").toUpperCase();
    const token = generateRefreshToken({ email });

    const application = await Application.create({
      fullName,
      email,
      phoneNumber,
      primaryDiscipline,
      expertiseLevel,
      personalStatement,
      portfolioUrl,
      githubLinkedin,
    });

    // Map fields to User schema formatting/enums
    const disciplineMap = {
      "backend": "backend",
      "frontend": "frontend",
      "product design": "uiux",
      "uiux": "uiux",
      "graphicdesign": "graphicdesign",
      "graphic design": "graphicdesign",
      "socialmedia": "socialmedia",
      "social media": "socialmedia",
      "cybersecurity": "cybersecurity"
    };
    const mappedDiscipline = disciplineMap[primaryDiscipline.toLowerCase()] || "backend";
    const mappedExpertise = expertiseLevel.toLowerCase();

    const firstName = fullName.split(" ")[0];
    const lastName = fullName.split(" ").slice(1).join(" ") || "";

    const expiryHours = Number(process.env.INVITE_EXPIRY_HOURS_STUDENT) || 24;

    const user = await User.create({
      firstName,
      lastName,
      email,
      phoneNumber,
      role: "student",
      discipline: mappedDiscipline,
      expertiseLevel: mappedExpertise,
      statement: personalStatement,
      portfolioUrl,
      githubOrLinkedIn: githubLinkedin,
      preRegistered: true,
      invitationCode,
      verificationToken: token,
      verificationTokenExpiry: Date.now() + expiryHours * 60 * 60 * 1000,
    });

    await enqueueVerificationEmail(user._id, email, token, invitationCode, "student");

    // Audit log
    await recordAudit({
      userId: user._id,
      action: "APPLICATION_SUBMIT",
      details: `Application submitted and user pre-registered for ${email}`,
      req,
      status: "success",
      resourceId: application._id,
      resourceType: "Application",
    });

    return success(res, application, "Application submitted successfully!");
  } catch (err) {
    next(err);
  }
};

/**
 * Get application status by email
 */
exports.getApplicationStatus = async (req, res, next) => {
  try {
    const { email } = req.params;
    const application = await Application.findOne({ email });

    if (!application) {
      return next(new ApiError(404, "Application not found."));
    }

    // Audit log
    await recordAudit({
      userId: null,
      action: "APPLICATION_STATUS",
      details: `Status checked for ${email}`,
      req,
      status: "success",
      resourceId: application._id,
      resourceType: "Application",
    });

    return success(
      res,
      { status: application.status },
      "Application status retrieved",
    );
  } catch (err) {
    next(err);
  }
};
