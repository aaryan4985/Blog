// src/pages/Login.jsx
import { useState } from "react";
import axios from "axios";

const Login = () => {
  const [form, setForm] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/api/auth/login", form);
      localStorage.setItem("token", res.data.token);
      alert("Login successful!");
    } catch (err) {
      alert(err.response?.data?.error || "Login failed");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-10 space-y-4">
      <input name="email" onChange={handleChange} placeholder="Email" className="border p-2 w-full" />
      <input name="password" type="password" onChange={handleChange} placeholder="Password" className="border p-2 w-full" />
      <button type="submit" className="bg-green-600 text-white p-2 w-full">Login</button>
    </form>
  );
};

export default Login;
