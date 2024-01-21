import asyncErrorHandler from "../middlewares/asyncErrorHandler.js";
import { ErrorHandler } from "../utils/customError.js";
import { getApiResponse } from "../utils/openAI.js";

const getResponse = asyncErrorHandler(
    async (req, res, next) => {

        const { user } = req.body;
        if (!user) {
            return next(new ErrorHandler("Ask something to get a response", 404))
        }

        const response = await getApiResponse(user);

        console.log(response);

        res.status(200).json({
            user: response
        })
        console.log(user);

    }
)

export { getResponse }