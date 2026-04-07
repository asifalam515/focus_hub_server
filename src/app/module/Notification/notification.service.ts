import { prisma } from "../../../lib/prisma";

const createNotification = async (userId: string, message: string) => {
  const newNotification = await prisma.notification.create({
    data: {
      userId,
      message,
    },
  });
  return newNotification;
};
const getNotifications = async (userId: string) => {
  const notifications = await prisma.notification.findMany({
    where: {
      userId,
    },
    orderBy: {
      createdAt: "desc",
    },
  });
  return notifications;
};
const markASRead = async (notificationId: string, userId: string) => {
  const updatedNotification = await prisma.notification.updateMany({
    where: {
      id: notificationId,
      userId,
    },
    data: {
      isRead: true,
    },
  });
  return updatedNotification;
};
const deleteNotification = async (notificationId: string, userId: string) => {
  const deletedNotification = await prisma.notification.deleteMany({
    where: {
      id: notificationId,
      userId,
    },
  });
  return deletedNotification;
};
export const NotificationService = {
  createNotification,
  getNotifications,
  markASRead,
  deleteNotification,
};
