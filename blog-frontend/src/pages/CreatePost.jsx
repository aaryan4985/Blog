import { useState } from "react";
import axios from "axios";

const CreatePost = () => {
  const [form, setForm] = useState({ title: "", content: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");

    try {
      await axios.post("http://localhost:5000/api/posts", form, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      alert("Post created!");
    } catch (err) {
      alert(err.response?.data?.error || "Failed to create post");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-10 space-y-4">
      <input name="title" onChange={handleChange} placeholder="Title" className="border p-2 w-full" />
      <textarea name="content" onChange={handleChange} placeholder="Content" className="border p-2 w-full h-40" />
      <button type="submit" className="bg-blue-600 text-white p-2 w-full">Create Post</button>
    </form>
  );
};

export default CreatePost;
