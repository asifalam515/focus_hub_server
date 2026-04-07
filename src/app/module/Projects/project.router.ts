import { Router } from "express";
import { auth, Role } from "../../middleware/auth";
import { ProjectController } from "./project.controller";

const router = Router();
router.post("/", auth(Role.user), ProjectController.createProject);

export const ProjectRouter = router;
