import Leaderboard from "../components/Leaderboard";

export default function Dashboard() {
    return (
        <div className="flex flex-col items-center">
            <h1 className="text-3xl font-bold text-white">🎲 Dice Game Dashboard</h1>
            <Leaderboard />
        </div>
    );
}

