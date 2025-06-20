// src/App.js
import { Routes, Route, Link } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import CreatePost from "./pages/CreatePost";
import Home from "./pages/Home";

function App() {
  return (
    <div>
      <nav className="flex gap-4 p-4 bg-gray-100">
        <Link to="/register">Register</Link>
        <Link to="/login">Login</Link>
        <Link to="/dashboard">Dashboard</Link>
      </nav>

      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/createPost" element={<CreatePost />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
