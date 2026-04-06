import { prisma } from "../../../lib/prisma";

// get all tasks for a user
const getTasksForUser = async (userId: string) => {
  const tasks = await prisma.task.findMany({
    where: { userId },
  });
  return tasks;
};

export const TaskService = {
  getTasksForUser,
};
