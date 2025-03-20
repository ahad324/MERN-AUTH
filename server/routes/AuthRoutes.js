import express from "express";
import { register, login, logout, sendVerifyOtp, verifyEmail, isAuthenticated, sendResetOtp, resetPassword } from "../controllers/AuthController.js";
import userAuth from "../middleware/userAuth.js";

const AuthRouter = express.Router();

AuthRouter.post('/register', register)
AuthRouter.post('/login', login)
AuthRouter.post('/logout', logout)
AuthRouter.post('/send-verify-otp', userAuth, sendVerifyOtp)
AuthRouter.post('/verify-account', userAuth, verifyEmail)
AuthRouter.get('/is-auth', userAuth, isAuthenticated)
AuthRouter.post('/send-reset-otp', sendResetOtp)
AuthRouter.post('/reset-password', resetPassword)

export default AuthRouter