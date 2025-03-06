"use client";

import { useState, useEffect } from "react";
import axios from "axios";
import Game from "../../components/Game";

export default function Home() {
    const [clientReady, setClientReady] = useState(false);
    const [user, setUser] = useState(null);
    const [form, setForm] = useState({ email: "", password: "", username: "" });
    const [isLogin, setIsLogin] = useState(true);
    const [message, setMessage] = useState("");

    useEffect(() => {
        setClientReady(true);
    }, []);

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleAuth = async () => {
        try {
            const url = isLogin ? "/api/users/login" : "/api/users/register";
            const response = await axios.post(url, form);
            setMessage(response.data.message);
            if (isLogin) setUser(response.data.user);
        } catch (error) {
            setMessage(error.response?.data?.message || "Something went wrong");
        }
    };

    if (!clientReady) return <p>Loading...</p>;

    return (
        <main className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <h1 className="text-3xl font-bold my-4">🎲 Fair Dice Game 🎲</h1>

            {!user ? (
                <div className="w-96 bg-white p-6 rounded shadow">
                    <h2 className="text-2xl font-semibold">{isLogin ? "Login" : "Register"}</h2>
                    <input type="email" name="email" placeholder="Email" className="w-full p-2 border my-2" onChange={handleChange} />
                    {!isLogin && <input type="text" name="username" placeholder="Username" className="w-full p-2 border my-2" onChange={handleChange} />}
                    <input type="password" name="password" placeholder="Password" className="w-full p-2 border my-2" onChange={handleChange} />
                    <button className="w-full bg-blue-500 text-white p-2" onClick={handleAuth}>{isLogin ? "Login" : "Register"}</button>
                    <p className="text-sm mt-2 cursor-pointer" onClick={() => setIsLogin(!isLogin)}>
                        {isLogin ? "Don't have an account? Register" : "Already have an account? Login"}
                    </p>
                    {message && <p className="text-red-500 mt-2">{message}</p>}
                </div>
            ) : (
                <Game />
            )}
        </main>
    );
}