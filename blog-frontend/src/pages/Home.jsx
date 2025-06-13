// src/pages/Home.jsx
import { useEffect, useState } from "react";
import axios from "axios";

const Home = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/posts")
      .then((res) => setPosts(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="max-w-2xl mx-auto mt-10">
      <h1 className="text-2xl font-bold mb-4">Latest Posts</h1>
      {posts.map((post) => (
        <div key={post._id} className="border p-4 mb-4">
          <h2 className="text-xl font-semibold">{post.title}</h2>
          <p className="text-sm text-gray-600">by {post.author}</p>
          <p>{post.content}</p>
        </div>
      ))}
    </div>
  );
};

export default Home;
