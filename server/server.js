import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors'
import { chatRouter } from './routes/chatRoute.js';
import { errorMiddleware } from './middlewares/errorHandler.js';
import cookieParser from 'cookie-parser';
import { connectDB } from './middlewares/db.js';
import { userRouter } from './routes/userRoute.js';

const app = express();
dotenv.config()

app.get('/', (req, res) => {
    res.send("Welcome to Chatbot");
})

// middlewares
app.use(express.json());
app.use(cookieParser());
app.use(cors({
    origin: true,
    credentials: true
}))

connectDB();    // connecting Database

// routing middlewares
app.use(chatRouter);
app.use(userRouter);

// error handling middleware
app.use(errorMiddleware);

const port = process.env.PORT
app.listen(port, () => {
    console.log(`App is listening on port ${port}`);
})