const express = require('express');
const userRoutes = require('./user.routes');
const productRoutes = require('./product.routes');

const router = express.Router();

// Health check endpoint
router.get('/health', (req, res) => {
  res.status(200).json({ status: 'OK', message: 'Server is running' });
});

// API routes
router.use('/users', userRoutes);
router.use('/products', productRoutes);

module.exports = router;