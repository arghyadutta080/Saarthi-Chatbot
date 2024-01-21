import express from 'express';
import { getResponse } from '../controllers/chatResponse.js';

const chatRouter = express.Router();

chatRouter.post('/api/chat', getResponse);

export { chatRouter };