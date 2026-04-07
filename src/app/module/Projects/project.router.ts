import { Router } from "express";
import { auth, Role } from "../../middleware/auth";
import { ProjectController } from "./project.controller";

const router = Router();
router.post("/", auth(Role.user), ProjectController.createProject);
router.get("/", auth(Role.user), ProjectController.getProjects);

export const ProjectRouter = router;
