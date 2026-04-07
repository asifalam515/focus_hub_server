import { Router } from "express";
import { auth, Role } from "../../middleware/auth";
import { HabitController } from "./habit.controller";

const router = Router();
router.post("/", auth(Role.user), HabitController.createHabit);
router.get("/", auth(Role.user), HabitController.getHabit);

export const HabitRouter = router;
