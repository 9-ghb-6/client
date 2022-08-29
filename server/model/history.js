
import mongoose from "mongoose";

const spendSchema = new mongoose.Schema({
    account : String,
    itemDate : {type: Date, required: true},
    useDesc : String,
    cashAmt : {type: Number, default : 0},
    cardAmt : {type: Number, default : 0},
    category : String,
    tag : String,
});

export default mongoose.model("History", historySchema);