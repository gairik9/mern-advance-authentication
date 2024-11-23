import express from "express";
import {
  Signin,
  Signout,
  SignUp,
  VerifyEmail,
  ForgotPassword,
  ResetPassword,
  CheckAuth,
} from "../controllers/auth.controller.js";
import { VerifyToken } from "../middleware/verifyToken.js";

const router = express.Router();

// * Check  if user is logged in :
router.get("/check-auth", VerifyToken,CheckAuth);

// * SignUp/Register Route :
router.post("/signup", SignUp);

// * SignIn/Login Route :
router.post("/signin", Signin);

// * SignOut/Logout Route :
router.post("/signout", Signout);

// * Verify Email Route :
router.post("/verify-email", VerifyEmail);

// * Forgot Password Route :
router.post("/forgot-password", ForgotPassword);

// * Reset Password Route :
router.post("/reset-password/:token", ResetPassword);

export default router;
