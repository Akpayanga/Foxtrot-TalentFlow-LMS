const https = require("https");
const dotenv = require("dotenv");
dotenv.config();

/**
 * Helper to send email via Brevo REST API v3
 */
const sendEmailViaBrevo = async (options) => {
  return new Promise((resolve, reject) => {
    const data = JSON.stringify({
      sender: { 
        email: process.env.BREVO_SENDER_EMAIL, 
        name: process.env.BREVO_SENDER_NAME || "Fox Academy" 
      },
      to: [{ email: options.to }],
      subject: options.subject,
      htmlContent: options.html,
    });

    const reqOptions = {
      hostname: "api.brevo.com",
      path: "/v3/smtp/email",
      method: "POST",
      headers: {
        "accept": "application/json",
        "api-key": process.env.BREVO_API_KEY,
        "content-type": "application/json",
        "content-length": Buffer.byteLength(data),
      },
    };

    const req = https.request(reqOptions, (res) => {
      let responseBody = "";
      res.on("data", (chunk) => {
        responseBody += chunk;
      });
      res.on("end", () => {
        if (res.statusCode >= 200 && res.statusCode < 300) {
          resolve(JSON.parse(responseBody));
        } else {
          reject(new Error(`Brevo API Error: ${res.statusCode} - ${responseBody}`));
        }
      });
    });

    req.on("error", (error) => {
      reject(error);
    });

    req.write(data);
    req.end();
  });
};

// -------------------- VERIFICATION EMAIL --------------------

const sendVerificationEmail = async (email, token, code, role) => {
  try {
    if (!token) throw new Error("Token is required");
    const cleanToken = token.replace(/\s/g, "");
    const url = `${process.env.CLIENT_URL}/verify-email?token=${encodeURIComponent(cleanToken)}&code=${encodeURIComponent(code)}`;

    const expiryHours =
      role === "student"
        ? process.env.INVITE_EXPIRY_HOURS_STUDENT || 48
        : role === "instructor"
          ? process.env.INVITE_EXPIRY_HOURS_INSTRUCTOR || 72
          : process.env.INVITE_EXPIRY_HOURS_DEFAULT || 24;

    console.log(`Attempting to send verification email to: ${email} via Brevo API`);

    await sendEmailViaBrevo({
      to: email,
      subject: "Verify Your Invitation",
      html: `
        <!DOCTYPE html>
        <html>
          <body style="font-family: Arial, sans-serif; line-height: 1.6;">
            <h2>Welcome to Fox Academy 🎉</h2>
            <p>Your invitation code is:</p>
            <p><strong>${code}</strong></p>
            <p>Click the link below to verify your invitation:</p>
            <p><a href="${url}" target="_blank">Verify Invitation</a></p>
            <p>Or copy and paste this link into your browser:</p>
            <p style="word-break: break-all;">${url}</p>
            <p>This link expires in ${expiryHours} hours.</p>
          </body>
        </html>
      `,
    });

    console.log("Verification email sent successfully via Brevo");
  } catch (error) {
    console.error("Email sending failed. Details:", error.message);
    throw new Error("Email could not be sent");
  }
};

const sendWelcomeEmail = async (email) => {
  try {
    console.log(`Attempting to send welcome email to: ${email} via Brevo API`);
    await sendEmailViaBrevo({
      to: email,
      subject: "Welcome to Fox Academy 🎉",
      html: `
        <h2>Welcome aboard!</h2>
        <p>Your invitation has been successfully verified.</p>
        <p>We’re excited to have you join Fox Academy. You can now continue your registration and start exploring your dashboard.</p>
        <p>Best regards,<br/>The Fox Academy Team</p>
      `,
    });
    console.log("Welcome email sent successfully via Brevo");
  } catch (error) {
    console.error("Welcome email sending failed. Details:", error.message);
    throw new Error("Welcome email could not be sent");
  }
};

// -------------------- WELCOME EMAILS --------------------
const sendWelcomeEmailStudent = async (email, firstName) => {
  try {
    console.log(`Attempting to send student welcome email to: ${email} via Brevo API`);
    await sendEmailViaBrevo({
      to: email,
      subject: "Welcome to Fox Academy 🎉",
      html: `
        <h2>Welcome aboard, ${firstName}!</h2>
        <p>Your student account has been verified successfully.</p>
        <p>You can now continue registration and complete your profile.</p>
        <p>Best regards,<br/>Fox Academy Team</p>
      `,
    });
    console.log("Student welcome email sent successfully via Brevo");
  } catch (error) {
    console.error("Student welcome email failed. Details:", error.message);
    throw new Error("Student welcome email could not be sent");
  }
};

