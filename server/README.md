# MERN Authentication - Server

## Overview
The backend server for the MERN Authentication system, built with Node.js, Express, and MongoDB. This server provides secure authentication endpoints and user management functionality.

## Features
- 🔐 JWT-based authentication
- 📦 MongoDB integration
- 🔒 Password encryption
- ✅ Input validation
- 🛡️ Security middleware
- 📝 User management
- 🔄 Refresh token rotation

## Tech Stack
- Node.js
- Express.js
- MongoDB with Mongoose
- JSON Web Tokens (JWT)
- Bcrypt
- Express Validator
- Cors
- Dotenv

## Project Structure
```bash
src/
├── controllers/     # Route controllers
├── middleware/      # Custom middleware
├── models/         # Mongoose models
├── routes/         # API routes
├── config/         # Configuration files
├── utils/          # Utility functions
└── server.js       # Entry point
```

## Getting Started

### Prerequisites
- Node.js 14.0 or later
- MongoDB

### Installation
1. Install dependencies:
```bash
npm install
```

2. Create a `.env` file:
```env
PORT=3000
MONGODB_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret
NODE_ENV=development or production
SMTP_PASSWORD=your_smtp_password
SENDER_EMAIL=your_email@example.com
ALLOWED_ORIGIN=your_allowed_origin
```

3. Start the server:
```bash
npm run dev
```

## API Endpoints

### Authentication Routes (`/api/auth`)
- POST `/api/auth/register` - Register a new user
  - Body: `{ name, email, password }`
- POST `/api/auth/login` - User login
  - Body: `{ email, password }`
- POST `/api/auth/logout` - User logout
- POST `/api/auth/send-verify-otp` - Send verification OTP
  - Requires Authentication
- POST `/api/auth/verify-account` - Verify user's email account
  - Requires Authentication
  - Body: `{ otp }`
- GET `/api/auth/is-auth` - Check authentication status
  - Requires Authentication
- POST `/api/auth/send-reset-otp` - Send password reset OTP
  - Body: `{ email }`
- POST `/api/auth/reset-password` - Reset user's password
  - Body: `{ email, otp, newPassword }`

### User Routes (`/api/user`)
- GET `/api/user/data` - Get user's data
  - Requires Authentication

### Protected Routes
Many routes require authentication via JWT token in the Authorization header:
```bash
Authorization: Bearer <your_jwt_token>
```

### Response Formats

#### Success Response
```json
{
  "success": true,
  "data": {
    // Response data
  },
  "message": "Operation successful"
}
```

#### Error Response
```json
{
  "success": false,
  "error": {
    "message": "Error message",
    "code": "ERROR_CODE"
  }
}
```

## Available Scripts
- `npm run server` - Start development server with nodemon
- `npm start` - Start production server

## Security Features
- Password hashing with bcrypt
- JWT token authentication
- Request validation
- CORS protection
- Rate limiting
- XSS protection

## Error Handling
The API implements a centralized error handling mechanism with appropriate HTTP status codes and error messages.

## Environment Variables
- `PORT` - Server port (default: 5000)
- `MONGODB_URI` - MongoDB connection string
- `JWT_SECRET` - JWT signing secret
- `SMTP_PASSWORD` - SMTP Provider (gmail) password
- `SENDER_EMAIL` - Email address used for sending emails
- `ALLOWED_ORIGIN` - Allowed origin for CORS
- `NODE_ENV` - Node environment
