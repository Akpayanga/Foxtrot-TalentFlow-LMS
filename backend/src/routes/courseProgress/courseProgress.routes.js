const express = require('express');
const router = express.Router();

const { getCurrentCourseProgress, resetCurrentCourseProgress } = require("../../controllers/courseProgress.controller");

router.get('/course-progress/:userId/:courseId', getCurrentCourseProgress);
router.post("/reset-progress", resetCurrentCourseProgress);


module.exports = router;