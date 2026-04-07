import type { Request, Response } from "express";
import { sendResponse } from "../../utils/sendResponse";
import { NotificationService } from "./notification.service";

const creatNotification = async (req: Request, res: Response) => {
  const userId = req.user?.id;
  const { message } = req.body;
  const newNotification = await NotificationService.createNotification(
    userId,
    message,
  );
  sendResponse(res, {
    statusCode: 201,
    success: true,
    message: "Notification created successfully",
    data: newNotification,
  });
};
const getNotifications = async (req: Request, res: Response) => {
  const userId = req.user?.id;
  const notifications = await NotificationService.getNotifications(userId);
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Notifications retrieved successfully",
    data: notifications,
  });
};
const markASRead = async (req: Request, res: Response) => {
  const userId = req.user?.id;
  const notificationId = req.params.id as string;
  await NotificationService.markASRead(notificationId, userId);
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Notification marked as read successfully",
  });
};
const deleteNotification = async (req: Request, res: Response) => {
  const userId = req.user?.id;
  const notificationId = req.params.id as string;
  await NotificationService.deleteNotification(notificationId, userId);
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Notification deleted successfully",
  });
};
export const NotificationController = {
  creatNotification,
  getNotifications,
  markASRead,
  deleteNotification,
};
