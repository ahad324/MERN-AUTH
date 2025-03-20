# MERN Authentication - Client

## Overview
The frontend application for the MERN Authentication system, built with React and Vite. This application provides a modern, responsive user interface for authentication operations.

## Features
- 🎨 Modern UI with TailwindCSS
- 🔐 Secure authentication flows
- 📱 Responsive design for all devices
- 🔄 Global State management with Context Hook
- 🛣️ Protected routing
- ✨ Form validation
- React Hot Toast for toasts

## Tech Stack
- React 18
- Vite
- React Router DOM
- Axios
- React Hook Form

## Project Structure
```bash
src/
├── components/       # Reusable UI components
├── pages/           # Page components
├── features/        # Redux slices and features
├── services/        # API services
└── App.jsx         # Main application component
```

## Getting Started

### Prerequisites
- Node.js 14.0 or later
- npm or yarn

### Installation
1. Install dependencies:
```bash
npm install
```

2. Create a `.env` file in the root directory:
```env
VITE_BACKEND_URL=http://localhost:3000
```

3. Start the development server:
```bash
npm run dev
```

## Available Scripts
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run lint` - Run ESLint
- `npm run preview` - Preview production build

## Development
- Uses Vite for faster development experience
- Includes ESLint configuration
- Supports hot module replacement

## Build
To build for production:
```bash
npm run build
```

The build artifacts will be stored in the `dist/` directory.
