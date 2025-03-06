"use client"; 
import React, { useEffect, useState } from "react";
import "../styles/Leaderboard.css"; 
const Leaderboard = () => {
    const [players, setPlayers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        const fetchLeaderboard = async () => {
            setLoading(true);
            setError("");

            const token = localStorage.getItem("token");
            const apiUrl = process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:5000";

            try {
                const response = await fetch(`${apiUrl}/api/leaderboard`, {
                    method: "GET",
                    headers: {
                        Authorization: `Bearer ${token}`,
                        "Content-Type": "application/json",
                    },
                });

                if (!response.ok) {
                    const errorText = await response.text();
                    throw new Error(`HTTP ${response.status}: ${errorText}`);
                }

                const data = await response.json();

                if (data.success) {
                    setPlayers(data.leaderboard || []);
                } else {
                    setError(data.message || "Failed to load leaderboard.");
                }
            } catch (error) {
                setError(error.message || "Error fetching leaderboard.");
            } finally {
                setLoading(false);
            }
        };

        fetchLeaderboard();
    }, []);

    return (
        <div className="leaderboard-container">
            <h2>Leaderboard</h2>

            {error && <p className="error-text">{error}</p>}
            {loading ? (
                <p>Loading leaderboard...</p>
            ) : (
                <table className="leaderboard-table">
                    <thead>
                        <tr>
                            <th>Rank</th>
                            <th>Username</th>
                            <th>Balance</th>
                            <th>Wins</th>
                            <th>Losses</th>
                        </tr>
                    </thead>
                    <tbody>
                        {players.length > 0 ? (
                            players.map((player, index) => (
                                <tr key={player.username || index}>
                                    <td>#{index + 1}</td>
                                    <td>{player.username}</td>
                                    <td>${player.balance.toFixed(2)}</td>
                                    <td>{player.totalWins}</td>
                                    <td>{player.totalLosses}</td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="5">No leaderboard data available.</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            )}
        </div>
    );
};

export default Leaderboard;
