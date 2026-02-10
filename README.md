# Full Stack Deployment

A modern full-stack web application with containerized deployment using Docker and Docker Compose. This project demonstrates best practices for developing, testing, and deploying scalable web applications.

## 📋 Table of Contents

- [Overview](#overview)
- [Tech Stack](#tech-stack)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Project Structure](#project-structure)
- [Running the Application](#running-the-application)
- [Environment Configuration](#environment-configuration)
- [API Endpoints](#api-endpoints)
- [Development Workflow](#development-workflow)
- [Deployment](#deployment)
- [Troubleshooting](#troubleshooting)

## 🎯 Overview

This project is a containerized full-stack application built with **Express.js** backend and **React** frontend. It's designed for seamless local development and production deployment using Docker containers and Docker Compose for orchestration.

### Key Features

- 🐳 Docker containerization for both frontend and backend
- 🔄 Docker Compose for multi-container orchestration
- ⚡ Hot-reload development environment
- 🎨 Tailwind CSS for responsive UI design
- 🔌 RESTful API with CORS support
- 📱 React + Vite for optimized frontend builds

## 🛠️ Tech Stack

### Backend
- **Runtime**: Node.js 18 (Alpine)
- **Framework**: Express.js 5.x
- **Package Manager**: npm
- **Key Dependencies**:
  - `express` - Web framework
  - `cors` - Cross-origin resource sharing
  - `dotenv` - Environment variable management
  - `nodemon` - Development auto-reload

### Frontend
- **Framework**: React 19
- **Build Tool**: Vite 7
- **Styling**: Tailwind CSS 4
- **HTTP Client**: Axios
- **Linting**: ESLint 9

### DevOps
- **Containerization**: Docker
- **Orchestration**: Docker Compose
- **Network**: Bridge network for service communication

## 📦 Prerequisites

Before running this project, ensure you have:

- **Docker Desktop** (v4.0 or higher) - [Download](https://www.docker.com/products/docker-desktop)
- **Git** for version control
- **Node.js** 18+ (optional, for local development without Docker)
- **npm** or **yarn** (optional, for local development)

## 🚀 Installation

### Option 1: Using Docker Compose (Recommended)

Clone the repository and navigate to the project root:

```bash
git clone <repository-url>
cd Full-Stack-Deployment
```

### Option 2: Local Development (Without Docker)

#### Backend Setup
```bash
cd server
npm install
npm run dev
```

#### Frontend Setup
```bash
cd client
npm install
npm run dev
```

## 📁 Project Structure

```
Full-Stack-Deployment/
├── docker-compose.yml      # Multi-container orchestration
├── README.md               # This file
├── client/                 # React frontend application
│   ├── Dockerfile          # Frontend container configuration
│   ├── package.json        # Frontend dependencies
│   ├── vite.config.js      # Vite bundler configuration
│   ├── eslint.config.js    # ESLint configuration
│   ├── index.html          # HTML entry point
│   └── src/                # React source code
│       ├── App.jsx         # Main App component
│       ├── main.jsx        # React DOM render entry
│       ├── App.css         # App styles
│       ├── index.css       # Global styles
│       └── assets/         # Static assets
└── server/                 # Express backend application
    ├── Dockerfile          # Backend container configuration
    ├── package.json        # Backend dependencies
    ├── index.js            # Server entry point
    └── ...                 # API routes and logic
```

## 🎮 Running the Application

### Using Docker Compose

Start all services (backend + frontend):

```bash
docker-compose up --build
```

**Service Endpoints:**
- **Frontend**: http://localhost:5173
- **Backend API**: http://localhost:4000

To run in detached mode:

```bash
docker-compose up -d --build
```

Stop services:

```bash
docker-compose down
```

### Building Images Separately

#### Build Backend Image
```bash
docker build -t server-node ./server
docker run -p 4000:4000 server-node
```

#### Build Frontend Image
```bash
docker build -t react-client ./client
docker run -p 5173:3000 react-client
```

## 🔧 Environment Configuration

### Backend (.env)

Create a `.env` file in the `server/` directory:

```env
PORT=4000
NODE_ENV=development
# Add your custom variables below
```

### Important: Docker Port Binding

When running inside Docker containers, bind the server to `0.0.0.0` instead of `localhost`:

```javascript
const PORT = process.env.PORT || 4000;

app.listen(PORT, "0.0.0.0", (error) => {
  if (error) {
    console.error("Server failed to start:", error);
    process.exit(1);
  }
  console.log(`✅ Server is running on http://0.0.0.0:${PORT}`);
});
```

## 📡 API Endpoints

Update this section with your actual API endpoints:

```
GET    /api/health       - Health check
GET    /api/data         - Fetch data
POST   /api/submit       - Submit data
...
```

## 💻 Development Workflow

### Backend Development

```bash
cd server
npm install              # Install dependencies
npm run dev             # Start with hot-reload (nodemon)
npm start               # Start production mode
```

### Frontend Development

```bash
cd client
npm install             # Install dependencies
npm run dev             # Start Vite dev server
npm run build           # Build for production
npm run lint            # Run ESLint
npm run preview         # Preview production build
```

### Code Quality

Ensure code quality before committing:

```bash
cd client
npm run lint            # Check for linting errors
```

## 🚢 Deployment

### Pre-Deployment Checklist

- ✅ Test locally with Docker Compose
- ✅ Update `.env` with production values
- ✅ Run linting checks
- ✅ Build production images
- ✅ Test production builds locally

### Build Production Images

```bash
docker-compose build
```

### Deploy with Docker Compose

```bash
docker-compose up -d
```

### Viewing Logs

```bash
docker-compose logs -f              # All services
docker-compose logs -f server       # Backend only
docker-compose logs -f client       # Frontend only
```

## 🔍 Troubleshooting

### Port Already in Use

If ports 4000 or 5173 are already in use:

```bash
# Change ports in docker-compose.yml
# or kill processes using those ports (macOS/Linux):
lsof -i :4000
kill -9 <PID>
```

### Frontend Cannot Connect to Backend

Ensure the backend is running and accessible:

```bash
curl http://localhost:4000/api/health
```

Update your API endpoint to use the Docker service name:

```javascript
// In frontend, use 'server' as hostname when in Docker
const API_URL = process.env.NODE_ENV === 'production' 
  ? 'http://server:4000' 
  : 'http://localhost:4000';
```

### Container Build Failures

Clear Docker cache and rebuild:

```bash
docker system prune -a
docker-compose build --no-cache
docker-compose up
```

### Volume Permission Issues (Linux)

If you encounter permission errors on Linux:

```bash
sudo usermod -aG docker $USER
newgrp docker
```

## 📝 Best Practices

1. **Always use `.gitignore`** - Don't commit `node_modules/`, `.env`, or build outputs
2. **Use environment variables** - Never hardcode sensitive data
3. **Keep images small** - Use Alpine base images
4. **Hot-reload in development** - Use volume mounts for faster development
5. **Health checks** - Add health endpoints for monitoring
6. **Logging** - Use structured logging for debugging

## 📚 Additional Resources

- [Docker Documentation](https://docs.docker.com/)
- [Docker Compose Documentation](https://docs.docker.com/compose/)
- [Express.js Guide](https://expressjs.com/)
- [React Documentation](https://react.dev/)
- [Vite Documentation](https://vitejs.dev/)

## 📧 Support

For issues or questions, please open an issue in the repository.

---

**Last Updated**: February 2026
