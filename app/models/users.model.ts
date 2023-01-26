import { model, Schema } from "mongoose";

const UsersSchema = new Schema({
    name: {
       type: String,
       required: true,
    },

    password: {
       type: String,
       required: true,
    },

    vatar: {
        type: String,
        requierd: false,
    }
});

export default model('Users', UsersSchema);
