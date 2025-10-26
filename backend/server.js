import express from "express";
import cors from "cors";
import connectDB from "./config/database.js"; // 👉 phải có .js


const app = express();
app.use(cors());
app.use(express.json());

// 🔗 Kết nối MongoDB
connectDB();

// Tạo model test (nếu cần)
import mongoose from "mongoose";
const userSchema = new mongoose.Schema({ name: String, email: String });
const User = mongoose.model("User", userSchema);

// Routes test
app.get("/api/users", async (req, res) => {
  const users = await User.find();
  res.json(users);
});

app.post("/api/users", async (req, res) => {
  const { name, email } = req.body;
  const newUser = new User({ name, email });
  await newUser.save();
  res.status(201).json(newUser);
});

// Chạy server
const PORT = 3000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
