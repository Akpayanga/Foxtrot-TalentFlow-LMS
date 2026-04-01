const express = require('express');
const { 
    addNewCourse, 
    getAllCourses, 
    getCourseDetailsByID, 
    updateCourseByID 
} = require('../../controllers/instructor-controllers/courseInstructor.controller');
const router = express.Router();

// Local route imports

router.post("/add", addNewCourse );
router.get("/courseList", getAllCourses)
router.get("/details/:id", getCourseDetailsByID)
router.put("/update/:id", updateCourseByID)


module.exports = router;