// blog-backend/server.js

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const authRoutes = require("./routes/auth"); // 💡 Import routes AFTER dotenv

const app = express(); // ✅ DEFINE app BEFORE using it

app.use(cors());
app.use(express.json());

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("✅ Connected to MongoDB"))
  .catch((err) => console.error("❌ MongoDB Error:", err));

// ✅ Use routes AFTER app is created
app.use("/api/auth", authRoutes);

app.get("/", (req, res) => res.send("API is working ✅"));

app.listen(5000, () =>
  console.log("🚀 Server running on http://localhost:5000")
);
