const Post = require("../models/Post");

exports.createPost = async (req, res) => {
  const { title, content } = req.body;
  try {
    const newPost = await Post.create({
      title,
      content,
      author: req.user.id, // user injected by auth middleware
    });
    res.status(201).json(newPost);
  } catch (err) {
    res
      .status(400)
      .json({ error: "Post creation failed", details: err.message });
  }
};
