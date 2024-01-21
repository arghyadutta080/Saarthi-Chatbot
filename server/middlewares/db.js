import mongoose from "mongoose"
import asyncErrorHandler from "./asyncErrorHandler.js"

const connectDB = asyncErrorHandler (async() => {
    await mongoose.connect(process.env.MONGODB_URL, {
        dbName: 'chatbot'
    })
    console.log("DB connected")
})

export {connectDB}