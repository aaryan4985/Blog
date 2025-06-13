// blog-backend/routes/auth.js

const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
const { register, login, getMe } = require("../controllers/authController");

// Public Routes
router.post("/register", register);
router.post("/login", login);

// 🔒 Protected Route
router.get("/me", auth, getMe);

module.exports = router;
