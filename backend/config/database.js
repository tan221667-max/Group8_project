const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect("mongodb+srv://tan221667_db_user:123456Aa@cluster0.ivwudfd.mongodb.net/groupDB?retryWrites=true&w=majority");
    console.log("✅ MongoDB Atlas connected successfully!");
  } catch (error) {
    console.error("❌ MongoDB connection error:", error.message);
    process.exit(1);
  }
};

// ⚠️ Chú ý: chỉ có 1 chữ 'module' thôi, KHÔNG phải 'modules'
module.exports = connectDB;
