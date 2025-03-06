"use client";
import { useState, useEffect } from "react";
import { rollDice } from "../services/gameService";

const RollDice = () => {
  const [betAmount, setBetAmount] = useState(10);
  const [balance, setBalance] = useState(1000);
  const [result, setResult] = useState(null);
  const [token, setToken] = useState(null);

  // Ensure localStorage is only accessed on the client side
  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedToken = localStorage.getItem("token");
      const savedBalance = localStorage.getItem("balance");
      
      if (storedToken) setToken(storedToken);
      if (savedBalance) setBalance(Number(savedBalance));
    }
  }, []);

  const handleRoll = async () => {
    if (!token) {
      console.error("No token found. User not authenticated.");
      return;
    }

    try {
      const data = await rollDice(token, betAmount);
      setResult(data.rollResult);
      setBalance(data.balance);
      localStorage.setItem("balance", data.balance);
    } catch (error) {
      console.error("Error rolling dice:", error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
      <h2 className="text-3xl font-bold mb-6">💰 Balance: ${balance}</h2>

      <input
        type="number"
        value={betAmount}
        onChange={(e) => setBetAmount(Number(e.target.value))}
        className="border p-3 my-4 bg-gray-800 text-white rounded text-center w-32"
      />

      <button
        onClick={handleRoll}
        className="px-6 py-3 bg-green-500 hover:bg-green-700 text-white font-bold rounded-lg transition"
      >
        Roll Dice
      </button>

      {result !== null && <h3 className="mt-4 text-2xl text-yellow-300 font-bold">🎲 Dice Rolled: {result}</h3>}
    </div>
  );
};

export default RollDice;
