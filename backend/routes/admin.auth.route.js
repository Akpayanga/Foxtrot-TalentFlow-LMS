const express = require("express");
const router = express.Router();
const passport = require("passport");

const adminAuthController = require("../controllers/Admin.Auth.controller");
const authController = require("../controllers/ForgetResetSharedPassword");
const requireAuthAndRole = require("../middleware/AuthRole.middleware");
const validate = require("../middleware/validate.middleware");
const {
  adminRegisterSchema,
  adminLoginSchema,
  adminInviteMentorSchema,
  forgotPasswordSchema,
  resetPasswordSchema,
  adminRefreshTokenSchema,
  adminUpdateUserSchema,
  adminGetUsersSchema,
} = require("../validation/Auth.validation");

// Admin flows
router.post(
  "/register",
  requireAuthAndRole("admin"),
  validate(adminRegisterSchema),
  adminAuthController.adminRegister,
);

router.get("/verify", adminAuthController.adminVerifyEmail);

// Local login / refresh / logout
router.post(
  "/login",
  validate(adminLoginSchema),
  adminAuthController.adminLogin,
);
router.post(
  "/refresh-token",
  validate(adminRefreshTokenSchema),
  adminAuthController.adminRefreshToken,
);
router.post("/logout", adminAuthController.adminLogout);
router.post(
  "/forgot-password",
  validate(forgotPasswordSchema),
  authController.forgotPassword,
);
router.post(
  "/reset-password",
  validate(resetPasswordSchema),
  authController.resetPassword,
);

router.get(
  "/google",
  passport.authenticate("google-admin", { scope: ["profile", "email"] }),
);

router.get(
  "/google/callback",
  passport.authenticate("google-admin", { session: false }),
  adminAuthController.googleAdminLogin,
);

/// Students
router.post("/students", requireAuthAndRole("admin"), adminAuthController.adminAddStudent);
router.get("/students", requireAuthAndRole("admin"), adminAuthController.adminGetUsers);
router.get("/students/:userId", requireAuthAndRole("admin"), adminAuthController.adminGetUser);
router.delete("/students/:userId", requireAuthAndRole("admin"), adminAuthController.adminDeleteUser);
router.put("/students/:userId/restore", requireAuthAndRole("admin"), adminAuthController.adminRestoreUser);

// Mentors
router.post(
  "/mentors/invite",
  requireAuthAndRole("admin"),
  validate(adminInviteMentorSchema),
  adminAuthController.adminInviteMentor
);
router.get("/mentors", requireAuthAndRole("admin"), adminAuthController.adminGetUsers);
router.get("/mentors/:userId", requireAuthAndRole("admin"), adminAuthController.adminGetUser);
router.delete("/mentors/:userId", requireAuthAndRole("admin"), adminAuthController.adminDeleteUser);
router.put("/mentors/:userId/restore", requireAuthAndRole("admin"), adminAuthController.adminRestoreUser);
router.put(
  "/users/:userId",
  requireAuthAndRole("admin"),
  validate(adminUpdateUserSchema),
  adminAuthController.adminUpdateUser
);

// Get users with filters
router.get(
  "/users",
  requireAuthAndRole("admin"),
  validate(adminGetUsersSchema),
  adminAuthController.adminGetUsers
);
module.exports = router;
