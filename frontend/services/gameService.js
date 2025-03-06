import axios from "axios";

const API_URL = "http://localhost:5000/api/game/roll";
export const rollDice = async (userId, betAmount, token) => {
  const response = await fetch("http://localhost:5000/api/game/roll", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${token}` // ✅ Include the token
    },
    body: JSON.stringify({ userId, betAmount }),
  });

  if (!response.ok) {
    throw new Error("Invalid token");
  }

  return response.json();
};
