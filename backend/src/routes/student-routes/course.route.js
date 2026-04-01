const express = require('express');
const router = express.Router();

// Local route imports
const {getAllStudentViewCourses,getStudentViewCourseDetails} = require("../../controllers/students-controllers/course.controller")
router.get("/course", getAllStudentViewCourses );
router.get("/course/:id", getStudentViewCourseDetails );


module.exports = router;