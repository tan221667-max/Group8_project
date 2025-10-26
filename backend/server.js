// ----------------------
// File: server.js
// ----------------------
const express = require('express');
const cors = require('cors');
require('dotenv').config();

const connectDB = require('./config/database');

const app = express();

// Kết nối MongoDB
connectDB();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api', require('./routes/user'));

// Route test mặc định
app.get('/', (req, res) => {
  res.send('✅ Backend server is running!');
});

// Route test JSON
app.get('/api/test', (req, res) => {
  res.json({
    message: '🎉 API is working correctly!',
    time: new Date().toLocaleString()
  });
});

// Chạy server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 Server is running on port ${PORT}`);
});
