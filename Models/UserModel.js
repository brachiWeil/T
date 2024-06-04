import mongoose from "mongoose";

const UserSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        default: "new task"
    },
    email: { type: String },
    password: { type: String },
    links: [{ type: mongoose.Schema.Types.ObjectId, ref: "links" }]
});

export default mongoose.model("users", UserSchema);