const express = require("express");
const router = express.Router();
const managementController = require("../controllers/management.controller");
const requireAuthAndRole = require("../middleware/AuthRole.middleware");

router.get("/mentors", requireAuthAndRole("admin"), managementController.listMentors);
router.get("/interns", requireAuthAndRole("admin", "instructor"), managementController.listInterns);

module.exports = router;
