import { useState, useContext } from "react";
import { useRouter } from "next/router";
import AuthContext from "../../context/authContext";
import axios from "axios";
import "../../styles/Login.css";

const API_URL = "http://localhost:5000/api/auth";

export default function Login() {
  const { login } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter(); 

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const response = await axios.post(`${API_URL}/login`, { email, password });

      console.log("API Response:", response.data);

      if (response.data?.token) {
        login(response.data);
        router.push("/game");  
      } else {
        setError("Invalid credentials. Please try again.");
      }
    } catch (err) {
      console.error("Login Error:", err.response?.data || err.message);
      setError(err.response?.data?.error || "Invalid credentials. Try again.");
    }
  };

  return (
    <div className="login-container">
      <h2 className="login-title">Login</h2>
      <form className="login-form" onSubmit={handleLogin}>
        <input
          className="login-input"
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          className="login-input"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button className="login-button" type="submit">Login</button>
      </form>
      {error && <p className="error-message">{error}</p>}
      <div className="navigation-buttons">
        <button onClick={() => router.push("/")}>Go to Home</button>
        <button onClick={() => router.push("/auth/register")}>Go to Register</button>
      </div>
    </div>
  );
}
