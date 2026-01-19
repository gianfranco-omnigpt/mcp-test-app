const express = require('express');
const dotenv = require('dotenv');
const { connectDatabase } = require('../config/database');
const appConfig = require('../config/app.config');
const routes = require('./routes');
const { errorHandler } = require('./middleware/errorHandler');

// Load environment variables
dotenv.config();

// Initialize Express app
const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Connect to database
connectDatabase();

// Routes
app.use('/api', routes);

// Error handling middleware
app.use(errorHandler);

// Start server
const PORT = appConfig.port;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT} in ${appConfig.environment} mode`);
});

module.exports = app;