const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

// Lấy danh sách tất cả người dùng
router.get("/", (req, res) => {
  const users = userController.getAllUsers();
  res.json(users);
});

// Thêm người dùng mới
router.post("/", (req, res) => {
  const { name, email } = req.body;
  const newUser = userController.createUser({ name, email });
  res.status(201).json(newUser);
});

module.exports = router;
