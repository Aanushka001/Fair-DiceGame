import { useContext, useState, useEffect } from "react";
import { useRouter } from "next/router";
import AuthContext from "../context/authContext";
import { rollDice } from "../services/gameService";
import Leaderboard from "../components/Leaderboard";

export default function Game() {
  const { user, logout } = useContext(AuthContext);
  const router = useRouter();
  const [betAmount, setBetAmount] = useState(10);
  const [balance, setBalance] = useState(1000);
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");
  const [isRolling, setIsRolling] = useState(false);

  useEffect(() => {
    if (!user) {
      alert("Please log in first.");
      router.push("/auth/login");
    } else {
      const storedBalance = localStorage.getItem("balance");
      if (storedBalance) setBalance(Number(storedBalance));
    }
  }, [user, router]);

  const handleRoll = async () => {
    if (!user?.token) {
      alert("Invalid session. Please log in again.");
      logout();
      return;
    }

    if (betAmount <= 0 || betAmount > balance) {
      setError("Invalid bet amount");
      return;
    }

    setIsRolling(true);
    setError("");

    try {
      const data = await rollDice(user.userId, betAmount, user.token);
      setResult(data);
      setBalance(data.balance);
      localStorage.setItem("balance", data.balance);
    } catch (err) {
      setError(err.response?.data?.error || "Error rolling dice");
    } finally {
      setIsRolling(false);
    }
  };

  return (
    <div className="game-container">
      <h1 className="game-title">🎲 Fair Dice Game</h1>

      {user && <p className="text-center text-lg text-gray-300">👤 {user.username}</p>}

      <p className="game-balance">💰 Balance: ${balance}</p>

      <div className="space-y-4">
        <label className="block text-sm font-medium text-gray-300">
          Bet Amount
          <input
            type="number"
            value={betAmount}
            onChange={(e) => setBetAmount(Number(e.target.value))}
            className="game-input"
            min="1"
            max={balance}
          />
        </label>

        {error && <p className="text-red-500 text-center">{error}</p>}

        <button
          onClick={handleRoll}
          disabled={isRolling}
          className="game-button"
        >
          {isRolling ? "Rolling..." : "Roll Dice"}
        </button>
      </div>

      {result && (
        <div className="game-result">
          <p className="text-lg">🎲 Dice Roll: {result.rollResult}</p>
          <p className={`text-xl ${result.winningAmount > 0 ? 'game-win' : 'game-lose'}`}>
            {result.winningAmount > 0
              ? `🎉 You Won: $${result.winningAmount}`
              : `😞 You Lost: $${Math.abs(result.winningAmount)}`}
          </p>
          <p className="text-lg">💰 New Balance: ${balance}</p>
          <p className="text-sm text-gray-400">🔐 Hash: {result.hash}</p>
        </div>
      )}

      <div className="mt-6 space-x-4 text-center">
        <button onClick={() => router.push("/auth/login")} className="text-blue-500 hover:underline">
          Go to Login
        </button>
        <button onClick={() => router.push("/auth/register")} className="text-blue-500 hover:underline">
          Go to Register
        </button>
        <button onClick={logout} className="text-red-500 hover:underline">
          Logout
        </button>
      </div>

      <Leaderboard />
    </div>
  );
}