const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// Lấy danh sách tất cả người dùng
router.get('/users', userController.getUsers);

// Thêm người dùng mới
router.post('/users', userController.createUser);

// Cập nhật thông tin người dùng (PUT)
router.put('/users/:id', userController.updateUser);

// Xóa người dùng (DELETE)
router.delete('/users/:id', userController.deleteUser);

module.exports = router;
