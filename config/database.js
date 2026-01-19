const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

const connectDatabase = async () => {
  try {
    const dbURI = `mongodb://${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`;
    await mongoose.connect(dbURI);
    console.log('Database connected successfully');
  } catch (error) {
    console.error('Database connection error:', error);
    process.exit(1);
  }
};

module.exports = { connectDatabase };