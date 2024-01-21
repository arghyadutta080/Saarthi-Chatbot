import jwt from 'jsonwebtoken'
import { userModel } from '../models/user.js';
import asyncErrorHandler from './asyncErrorHandler.js';

const authenticate = asyncErrorHandler(async (req, res, next) => {
    const { token } = req.cookies;
    if (!token) {
        return res.status(403).json({
            success: false,
            message: "user is not authenticated"
        })
    }
    const decoded = jwt.verify(token, process.env.JWT_SECRET)
    const userId = decoded.userId;
    req.user = await userModel.findById(userId);
    next();
})

export { authenticate };