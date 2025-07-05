# Subscription Tracker API

A simple REST API for managing user subscriptions with authentication.

## Features

-  User authentication (sign up, sign in)
-  User management
-  Subscription tracking per user
-  JWT-based authentication
-  MongoDB integration

## API Endpoints

### Authentication

-  `POST /auth/signup` - Create new user account
-  `POST /auth/signin` - Sign in existing user
-  `POST /auth/signout` - Sign out user

### Users

-  `GET /users` - Get all users
-  `GET /users/:id` - Get user by ID

### Subscriptions

-  `POST /subscriptions` - Create new subscription (authenticated)
-  `GET /subscriptions/:id` - Get user's subscriptions (authenticated)

## Tech Stack

-  Node.js
-  Express.js
-  MongoDB with Mongoose
-  JWT for authentication
-  bcryptjs for password hashing

## Setup

1. Clone the repository
2. Install dependencies: `npm install`
3. Set up environment variables:
   -  `JWT_SECRET` - Secret key for JWT tokens
   -  `JWT_EXPIRES_IN` - JWT expiration time
   -  MongoDB connection string
4. Run the server: `npm start`

## Authentication

Include JWT token in Authorization header:

```
Authorization: Bearer <your-jwt-token>
```

## Request/Response Format

All responses follow this structure:

```json
{
   "success": true,
   "message": "Operation successful",
   "data": {}
}
```
