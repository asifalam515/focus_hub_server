import { Router } from "express";
import { auth, Role } from "../../middleware/auth";
import { NotificationController } from "./notification.controller";

const router = Router();
router.get("/", auth(Role.user), NotificationController.getNotifications);
router.patch("/:id/read", auth(Role.user), NotificationController.markASRead);

export const NotificationRouter = router;
