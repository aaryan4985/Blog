// src/pages/Dashboard.jsx
import { useEffect, useState } from "react";
import axios from "axios";

const Dashboard = () => {
  const [posts, setPosts] = useState([]);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchPosts = async () => {
    const token = localStorage.getItem("token");
    try {
      const userRes = await axios.get("http://localhost:5000/api/auth/me", {
        headers: { Authorization: `Bearer ${token}` },
      });
      setUser(userRes.data);

      const postRes = await axios.get("http://localhost:5000/api/posts");
      setPosts(postRes.data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    const token = localStorage.getItem("token");
    try {
      await axios.delete(`http://localhost:5000/api/posts/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setPosts(posts.filter((post) => post._id !== id));
    } catch (err) {
      alert(err.response?.data?.error || "Delete failed");
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.href = "/login";
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  if (loading) return <p className="text-center mt-10">Loading...</p>;

  return (
    <div className="max-w-2xl mx-auto mt-10">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Your Dashboard</h1>
        <button
          onClick={handleLogout}
          className="bg-red-600 text-white px-4 py-1 rounded"
        >
          Logout
        </button>
      </div>

      {posts.filter((p) => p.author === user?.username).length === 0 ? (
        <p className="text-gray-500">No posts yet.</p>
      ) : (
        posts
          .filter((p) => p.author === user?.username)
          .map((post) => (
            <div key={post._id} className="border p-4 mb-4 rounded shadow">
              <h2 className="text-xl font-semibold">{post.title}</h2>
              <p className="mt-1">{post.content}</p>
              <div className="text-sm text-gray-500 mt-2">By {post.author}</div>

              <div className="mt-3 space-x-2">
                <button
                  onClick={() =>
                    alert("Implement EditPost.jsx for editing this post.")
                  }
                  className="bg-yellow-500 text-white px-3 py-1 rounded"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(post._id)}
                  className="bg-red-600 text-white px-3 py-1 rounded"
                >
                  Delete
                </button>
              </div>
            </div>
          ))
      )}
    </div>
  );
};

export default Dashboard;
