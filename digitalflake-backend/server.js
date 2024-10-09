const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const authRoutes = require('./routes/auth');
const connectDB = require('./config/db');

dotenv.config();

const app = express();

// Middleware
app.use(express.json()); // Parses JSON requests

// Connect to MongoDB
connectDB();

// Routes
app.use('/api/auth', authRoutes);

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
