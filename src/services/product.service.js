const Product = require('../models/product.model');

const getProducts = async (filters) => {
  const { category, minPrice, maxPrice } = filters;
  const query = {};
  if (category) query.category = category;
  if (minPrice || maxPrice) {
    query.price = {};
    if (minPrice) query.price.$gte = parseFloat(minPrice);
    if (maxPrice) query.price.$lte = parseFloat(maxPrice);
  }
  return await Product.find(query);
};

const getProductById = async (productId) => {
  return await Product.findById(productId);
};

const createProduct = async (productData) => {
  const product = new Product(productData);
  await product.save();
  return product;
};

const updateProduct = async (productId, updateData) => {
  return await Product.findByIdAndUpdate(productId, updateData, { new: true });
};

const deleteProduct = async (productId) => {
  await Product.findByIdAndDelete(productId);
};

module.exports = { getProducts, getProductById, createProduct, updateProduct, deleteProduct };