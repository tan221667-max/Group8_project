// ----------------------
// File: server.js
// ----------------------
const express = require('express');
const app = express();

// Middleware đọc JSON từ body
app.use(express.json());

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
