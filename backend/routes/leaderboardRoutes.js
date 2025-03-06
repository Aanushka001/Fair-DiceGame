import express from "express";
import { getLeaderboard } from "../controllers/leaderboardController.js";
import authenticateUser from "../middlewares/authMiddleware.js";

const router = express.Router();

router.get("/", authenticateUser, getLeaderboard);

export default router;
