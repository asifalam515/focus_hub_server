import { Router } from "express";
import { auth, Role } from "../../middleware/auth";
import { GoalController } from "./goal.controller";

const router = Router();
router.post("/", auth(Role.user), GoalController.createGoal);
router.get("/", auth(Role.user), GoalController.getGoals);
router.delete("/:id", auth(Role.user), GoalController.deleteGoal);
router.put("/:id", auth(Role.user), GoalController.updateGoal);

export const GoalRouter = router;
