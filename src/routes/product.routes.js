const express = require('express');
const productController = require('../controllers/product.controller');
const { authenticate } = require('../middleware/auth');

const router = express.Router();

router.get('/', productController.getAllProducts);
router.get('/:id', productController.getProductById);
router.post('/', authenticate, productController.createProduct);
router.put('/:id', authenticate, productController.updateProduct);
router.delete('/:id', authenticate, productController.deleteProduct);

module.exports = router;