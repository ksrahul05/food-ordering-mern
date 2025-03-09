const mongoose = require("mongoose");

const MONGODB_URL =
  "mongodb+srv://22501a4435:rahul@cluster0.ctogk.mongodb.net/food-order-system?retryWrites=true&w=majority&appName=Cluster0";

async function connectDB() {
  try {
    await mongoose.connect(MONGODB_URL);
    console.log("Database connected successfully!");
  } catch (error) {
    console.error("Database connection failed:", error);
    process.exit(1); // Exit process on failure
  }
}

module.exports = connectDB;
