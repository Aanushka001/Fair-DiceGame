import mongoose from "mongoose";

const gameSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  betAmount: { type: Number, required: true },
  rollResult: { type: Number, required: true },
  winningAmount: { type: Number, required: true },
  hash: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.model("Game", gameSchema);
