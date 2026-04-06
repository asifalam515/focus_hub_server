import { Router } from "express";
import { TaskController } from "./task.controller";

const router = Router();
router.get("/", TaskController.getTasksByUser);
