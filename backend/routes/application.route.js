const express = require("express");
const router = express.Router();
const applicationController = require("../controllers/application.controller");

router.post("/submit", applicationController.submitApplication);
router.post("/verify-invite", applicationController.verifyInviteCode);
router.post("/resend-invite", applicationController.resendInviteCode);
router.post("/complete-registration", applicationController.completeRegistration);
router.post("/verify-email", applicationController.verifyEmail);
router.post("/resend-email-verification", applicationController.resendEmailVerification);
router.get("/status/:email", applicationController.getApplicationStatus);

module.exports = router;
