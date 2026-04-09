const nodemailer = require("nodemailer");

const port = Number(process.env.SMTP_PORT);

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: port,
  secure: port === 465,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
  connectionTimeout: 10000,
});

// Debug only in development
if (process.env.NODE_ENV === "development") {
  transporter.verify((error) => {
    if (error) {
      console.log("SMTP ERROR:", error);
    } else {
      console.log("SMTP READY");
    }
  });
}

const sendVerificationEmail = async (email, token, code) => {
  try {
    const url = `${process.env.CLIENT_URL}/verify-invitation?token=${token}`;

    const info = await transporter.sendMail({
      from: `"FoxtrotTalent" <${process.env.SMTP_USER}>`,
      to: email,
      subject: "Your Fox Academy Invitation",
      html: `
        <h2>Welcome to Fox Academy 🎉</h2>
        <p>Your invitation code is: <strong>${code}</strong></p>
        <p>Click the link below to verify your invitation:</p>
        <a href="${url}">Verify Invitation</a>
        <p>This link expires in 10 minutes.</p>
      `,
    });

    console.log("Email sent:", info.response);
  } catch (error) {
    console.error("Email sending failed:", error.message);
    throw new Error("Email could not be sent");
  }
};

const sendApplicationInviteEmail = async ({ email, fullName, inviteCode, inviteLink }) => {
  try {
    const safeName = fullName || "Applicant";

    const info = await transporter.sendMail({
      from: `"FoxtrotTalent" <${process.env.SMTP_USER}>`,
      to: email,
      subject: "Your Fox Academy Invite Code",
      html: `
        <h2>Hi ${safeName},</h2>
        <p>Your application was received successfully.</p>
        <p>Use this verification code to continue:</p>
        <p><strong>${inviteCode}</strong></p>
        <p>Or click the link below to auto-fill your details:</p>
        <a href="${inviteLink}">Continue to verification</a>
      `,
    });

    console.log("Application invite email sent:", info.response);
    return true;
  } catch (error) {
    console.error("Application invite email failed:", error.message);
    return false;
  }
};

const sendAccountVerificationEmail = async ({ email, fullName, verificationLink }) => {
  try {
    const safeName = fullName || "Applicant";

    const info = await transporter.sendMail({
      from: `"FoxtrotTalent" <${process.env.SMTP_USER}>`,
      to: email,
      subject: "Verify Your Fox Academy Email",
      html: `
        <h2>Hi ${safeName},</h2>
        <p>Your Fox Academy account has been created successfully.</p>
        <p>Click the link below to verify your email address:</p>
        <a href="${verificationLink}">Verify Email</a>
        <p>This verification link expires in 24 hours.</p>
      `,
    });

    console.log("Account verification email sent:", info.response);
    return true;
  } catch (error) {
    console.error("Account verification email failed:", error.message);
    return false;
  }
};

const sendPasswordResetEmail = async ({ email, fullName, resetLink }) => {
  try {
    const safeName = fullName || "there";

    const info = await transporter.sendMail({
      from: `"FoxtrotTalent" <${process.env.SMTP_USER}>`,
      to: email,
      subject: "Reset Your Fox Academy Password",
      html: `
        <h2>Hi ${safeName},</h2>
        <p>We received a request to reset your password.</p>
        <p>Click the link below to continue:</p>
        <a href="${resetLink}">Reset Password</a>
        <p>This link expires in 60 minutes.</p>
        <p>If you did not request this, you can ignore this email.</p>
      `,
    });

    console.log("Password reset email sent:", info.response);
    return true;
  } catch (error) {
    console.error("Password reset email failed:", error.message);
    return false;
  }
};

module.exports = {
  sendVerificationEmail,
  sendApplicationInviteEmail,
  sendAccountVerificationEmail,
  sendPasswordResetEmail,
};
