// src/app.ts

import express, { Express } from "express"; // Import express
import morgan from "morgan";                // Import logger middleware
import itemRoutes from "".; // Import our item routes

const app: Express = express();            // Create Express app

// Middleware: parses JSON requests automatically
app.use(express.json());

// Middleware: logs HTTP requests (method, URL, status)
app.use(morgan("dev"));

// Register item routes under /api/v1
app.use("/api/v1", itemRoutes);

// Export app for server.ts and testing
export default app;
