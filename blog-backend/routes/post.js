const express = require("express");
const Post = require("../models/Post");
const auth = require("../middleware/auth");

const router = express.Router();

// 📝 Edit Post
router.put("/:id", auth, async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);

    // Only the author can edit
    if (post.author !== req.user.username)
      return res.status(403).json({ error: "Unauthorized" });

    post.title = req.body.title || post.title;
    post.content = req.body.content || post.content;
    await post.save();

    res.json({ message: "Post updated", post });
  } catch (err) {
    res.status(500).json({ error: "Error updating post" });
  }
});

// 🗑️ Delete Post
router.delete("/:id", auth, async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);

    // Only the author can delete
    if (post.author !== req.user.username)
      return res.status(403).json({ error: "Unauthorized" });

    await post.remove();
    res.json({ message: "Post deleted" });
  } catch (err) {
    res.status(500).json({ error: "Error deleting post" });
  }
});

module.exports = router;
