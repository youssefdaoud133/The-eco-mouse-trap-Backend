const express = require('express');
const mongoose = require('mongoose');
// const dotenv = require('dotenv');
// const connectDB = require('./config/db');
// const postRoutes = require('./routes/postRoutes');
const issueRoutes = require('./routes/issues'); // Adjust the path

const geminiRoutes = require('./routes/geminiRoutes'); // Import gemini routes
const cors = require('cors');  // Import the cors package

// dotenv.config();
// connectDB(); // Connect to MongoDB

const app = express();
app.use(cors()); // This will enable CORS for all routes
app.use(express.json()); // Parse JSON request bodies
// Connect to Mongo
mongoose.connect('mongodb://localhost:27017/posts')
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.log(err));

// // Use the post routes
// app.use('/api', postRoutes);
const postRoutes = require('./routes/posts');
app.use('/posts', postRoutes);

// Use issue routes
app.use('/issue', issueRoutes);
app.use('/api', geminiRoutes); // Use the gemini routes

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);    
});
