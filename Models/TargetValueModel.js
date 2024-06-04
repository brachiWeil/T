import mongoose from "mongoose";

const TargetValueSchema = new mongoose.Schema({
    name: { type: String },
    value: { type: String }
})

export default TargetValueSchema