const sendWelcomeEmailMentor = async (email, firstName, discipline) => {
  try {
    console.log(`Attempting to send mentor welcome email to: ${email} via Brevo API`);
    await sendEmailViaBrevo({
      to: email,
      subject: "Welcome to Fox Academy – Mentor Onboarding 🎉",
      html: `
        <h2>Welcome aboard, ${firstName}!</h2>
        <p>Your mentor account has been verified successfully.</p>
        <p>Next steps:</p>
        <ul>
          <li>Complete your registration by setting a secure password</li>
          <li>Fill out your mentor profile (bio, role title, LinkedIn, availability)</li>
          <li>Get ready to guide students in the <strong>${discipline}</strong> track</li>
        </ul>
        <p>We’re thrilled to have you join our mentor community.</p>
        <p>Warm regards,<br/>Fox Academy Team</p>
      `,
    });
    console.log("Mentor welcome email sent successfully via Brevo");
  } catch (error) {
    console.error("Mentor welcome email failed. Details:", error.message);
    throw new Error("Mentor welcome email could not be sent");
  }
};

// -------------------- PROFILE COMPLETION EMAILS --------------------
const sendProfileCompletionEmailStudent = async (email, firstName, course, studentId) => {
  try {
    console.log(`Attempting to send student profile completion email to: ${email} via Brevo API`);
    await sendEmailViaBrevo({
      to: email,
      subject: "Profile Completed – Welcome to Your Learning Journey",
      html: `
        <h2>Congratulations, ${firstName}!</h2>
        <p>You’ve successfully completed your student profile at Fox Academy.</p>
        <p>Your next steps:</p>
        <ul>
          <li>Begin exploring your course: <strong>${course}</strong></li>
          <li>Connect with your cohort</li>
          <li>Your student ID: <strong>${studentId}</strong></li>
        </ul>
        <p>We’re excited to see you grow in the ${course} track.</p>
        <p>Best regards,<br/>Fox Academy Team</p>
      `,
    });
    console.log("Student profile completion email sent successfully via Brevo");
  } catch (error) {
    console.error("Student profile completion email failed. Details:", error.message);
    throw new Error("Student profile completion email could not be sent");
  }
};

const sendProfileCompletionEmailMentor = async (email, firstName, discipline) => {
  try {
    console.log(`Attempting to send mentor profile completion email to: ${email} via Brevo API`);
    await sendEmailViaBrevo({
      to: email,
      subject: "Mentor Profile Completed – Ready to Inspire",
      html: `
        <h2>Welcome aboard, ${firstName}!</h2>
        <p>Your mentor profile has been successfully completed at Fox Academy.</p>
        <p>You’re now ready to guide students in the <strong>${discipline}</strong> track.</p>
        <p>Next steps:</p>
        <ul>
          <li>Review your availability settings</li>
          <li>Connect with your assigned cohort</li>
          <li>Begin mentoring sessions</li>
        </ul>
        <p>We’re thrilled to have you as part of our mentor community.</p>
        <p>Warm regards,<br/>Fox Academy Team</p>
      `,
    });
    console.log("Mentor profile completion email sent successfully via Brevo");
  } catch (error) {
    console.error("Mentor profile completion email failed. Details:", error.message);
    throw new Error("Mentor profile completion email could not be sent");
  }
};

// -------------------- ADMIN EMAIL --------------------

const sendWelcomeEmailAdmin = async (email, firstName) => {
  try {
    console.log(`Attempting to send admin welcome email to: ${email} via Brevo API`);
    await sendEmailViaBrevo({
      to: email,
      subject: "Welcome to Fox Academy – Admin Access 🎉",
      html: `
        <h2>Welcome, ${firstName}!</h2>
        <p>Your admin account has been verified successfully.</p>
        <p>You can now log in and manage users, courses, and mentors.</p>
        <p>Best regards,<br/>Fox Academy Team</p>
      `,
    });
    console.log("Admin welcome email sent successfully via Brevo");
  } catch (error) {
    console.error("Admin welcome email failed. Details:", error.message);
    throw new Error("Admin welcome email could not be sent");
  }
};

// -------------------- EXPORTS --------------------
module.exports = { 
  sendVerificationEmail, 
  sendWelcomeEmail,
  sendWelcomeEmailStudent, 
  sendWelcomeEmailMentor, 
  sendProfileCompletionEmailStudent, 
  sendProfileCompletionEmailMentor,
  sendWelcomeEmailAdmin
};
