// blog-backend/routes/post.js
const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
const Post = require("../models/Post");

// Create a post
router.post("/", auth, async (req, res) => {
  try {
    const { title, content } = req.body;
    const newPost = await Post.create({
      title,
      content,
      author: req.user.username,
    });
    res.status(201).json(newPost);
  } catch (err) {
    res
      .status(400)
      .json({ error: "Post creation failed", details: err.message });
  }
});

// Get all posts
router.get("/", async (req, res) => {
  try {
    const posts = await Post.find().sort({ createdAt: -1 });
    res.json(posts);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch posts" });
  }
});

module.exports = router;
