import { Router } from "express";
import { auth, Role } from "../../middleware/auth";
import { TaskController } from "./task.controller";

const router = Router();
router.get("/", auth(Role.user), TaskController.getTasksByUser);

router.post("/", auth(Role.user), TaskController.createTask);
router.patch("/:id", auth(Role.user), TaskController.updateTask);
router.delete("/:id", auth(Role.user), TaskController.deleteTask);
router.get("/inbox", auth(Role.user), TaskController.getInboxTasksForUser);
router.post("/inbox", auth(Role.user), TaskController.addInboxTask);
router.patch("/inbox/:id/move", auth(Role.user), TaskController.moveInboxTask);
export const TaskRouter = router;
