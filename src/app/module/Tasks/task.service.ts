import { prisma } from "../../../lib/prisma";

// get all tasks for a user
const getTasksForUser = async (userId: string) => {
  const tasks = await prisma.task.findMany({
    where: { userId },
  });
  return tasks;
};
const createTask = async (userId: string, payload: any) => {
  const task = await prisma.task.create({
    data: {
      ...payload,
      userId,
    },
  });
  return task;
};
const updateTask = async (taskId: string, payload: any) => {
  const task = await prisma.task.update({
    where: { id: taskId },
    data: payload,
  });
  return task;
};
export const TaskService = {
  getTasksForUser,
  createTask,
  updateTask,
};
