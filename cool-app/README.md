# Cool React + Node App

A simple full-stack app with:
- React frontend
- Node.js/Express backend
- Nginx serving frontend in production

## Quick start (local dev)

1. Backend

```bash
cd backend
npm install
npm run dev
```

2. Frontend (new terminal)

```bash
cd frontend
npm install
npm run dev
```

- Frontend: http://localhost:5173
- Backend: http://localhost:5000

## Run with Docker (frontend hosted on Nginx)

```bash
docker compose up --build
```

- Frontend (Nginx): http://localhost:8080
- Backend API: http://localhost:5000/api

## Environment

Copy `backend/.env.example` to `backend/.env` if you want custom values.
