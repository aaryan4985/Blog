// blog-backend/server.js
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const authRoutes = require("./routes/auth");

require("dotenv").config();
app.use("/api/auth", authRoutes);
const app = express();
app.use(cors());
app.use(express.json());

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.log("Mongo Error:", err));

app.get("/", (req, res) => res.send("API is working ✅"));

app.listen(5000, () => console.log("Server running on http://localhost:5000"));
