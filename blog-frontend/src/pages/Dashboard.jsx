// src/pages/Dashboard.jsx
import { useEffect, useState } from "react";
import axios from "axios";

const Dashboard = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");

    axios
      .get("http://localhost:5000/api/auth/me", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => setUser(res.data))
      .catch(() => setUser(null));
  }, []);

  if (!user) return <p className="text-center mt-10">Loading or unauthorized...</p>;

  return (
    <div className="text-center mt-10">
      <h1 className="text-2xl font-bold">Welcome, {user.username}!</h1>
      <p>Email: {user.email}</p>
    </div>
  );
};

export default Dashboard;
