const mongoose = require("mongoose");

const instructorProfileSchema = new mongoose.Schema(
  {
    userId: { 
      type: mongoose.Schema.Types.ObjectId, 
      ref: "User", 
      required: true, 
      unique: true 
    },
    title: { type: String, trim: true }, // e.g., Senior Backend Engineer
    bio: { type: String, trim: true },
    disciplines: [{ 
      type: String, 
      enum: ["backend", "frontend", "cybersecurity", "product design"] 
    }],
    experience: { type: Number, default: 0 },
    linkedIn: { type: String, trim: true },
    totalAssignedInterns: { type: Number, default: 0 },
    averageInternProgress: { type: Number, default: 0 },
    status: { type: String, enum: ["ACTIVE", "INACTIVE"], default: "ACTIVE" }
  },
  { timestamps: true }
);

module.exports = mongoose.model("InstructorProfile", instructorProfileSchema);
