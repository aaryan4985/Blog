// src/pages/Register.jsx
import { useState } from "react";
import axios from "axios";

const Register = () => {
  const [form, setForm] = useState({ username: "", email: "", password: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/api/auth/register", form);
      alert("Registered! Please login.");
    } catch (err) {
      alert(err.response?.data?.error || "Registration failed");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-10 space-y-4">
      <input name="username" onChange={handleChange} placeholder="Username" className="border p-2 w-full" />
      <input name="email" onChange={handleChange} placeholder="Email" className="border p-2 w-full" />
      <input name="password" type="password" onChange={handleChange} placeholder="Password" className="border p-2 w-full" />
      <button type="submit" className="bg-blue-600 text-white p-2 w-full">Register</button>
    </form>
  );
};

export default Register;
