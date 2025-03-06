import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  balance: { type: Number, default: 1000 },
  gameHistory: [
    {
      rollResult: Number,
      winningAmount: Number,
      balanceAfter: Number,
      createdAt: { type: Date, default: Date.now },
    },
  ],
});


const User = mongoose.model("User", userSchema);
export default User;
