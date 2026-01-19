module.exports = {
  port: process.env.PORT || 3000,
  environment: process.env.NODE_ENV || 'development',
  apiVersion: 'v1',
  corsOrigins: ['http://localhost:3000', 'http://localhost:8080'],
  jwtSecret: process.env.JWT_SECRET,
  apiSecretKey: process.env.API_SECRET_KEY
};