import User from "../models/User.js";

export const getLeaderboard = async (req, res) => {
    try {
        const leaderboard = await User.find({})
            .sort({ balance: -1 })
            .select("username balance gameHistory")
            .limit(10);

        if (!leaderboard.length) {
            return res.status(200).json({ success: true, leaderboard: [], message: "No users found" });
        }

        const formattedLeaderboard = leaderboard.map(user => ({
            username: user.username,
            balance: user.balance,
            totalWins: user.gameHistory.filter(game => game.winningAmount > 0).length,
            totalLosses: user.gameHistory.filter(game => game.winningAmount < 0).length
        }));

        res.status(200).json({ success: true, leaderboard: formattedLeaderboard });
    } catch (error) {
        console.error("Error fetching leaderboard:", error);
        res.status(500).json({ success: false, message: "Internal Server Error" });
    }
};
