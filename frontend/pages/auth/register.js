import { useState } from "react";
import { useRouter } from "next/router"; 
import axios from "axios";
import "../../styles/Register.css";

const API_URL = "http://localhost:5000/api/auth";

export default function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter(); 
  const handleRegister = async (e) => {
    e.preventDefault();
    setError("");

    try {
      await axios.post(`${API_URL}/register`, { username, email, password });

      router.push("/");
    } catch (err) {
      setError(err.response?.data?.error || "Registration failed. Try again.");
    }
  };

  return (
    <div className="register-container">
      <h2 className="register-title">Register</h2>
      <form className="register-form" onSubmit={handleRegister}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Register</button>
      </form>
      {error && <p className="error-message">{error}</p>}

      <div className="navigation-buttons">
        <button onClick={() => router.push("/")}>Go to Login</button>
      </div>
    </div>
  );
}
