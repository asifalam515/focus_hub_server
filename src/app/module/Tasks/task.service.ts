import { prisma } from "../../../lib/prisma";
export type TaskStatus = "inbox" | "next-action" | "completed";
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
const deleteTask = async (taskId: string) => {
  await prisma.task.delete({
    where: { id: taskId },
  });
};
const getInboxTasksForUser = async (userId: string) => {
  const tasks = await prisma.task.findMany({
    where: {
      userId,
      status: "inbox",
    },
  });
  return tasks;
};
const addInboxTask = async (userId: string, payload: any) => {
  const task = await prisma.task.create({
    data: {
      ...payload,
      userId,
      status: "inbox",
    },
  });
  return task;
};
const movedInboxTask = async (taskId: string, status: any) => {
  const task = await prisma.task.update({
    where: { id: taskId },
    data: { status },
  });
  return task;
};

export const TaskService = {
  getTasksForUser,
  createTask,
  updateTask,
  deleteTask,
  getInboxTasksForUser,
  addInboxTask,
  movedInboxTask,
};
