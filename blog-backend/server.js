// blog-backend/server.js

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const authRoutes = require("./routes/auth");
const postRoutes = require("./routes/post");

const app = express();

// ✅ Apply middleware BEFORE defining routes
app.use(cors({ origin: "http://localhost:3000", credentials: true }));
app.use(express.json());

// ✅ Routes
app.use("/api/auth", authRoutes);
app.use("/api/posts", postRoutes);

app.get("/", (req, res) => res.send("API is working ✅"));

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("✅ Connected to MongoDB"))
  .catch((err) => console.error("❌ MongoDB Error:", err));

app.listen(5000, () =>
  console.log("🚀 Server running on http://localhost:5000")
);
