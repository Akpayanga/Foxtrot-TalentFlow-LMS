const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const userSchema = new mongoose.Schema(
  {
    firstName: { type: String, required: true, trim: true },
    lastName: { type: String, required: true, trim: true },
    email: { type: String, required: true, lowercase: true },
    phoneNumber: { type: String, trim: true },
    password: {
      type: String,
      required: function () {
        return this.provider === "local" && !this.preRegistered;
      },
      minlength: 8,
    },
    provider: { type: String, enum: ["local", "google"], default: "local" },
    role: {
      type: String,
      enum: ["student"], // RESTRICTED: only student role allowed
      default: "student",
    },
    // Pre-registration fields
    discipline: {
      type: String,
      enum: [
        "backend",
        "frontend",
        "uiux",
        "graphicdesign",
        "socialmedia",
        "cybersecurity",
      ],
      required: function () {
        return this.preRegistered;
      },
    },
    expertiseLevel: {
      type: String,
      enum: ["entry", "intermediate", "senior", "lead"],
      required: function () {
        return this.preRegistered;
      },
    },
    statement: { type: String, trim: true }, // motivation text
    portfolioUrl: { type: String, trim: true },
    githubOrLinkedIn: { type: String, trim: true },

    // Verification
    isVerified: { type: Boolean, default: false },
    verificationToken: { type: String, default: null },
    verificationTokenExpiry: { type: Date, default: null },

    // Invitation flow
    invitationCode: { type: String, default: null },
    isInvited: { type: Boolean, default: false },
    preRegistered: { type: Boolean, default: false },

    // Student onboarding
    studentId: { type: String, unique: true, sparse: true },
    course: {
      type: String,
      enum: [
        "backend",
        "frontend",
        "uiux",
        "graphicdesign",
        "socialmedia",
        "cybersecurity",
      ],
      required: function () {
        return this.role === "student" && !this.preRegistered;
      },
    },
    cohort: {
      type: String,
      trim: true,
      default: function () {
        // Default to current year Phase 1 cohort
        const year = new Date().getFullYear();
        return `Phase 1 - ${year}`;
      },
    },
    // Instructor onboarding
    bio: { type: String, trim: true },
    linkedIn: { type: String, trim: true },
    phoneNumber: { type: String, trim: true },
    roleTitle: { type: String, trim: true },
    cohort: { type: String, trim: true },
    profilePhoto: {
      type: String,
      trim: true,
      default: "https://cdn.foxacademy.com/defaults/avatar.png", // placeholder avatar
    },
    availability: { type: Boolean, default: true },

    // Password reset
    resetToken: { type: String, default: null },
    resetTokenExpiry: { type: Date, default: null },

    // Status flags
    isActive: { type: Boolean, default: true },
    deletedAt: { type: Date, default: null },
  },
  { timestamps: true },
);

// Index for faster lookups
userSchema.index({ email: 1, provider: 1 }, { unique: true });

// Pre-save hook to hash password automatically
userSchema.pre("save", async function () {
  if (this.isModified("password") && this.provider === "local") {
    this.password = await bcrypt.hash(this.password, 10);
  }
});

// Method to compare passwords
userSchema.methods.comparePassword = async function (candidatePassword) {
  return bcrypt.compare(candidatePassword, this.password);
};

// Virtual field: fullName (simplified)
userSchema.virtual("fullName").get(function () {
  return `${this.firstName} ${this.lastName}`;
});

// Transform JSON output (hide sensitive fields)
userSchema.set("toJSON", {
  transform: (doc, ret) => {
    delete ret.password;
    delete ret.resetToken;
    delete ret.resetTokenExpiry;
    delete ret.verificationToken;
    delete ret.verificationTokenExpiry;
    return ret;
  },
});

// Query helpers
userSchema.query.notDeleted = function () {
  return this.where({ deletedAt: null });
};
userSchema.query.isAdmin = function () {
  return this.where({ role: "admin", deletedAt: null });
};
userSchema.query.isInstructor = function () {
  return this.where({ role: "instructor", deletedAt: null });
};
userSchema.query.isStudent = function () {
  return this.where({ role: "student", deletedAt: null });
};

// Static methods for soft/hard delete
userSchema.statics.softDelete = async function (id) {
  return this.findByIdAndUpdate(id, { deletedAt: new Date() }, { new: true });
};
userSchema.statics.restore = async function (id) {
  return this.findByIdAndUpdate(id, { deletedAt: null }, { new: true });
};
userSchema.statics.hardDelete = async function (id) {
  return this.findByIdAndDelete(id);
};

module.exports = mongoose.model("User", userSchema);
