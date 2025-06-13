const express = require("express");
const router = express.Router();
const { createPost } = require("../controllers/postController");
const auth = require("../middleware/auth");

router.post("/", auth, createPost);

module.exports = router;
