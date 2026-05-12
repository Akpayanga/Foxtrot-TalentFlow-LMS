const express = require("express");
const router = express.Router();
const dashboardController = require("../controllers/dashboard.controller");
const auth = require("../middleware/Auth.middle");
const requireAuthAndRole = require("../middleware/AuthRole.middleware");

router.get("/", auth, dashboardController.getDashboardData);
router.get("/admin", requireAuthAndRole("admin"), dashboardController.getAdminDashboardStats);
router.get("/mentor", requireAuthAndRole("admin", "instructor"), dashboardController.getMentorDashboardStats);

module.exports = router;
