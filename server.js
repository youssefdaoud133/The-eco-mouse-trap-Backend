const express = require('express');
// const mongoose = require('mongoose');
// const dotenv = require('dotenv');
// const connectDB = require('./config/db');
// const postRoutes = require('./routes/postRoutes');
const geminiRoutes = require('./routes/geminiRoutes'); // Import gemini routes

// dotenv.config();
// connectDB(); // Connect to MongoDB

const app = express();
app.use(express.json()); // Parse JSON request bodies

// // Use the post routes
// app.use('/api', postRoutes);
app.use('/api', geminiRoutes); // Use the gemini routes

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
