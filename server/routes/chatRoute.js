import express from 'express';
import { getChat, getResponse } from '../controllers/chatResponse.js';
import { authenticate } from '../middlewares/authenticate.js';

const chatRouter = express.Router();

chatRouter.post('/api/chat', authenticate, getResponse);
chatRouter.get('/api/getchat', authenticate, getChat);

export { chatRouter };