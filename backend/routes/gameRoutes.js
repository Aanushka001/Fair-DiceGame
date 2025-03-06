import express from "express";
import authenticateUser from "../middlewares/authMiddleware.js";
import { rollDice } from "../controllers/gameController.js";

const router = express.Router();

router.post("/roll", authenticateUser, rollDice);

export default router;
