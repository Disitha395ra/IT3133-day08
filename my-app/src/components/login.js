import { useState } from "react";
import { useNavigate } from "react-router-dom";
import React from "react";

export default function Login() {
    const navigate = useNavigate();

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const authenticate = (e) => {
        e.preventDefault();

        
        if (!username || !password) {
            setError("Please provide all the fields");
            return;
        }

        if (password.length < 8) {
            setError("Password must contain at least 8 characters");
            return;
        }

        
        if (username === "Admin" && password === "12345678") {
            navigate("/dashboard");
        } else {
            setError("Invalid credentials");
        }
    };

    return (
        <div>
            <h1>Login Here</h1>
            <form onSubmit={authenticate}>
                <input
                    type="text"
                    name="username"
                    placeholder="Enter username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)} // Updates state
                />

                <input
                    type="password"
                    name="password"
                    placeholder="Enter password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)} 
                />

                <button type="submit">Login</button> 
                <span style={{ color: "red" }}>{error}</span> 
            </form>
        </div>
    );
}
