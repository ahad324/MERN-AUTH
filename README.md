# MERN Stack Authentication Project

## Overview
A full-stack authentication system built using the MERN (MongoDB, Express.js, React, Node.js) stack. This project implements secure user authentication with modern best practices and a clean, responsive user interface.

## Features
- 🔐 Secure user authentication
- 📱 Responsive design
- 🔄 JWT-based authentication
- 🎨 Modern UI
- 🛡️ Protected routes
- 🔒 Password encryption
- ✨ Form validation

## Project Structure
```bash
├── client/            
├── server/            
└── README.md         
```

## Tech Stack
### Frontend
- React.js with Vite
- Context hook for global state management
- React Router for navigation
- Axios for API requests

### Backend
- Node.js & Express.js
- MongoDB with Mongoose
- JWT for authentication
- Bcrypt for password hashing
- Express-validator for validation

## Getting Started
1. Clone the repository
```bash
git clone https://github.com/ahad324/MERN-AUTH.git
```

2. Install dependencies for both client and server
```bash
# Install server dependencies
cd server
npm install

# Install client dependencies
cd client/MERN-AUTH
npm install
```

3. Set up environment variables
- Create `.env` file in server directory
- Create `.env` file in client/MERN-AUTH directory

4. Run the application
```bash
# Run server (from server directory)
npm run dev

# Run client (from client/MERN-AUTH directory)
npm run dev
```

## Contributing
Contributions are welcome! Please feel free to submit a Pull Request.