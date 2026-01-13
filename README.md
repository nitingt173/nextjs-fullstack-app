# Next.js Fullstack App

A modern Next.js application with frontend UI and backend API routes.

## Features

- **Frontend UI**: Beautiful, responsive user interface built with React and CSS modules
- **Backend API**: RESTful API routes using Next.js API routes
- **TypeScript**: Full TypeScript support for type safety
- **User Management**: Create, read, and delete users

## Getting Started

### Install Dependencies

```bash
npm install
```

### Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## Project Structure

```
├── app/
│   ├── api/
│   │   ├── users/
│   │   │   ├── [id]/
│   │   │   │   └── route.ts    # DELETE and GET user by ID
│   │   │   └── route.ts        # GET all users, POST new user
│   │   └── health/
│   │       └── route.ts        # Health check endpoint
│   ├── globals.css             # Global styles
│   ├── layout.tsx              # Root layout
│   ├── page.tsx                # Home page component
│   └── page.module.css         # Page styles
├── package.json
├── tsconfig.json
└── next.config.js
```

## API Endpoints

### GET /api/users
Get all users

### POST /api/users
Create a new user
```json
{
  "name": "John Doe",
  "email": "john@example.com"
}
```

### GET /api/users/[id]
Get a specific user by ID

### DELETE /api/users/[id]
Delete a user by ID

### GET /api/health
Health check endpoint

## Build for Production

```bash
npm run build
npm start
```

## Notes

- The current implementation uses in-memory storage for demonstration purposes
- For production, replace the in-memory storage with a proper database (PostgreSQL, MongoDB, etc.)
- Consider adding authentication and authorization for production use
