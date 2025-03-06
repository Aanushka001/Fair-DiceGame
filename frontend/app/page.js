"use client";
import { useRouter } from "next/navigation";
import '../styles/global.css'; 
export default function Home() {
  const router = useRouter();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
      <h1 className="text-4xl font-bold mb-4">Welcome to Fair Dice Game 🎲</h1>
      <p className="text-lg opacity-80 mb-6">A simple provably fair dice game</p>
      
      <div className="flex gap-4">
        <button
          onClick={() => router.push("/auth/login")}
          className="px-6 py-3 rounded-lg bg-blue-600 hover:bg-blue-700 transition-all text-white font-semibold shadow-lg"
        >
          Login
        </button>
        <button
          onClick={() => router.push("/auth/register")}
          className="px-6 py-3 rounded-lg bg-green-600 hover:bg-green-700 transition-all text-white font-semibold shadow-lg"
        >
          Register
        </button>
      </div>
    </div>
  );
}
