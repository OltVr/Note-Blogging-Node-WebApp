const mongoose = require('mongoose');

// Database connection URL (replace with your MongoDB URI)
const MONGO_URI = process.env.MONGO_URI || "mongodb://localhost:27017/notes";

// Function to connect to MongoDB
const connectDB = async () => {
  try {
    // Connect to MongoDB
    await mongoose.connect(MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB connection successful');
  } catch (err) {
    console.error('MongoDB connection failed:', err.message);
    process.exit(1); // Exit process with failure
  }
};

// Export the connection function
module.exports = connectDB;