const express = require("express");
const router = express.Router();
const dashboardController = require("../controllers/dashboard.controller");
const auth = require("../middleware/Auth.middle");
const requireAdminPasscode = require("../middleware/AdminPasscode.middleware");

router.get("/", auth, dashboardController.getDashboardData);
router.get("/admin", requireAdminPasscode, dashboardController.getAdminDashboardStats);
router.get("/mentor", auth, dashboardController.getMentorDashboardStats);

module.exports = router;
