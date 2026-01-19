const User = require('../models/user.model');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const appConfig = require('../../config/app.config');

const createUser = async (userData) => {
  const hashedPassword = await bcrypt.hash(userData.password, 10);
  const user = new User({ ...userData, password: hashedPassword });
  await user.save();
  return { id: user._id, email: user.email, name: user.name };
};

const authenticateUser = async (email, password) => {
  const user = await User.findOne({ email });
  if (!user || !(await bcrypt.compare(password, user.password))) {
    throw new Error('Invalid credentials');
  }
  const token = jwt.sign({ id: user._id, email: user.email }, appConfig.jwtSecret, { expiresIn: '24h' });
  return { token, user: { id: user._id, email: user.email, name: user.name } };
};

const getUserById = async (userId) => {
  const user = await User.findById(userId).select('-password');
  return user;
};

const updateUser = async (userId, updateData) => {
  const user = await User.findByIdAndUpdate(userId, updateData, { new: true }).select('-password');
  return user;
};

module.exports = { createUser, authenticateUser, getUserById, updateUser };