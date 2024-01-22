import mongoose from "mongoose";

const messageSchema = new mongoose.Schema({
    senderId: {
        type: String
    },
    content: {
        type: String,
        trim: true,
        required: true
    },
    receiverId: {
        type: String
    },
    replyOf: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'messages'
    }
},
    { timestamps: true }
);

const messageModel = mongoose.model('messages', messageSchema);

export { messageModel };