import cors from "cors";
import express from "express";
import { globalErrorHandler } from "./app/middleware/globalErrorHandler";
import { AuthRouter } from "./app/module/Auth/auth.router";
const app = express();
const port = 5000; // The port your express server will be running on.
// Enable URL-encoded form data parsing
app.use(express.urlencoded({ extended: true }));
// Middleware to parse JSON bodies
app.use(express.json());
app.use(cors());
// Basic route
// auth router
app.use("/api/v1/auth", AuthRouter);
app.get("/", (req, res) => {
    res.send("Hello, TypeScript + Express!");
});
app.use(globalErrorHandler);
// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
//# sourceMappingURL=server.js.map