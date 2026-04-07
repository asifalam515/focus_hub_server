import cors from "cors";
import type { Application, Request, Response } from "express";
import express from "express";
import { globalErrorHandler } from "./app/middleware/globalErrorHandler";
import { AuthRouter } from "./app/module/Auth/auth.router";
import { HabitRouter } from "./app/module/Habit/habit.router";
import { ProjectRouter } from "./app/module/Projects/project.router";
import { TaskRouter } from "./app/module/Tasks/task.router";
const app: Application = express();
const port = 5000; // The port your express server will be running on.

// Enable URL-encoded form data parsing
app.use(express.urlencoded({ extended: true }));

// Middleware to parse JSON bodies
app.use(express.json());
app.use(cors());
// Basic route
// auth router
app.use("/api/v1/auth", AuthRouter);
// tasks router
app.use("/api/v1/tasks", TaskRouter);
// projects router
app.use("/api/v1/projects", ProjectRouter);
// habit router
app.use("/api/v1/habits", HabitRouter);
app.get("/", (req: Request, res: Response) => {
  res.send("Hello, TypeScript + Express!");
});

app.use(globalErrorHandler);

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
