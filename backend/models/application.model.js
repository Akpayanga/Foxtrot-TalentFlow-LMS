const mongoose = require("mongoose");

const applicationSchema = new mongoose.Schema(
  {
    fullName: { type: String, required: true, trim: true },
    email: { type: String, required: true, lowercase: true, trim: true },
    phoneNumber: { type: String, required: true, trim: true },
    primaryDiscipline: { 
      type: String, 
      enum: ["UI/UX", "Frontend", "Backend", "Data Science", "Product Manager", "Social Media"], 
      required: true 
    },
    expertiseLevel: { 
      type: String, 
      enum: ["Entry", "Intermediate", "Senior", "Lead"], 
      required: true 
    },
    personalStatement: { type: String, required: true, trim: true },
    portfolioUrl: { type: String, trim: true },
    githubLinkedin: { type: String, trim: true },
    inviteCode: { type: String, trim: true, unique: true, sparse: true },
    accountCreated: { type: Boolean, default: false },
    accountCreatedAt: { type: Date, default: null },
    emailVerified: { type: Boolean, default: false },
    emailVerificationToken: { type: String, default: null },
    emailVerificationTokenExpiry: { type: Date, default: null },
    status: { 
      type: String, 
      enum: ["pending", "reviewed", "accepted", "rejected"], 
      default: "pending" 
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Application", applicationSchema);
