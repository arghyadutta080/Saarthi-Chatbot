import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors'
import { chatRouter } from './routes/chatRoute.js';
import { errorMiddleware } from './middlewares/errorHandler.js';

const app = express();
dotenv.config()

app.get('/', (req, res) => {
    res.send("Welcome to Chatbot");
})

// middlewares
app.use(express.json());
app.use(cors({
    origin: true,
    credentials: true
}))

// routing middlewares
app.use(chatRouter);

// error middleware
app.use(errorMiddleware);

const port = process.env.PORT
app.listen(port, () => {
    console.log(`App is listening on port ${port}`);
})