import asyncErrorHandler from "../middlewares/asyncErrorHandler.js";
import { userModel } from "../models/user.js";
import { ErrorHandler } from "../utils/customError.js";
import bcrypt from 'bcrypt'
import { generateCookies } from "../utils/generateCookies.js";


const registration = asyncErrorHandler(async (req, res, next) => {
    const { username, email, password, confirmPassword } = req.body;
    const user = await userModel.findOne({ email });
    if (!user) {
        if (username && email && password && confirmPassword) {
            if (password === confirmPassword) {
                const hashedPassword = await bcrypt.hash(password, 10);
                const newUser = new userModel({ username, email, password: hashedPassword });
                newUser.save();
                const msg = "You have successfully registered yourself"
                generateCookies(newUser,msg, res);
            } else {
                return next(new ErrorHandler("Password and Confirm Password should be same", 400));
            }
        } else {
            return next(new ErrorHandler("All fields are mandatory", 400));
        }
    } else {
        return next(new ErrorHandler("User already exists", 400));
    }
})


const login = asyncErrorHandler(async (req, res, next) => {
    const { username, password } = req.body;
    if (username && password) {
        const user = await userModel.findOne({ $or: [{ email: username }, { username: username }] });
        if (user) {
            const matchPassword = await bcrypt.compare(password, user.password);
            if (matchPassword) {
                const msg = "You have successfully Logged In yourelf"
                generateCookies(user, msg, res)
            } else {
                return next(new ErrorHandler("Wrong User-ID or Password", 404));
            }
        } else {
            return next(new ErrorHandler("Wrong User-ID or Password", 404));
        }
    } else {
        return next(new ErrorHandler('All fields are mandatory', 400));
    }
})


const profile = asyncErrorHandler(async (req, res, next) => {
    if (!req.user) {
        return next(new ErrorHandler("Profile not found!", 404));
    }
    return res.status(201).json({
        success: true,
        user: {
            userId: req.user._id,
            username: req.user.username,
            email: req.user.email
        }
    })
})


const logout = asyncErrorHandler(async (req, res, next) => {
    if (!req.user) {
        return next(new ErrorHandler("No user is Logged In", 404));
    }
    return res.clearCookie('token').status(200).json({
        success: true,
        message: "successfully Logged Out"
    })

})


export { registration, login, profile, logout };