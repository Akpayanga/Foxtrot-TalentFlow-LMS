const Application = require("../models/application.model");
const User = require("../models/user.model");
const crypto = require("crypto");
const { sendApplicationInviteEmail, sendAccountVerificationEmail } = require("../utilities/email.util");

function splitName(fullName) {
  const parts = String(fullName || "").trim().split(/\s+/).filter(Boolean);
  const firstName = parts.shift() || "Applicant";
  const lastName = parts.join(" ") || "User";
  return { firstName, lastName };
}

function mapDisciplineToCourse(primaryDiscipline) {
  switch (primaryDiscipline) {
    case "Backend":
      return "backend";
    case "Data Science":
      return "cybersecurity";
    case "UI/UX":
    case "Product Manager":
    case "Social Media":
      return "product design";
    case "Frontend":
    default:
      return "frontend";
  }
}

function generateInviteCode() {
  const year = new Date().getFullYear();
  const randomPart = Math.floor(1000 + Math.random() * 9000);
  return `TM-${year}-${randomPart}`;
}

/**
 * Submit a new internship application
 */
exports.submitApplication = async (req, res) => {
  try {
    const { 
      fullName, 
      email, 
      phoneNumber, 
      primaryDiscipline, 
      expertiseLevel, 
      personalStatement, 
      portfolioUrl, 
      githubLinkedin 
    } = req.body;

    // Check if application already exists for this email
    const existing = await Application.findOne({ email });
    if (existing) {
      return res.status(400).json({ 
        success: false, 
        message: "An application with this email has already been submitted." 
      });
    }

    const inviteCode = generateInviteCode();

    const application = await Application.create({
      fullName,
      email,
      phoneNumber,
      primaryDiscipline,
      expertiseLevel,
      personalStatement,
      portfolioUrl,
      githubLinkedin,
      inviteCode,
    });

    const frontendUrl = process.env.FRONTEND_URL || "http://localhost:5173";
    const inviteLink = `${frontendUrl}/start?email=${encodeURIComponent(email)}&code=${encodeURIComponent(inviteCode)}`;

    const emailSent = await sendApplicationInviteEmail({
      email,
      fullName,
      inviteCode,
      inviteLink,
    });

    res.status(201).json({ 
      success: true, 
      message: "Application submitted successfully!",
      data: application,
      emailSent,
      invite: {
        code: inviteCode,
        link: inviteLink,
      },
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

/**
 * Get application status by email
 */
exports.getApplicationStatus = async (req, res) => {
  try {
    const { email } = req.params;
    const application = await Application.findOne({ email });

    if (!application) {
      return res.status(404).json({ success: false, message: "Application not found." });
    }

    res.status(200).json({ success: true, data: { status: application.status } });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

/**
 * Verify invite code and return applicant details
 */
exports.verifyInviteCode = async (req, res) => {
  try {
    const { email, code } = req.body;

    if (!email || !code) {
      return res.status(400).json({
        success: false,
        message: "Email and verification code are required.",
      });
    }

    const application = await Application.findOne({ email: email.toLowerCase().trim() });

    if (!application) {
      return res.status(404).json({
        success: false,
        message: "Application not found for this email.",
      });
    }

    if (!application.inviteCode || application.inviteCode !== code.trim()) {
      return res.status(400).json({
        success: false,
        message: "Invalid verification code.",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Code verified successfully.",
      data: {
        fullName: application.fullName,
        email: application.email,
        phoneNumber: application.phoneNumber,
        primaryDiscipline: application.primaryDiscipline,
        expertiseLevel: application.expertiseLevel,
        portfolioUrl: application.portfolioUrl,
        githubLinkedin: application.githubLinkedin,
        status: application.status,
        inviteCode: application.inviteCode,
      },
    });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

/**
 * Resend invite email for an existing application
 */
exports.resendInviteCode = async (req, res) => {
  try {
    const { email } = req.body;

    if (!email) {
      return res.status(400).json({
        success: false,
        message: "Email is required.",
      });
    }

    const normalizedEmail = email.toLowerCase().trim();
    const application = await Application.findOne({ email: normalizedEmail });

    if (!application) {
      return res.status(404).json({
        success: false,
        message: "Application not found for this email.",
      });
    }

    let inviteCode = application.inviteCode;
    if (!inviteCode) {
      inviteCode = generateInviteCode();
      application.inviteCode = inviteCode;
      await application.save();
    }

    const frontendUrl = process.env.FRONTEND_URL || "http://localhost:5173";
    const inviteLink = `${frontendUrl}/start?email=${encodeURIComponent(normalizedEmail)}&code=${encodeURIComponent(inviteCode)}`;

    const emailSent = await sendApplicationInviteEmail({
      email: normalizedEmail,
      fullName: application.fullName,
      inviteCode,
      inviteLink,
    });

    if (!emailSent) {
      return res.status(500).json({
        success: false,
        message: "Invite email could not be sent. Please try again.",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Invite email resent successfully.",
      invite: {
        code: inviteCode,
        link: inviteLink,
      },
    });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

/**
 * Complete applicant account registration (password setup step)
 */
exports.completeRegistration = async (req, res) => {
  try {
    const { email, code, password, confirmPassword } = req.body;

    if (!email || !code || !password || !confirmPassword) {
      return res.status(400).json({
        success: false,
        message: "Email, verification code, password, and confirm password are required.",
      });
    }

    if (password !== confirmPassword) {
      return res.status(400).json({
        success: false,
        message: "Passwords do not match.",
      });
    }

    if (password.length < 8) {
      return res.status(400).json({
        success: false,
        message: "Password must be at least 8 characters long.",
      });
    }

    const normalizedEmail = email.toLowerCase().trim();
    const application = await Application.findOne({ email: normalizedEmail });

    if (!application) {
      return res.status(404).json({
        success: false,
        message: "Application not found for this email.",
      });
    }

    if (!application.inviteCode || application.inviteCode !== code.trim()) {
      return res.status(400).json({
        success: false,
        message: "Invalid verification code.",
      });
    }

    const emailVerificationToken = crypto.randomBytes(32).toString("hex");
    const frontendUrl = process.env.FRONTEND_URL || "http://localhost:5173";
    const verificationLink = `${frontendUrl}/verify-email?email=${encodeURIComponent(normalizedEmail)}&token=${encodeURIComponent(emailVerificationToken)}`;
    const { firstName, lastName } = splitName(application.fullName);
    const existingUser = await User.findOne({ email: normalizedEmail, provider: "local" });

    if (!existingUser) {
      await User.create({
        firstName,
        lastName,
        email: normalizedEmail,
        password,
        provider: "local",
        role: "student",
        course: mapDisciplineToCourse(application.primaryDiscipline),
        isVerified: false,
        verificationToken: emailVerificationToken,
        verificationTokenExpiry: new Date(Date.now() + 24 * 60 * 60 * 1000),
      });
    } else {
      existingUser.firstName = firstName;
      existingUser.lastName = lastName;
      existingUser.password = password;
      existingUser.role = "student";
      existingUser.course = mapDisciplineToCourse(application.primaryDiscipline);
      existingUser.isVerified = false;
      existingUser.verificationToken = emailVerificationToken;
      existingUser.verificationTokenExpiry = new Date(Date.now() + 24 * 60 * 60 * 1000);
      await existingUser.save();
    }

    application.accountCreated = true;
    application.status = "accepted";
    application.accountCreatedAt = new Date();
    application.emailVerified = false;
    application.emailVerificationToken = emailVerificationToken;
    application.emailVerificationTokenExpiry = new Date(Date.now() + 24 * 60 * 60 * 1000);
    await application.save();

    const emailSent = await sendAccountVerificationEmail({
      email: application.email,
      fullName: application.fullName,
      verificationLink,
    });

    return res.status(200).json({
      success: true,
      message: "Account setup completed successfully.",
      emailSent,
      data: {
        email: application.email,
        fullName: application.fullName,
        verificationLink,
      },
    });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

/**
 * Verify applicant email using the emailed verification link
 */
exports.verifyEmail = async (req, res) => {
  try {
    const { email, token } = req.body;

    if (!email || !token) {
      return res.status(400).json({
        success: false,
        message: "Email and verification token are required.",
      });
    }

    const normalizedEmail = email.toLowerCase().trim();
    const application = await Application.findOne({ email: normalizedEmail });

    if (!application) {
      return res.status(404).json({
        success: false,
        message: "Application not found for this email.",
      });
    }

    if (
      !application.emailVerificationToken ||
      application.emailVerificationToken !== token.trim() ||
      !application.emailVerificationTokenExpiry ||
      application.emailVerificationTokenExpiry < new Date()
    ) {
      return res.status(400).json({
        success: false,
        message: "Invalid or expired verification token.",
      });
    }

    application.emailVerified = true;
    application.emailVerificationToken = null;
    application.emailVerificationTokenExpiry = null;
    await application.save();

    const user = await User.findOne({ email: normalizedEmail, provider: "local" });
    if (user) {
      user.isVerified = true;
      user.verificationToken = null;
      user.verificationTokenExpiry = null;
      await user.save();
    }

    return res.status(200).json({
      success: true,
      message: "Email verified successfully.",
      data: {
        email: application.email,
        fullName: application.fullName,
      },
    });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

/**
 * Resend account verification email
 */
exports.resendEmailVerification = async (req, res) => {
  try {
    const { email } = req.body;

    if (!email) {
      return res.status(400).json({
        success: false,
        message: "Email is required.",
      });
    }

    const normalizedEmail = email.toLowerCase().trim();
    const application = await Application.findOne({ email: normalizedEmail });

    if (!application) {
      return res.status(404).json({
        success: false,
        message: "Application not found for this email.",
      });
    }

    const emailVerificationToken = crypto.randomBytes(32).toString("hex");
    const frontendUrl = process.env.FRONTEND_URL || "http://localhost:5173";
    const verificationLink = `${frontendUrl}/verify-email?email=${encodeURIComponent(normalizedEmail)}&token=${encodeURIComponent(emailVerificationToken)}`;

    application.emailVerificationToken = emailVerificationToken;
    application.emailVerificationTokenExpiry = new Date(Date.now() + 24 * 60 * 60 * 1000);
    application.emailVerified = false;
    await application.save();

    const user = await User.findOne({ email: normalizedEmail, provider: "local" });
    if (user) {
      user.verificationToken = emailVerificationToken;
      user.verificationTokenExpiry = new Date(Date.now() + 24 * 60 * 60 * 1000);
      user.isVerified = false;
      await user.save();
    }

    const emailSent = await sendAccountVerificationEmail({
      email: application.email,
      fullName: application.fullName,
      verificationLink,
    });

    if (!emailSent) {
      return res.status(500).json({
        success: false,
        message: "Verification email could not be sent. Please try again.",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Verification email resent successfully.",
      data: {
        email: application.email,
      },
    });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};
