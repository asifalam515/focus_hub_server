import { Router } from "express";
import { auth, Role } from "../../middleware/auth";
import { PomodoroController } from "./pomodaro.controller";

const router = Router();
router.get("/", auth(Role.user), PomodoroController.getPomodaros);
router.post("/", auth(Role.user), PomodoroController.createPomodoro);
router.delete("/:id", auth(Role.user), PomodoroController.deletePomodoro);
router.put("/:id", auth(Role.user), PomodoroController.updatePomodoro);

export const PomodoroRouter = router;
