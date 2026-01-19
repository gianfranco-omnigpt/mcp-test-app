# MCP Test App

A sample Node.js REST API application for testing GitHub MCP tool performance.

## Overview

This is a full-stack Node.js application built with Express.js and MongoDB. It provides a RESTful API for managing users and products with authentication.

## Project Structure

```
mcp-test-app/
├── config/              # Configuration files
│   ├── database.js      # Database connection setup
│   └── app.config.js    # Application configuration
├── src/
│   ├── index.js         # Application entry point
│   ├── routes/          # API route definitions
│   ├── controllers/     # Request handlers
│   ├── services/        # Business logic layer
│   ├── models/          # Database models
│   └── middleware/      # Express middleware
├── .env.example         # Environment variables template
└── package.json         # Project dependencies
```

## Features

- User authentication with JWT
- User registration and profile management
- Product CRUD operations
- MongoDB integration with Mongoose
- Error handling middleware
- Environment-based configuration

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Copy `.env.example` to `.env` and configure your environment variables

3. Start the server:
   ```bash
   npm start
   ```

## API Endpoints

### Users
- `POST /api/users/register` - Register new user
- `POST /api/users/login` - Login user
- `GET /api/users/profile` - Get user profile (authenticated)
- `PUT /api/users/profile` - Update user profile (authenticated)

### Products
- `GET /api/products` - Get all products
- `GET /api/products/:id` - Get product by ID
- `POST /api/products` - Create new product (authenticated)
- `PUT /api/products/:id` - Update product (authenticated)
- `DELETE /api/products/:id` - Delete product (authenticated)

## Architecture

The application follows a layered architecture:

1. **Routes Layer**: Defines API endpoints and maps them to controllers
2. **Controllers Layer**: Handles HTTP requests/responses and calls services
3. **Services Layer**: Contains business logic and interacts with models
4. **Models Layer**: Defines data schemas and database interactions
5. **Middleware Layer**: Authentication, error handling, and request processing

## Technologies

- Express.js - Web framework
- MongoDB - Database
- Mongoose - ODM
- JWT - Authentication
- bcrypt - Password hashing
- dotenv - Environment management