import mongoose from "mongoose";
import ClickSchema from "./ClickModel.js";
import TargetValueSchema from "./TargetValueModel.js";
const LinkSchema = mongoose.Schema({
    originalUrl: { type: String, default: " " }
    , clicks: [ClickSchema],

    targetParamName: {
        type: String,
        default: " "
    },
    targetValues: [TargetValueSchema]


});

export default mongoose.model("links", LinkSchema);