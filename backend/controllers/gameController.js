import User from "../models/User.js";

export const rollDice = async (req, res) => {
    try {
        const userId = req.user.userId;
        const { betAmount } = req.body;

        const user = await User.findById(userId);
        if (!user) return res.status(404).json({ error: "User not found" });

        if (betAmount <= 0 || betAmount > user.balance)
            return res.status(400).json({ error: "Invalid bet amount" });

        const rollResult = Math.floor(Math.random() * 6) + 1;
        const isWin = rollResult > 3;
        const winningAmount = isWin ? betAmount * 2 : -betAmount;

        user.balance += winningAmount;
        user.gameHistory.push({ rollResult, winningAmount, balanceAfter: user.balance });
        await user.save();

        res.json({ rollResult, winningAmount, balance: user.balance });
    } catch (err) {
        res.status(500).json({ error: "Server error" });
    }
};