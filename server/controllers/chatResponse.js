import asyncErrorHandler from "../middlewares/asyncErrorHandler.js";
import { messageModel } from "../models/message.js";
import { ErrorHandler } from "../utils/customError.js";
import { getApiResponse } from "../utils/openAI.js";

const getResponse = asyncErrorHandler(
    async (req, res, next) => {

        if (!req.user) {        // req.user is received from authenticate middleware 
            return next(new ErrorHandler("Login First", 401));
        }

        const { userMsg } = req.body;

        if (!userMsg) {
            return next(new ErrorHandler("Ask something to get a response", 404));
        }

        const response = await getApiResponse(userMsg);     // OpenAI generated response

        if (!response) {
            return next(new ErrorHandler("Response not found. Try again later", 500));
        }

        res.status(200).json({
            success: true,
            response
        })

        const msg = new messageModel({          // sender = user
            senderId: req.user._id,
            content: userMsg
        })
        await msg.save();

        const reply = new messageModel({        // receiver = user
            receiverId: req.user._id,
            content: response,
            replyOf: msg        // storing the reference of user message
        })
        await reply.save();
    }
)

const getChat = asyncErrorHandler( 
    async (req, res, next) => {
        if (!req.user) {        // req.user is received from authenticate middleware 
            return next(new ErrorHandler("Login First", 401));
        }

        const chat = await messageModel.find({ receiverId: req.user._id }).populate('replyOf');

        if(!chat) {
            return next(new ErrorHandler("Chat not found, create some chat first", 404));
        }

        res.status(200).json({
            success: true,
            chat
        })
    }
)

export { getResponse, getChat }