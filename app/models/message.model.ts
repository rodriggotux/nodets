import { model, Schema } from "mongoose";

const MessageSchema = new Schema({
    text: {
       type: String,
       required: true,
    },

    createdAt: {
       type: Date,
       default: Date.now,
    },

    sender: {
        type: Schema.Types.ObjectId,
        ref: 'Users',
        requierd: true,
    },

    recipient: {
        type: Schema.Types.ObjectId,
        refe: 'Users',
        required: true,
    }
});

export default model('Message', MessageSchema);
