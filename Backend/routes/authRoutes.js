import express from 'express';
import { getCurrentUser, login, logout, register } from '../controllers/authController.js';
// import User from '../models/User.js';
import authMiddleware from "../middleware/authMiddleware.js";


const router = express.Router();

// test route
router.get('/test', (req,res)=>{
    res.send("Auth Route Working")
});


// Public Routes
router.post('/register', register);
router.post('/login', login)
router.post('/logout', logout);
router.get('/me', authMiddleware,getCurrentUser)
router.get('/dashboard', authMiddleware, (req, res)=>{
    res.json({
        success: true,
        message: "Welcome To Dashboard",
        userId: req.userId
    });
});

export default router;