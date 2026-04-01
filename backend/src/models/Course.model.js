const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const LectureSchema = new Schema({
  title: String,
  videoUrl: String,
  public_id: String,
  freePreview: Boolean,
});

const CourseSchema = new Schema({
  instructorId: String,
  instructorName: String,
  date: Date,
  title: String,
  category: String,
  level: String,
  primaryLanguage: String,
  subtitle: String,
  description: String,
  image: String,
  welcomeMessage: String,
  objectives: String,
  students: [
    {
      studentId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
      studentName: String,
      studentEmail: String,
    },
  ],
  
  curriculum: [LectureSchema],
  isPublised: Boolean,
});

module.exports = mongoose.model("Course", CourseSchema);