const express = require('express');
const router = express.Router();

// Local route imports
const courseProgressRoutes = require("./courseProgress/courseProgress.routes");
const courseLearningRoutes = require("./student-routes/course.route");
const instructorRoutes = require("./instructor-routes/instructor.routes");
const mediaRoutes = require("./instructor-routes/media.route");
const notificationRoutes = require("./Notification.routes");

router.use("/student", courseProgressRoutes );
router.use("/learning", courseLearningRoutes);
router.use("/instructor", instructorRoutes);
router.use("/media", mediaRoutes);
router.use("/notification", notificationRoutes);

module.exports = router;