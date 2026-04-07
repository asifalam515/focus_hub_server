import { prisma } from "../../../lib/prisma";

const createGoal = async (userId: string, payload: any) => {
  const newGoal = await prisma.goal.create({
    data: {
      ...payload,
      userId,
    },
  });
  return newGoal;
};
const getGoals = async (userId: string) => {
  const goals = await prisma.goal.findMany({
    where: {
      userId,
    },
  });
  return goals;
};

const deleteGoal = async (goalId: string, userId: string) => {
  const deletedGoal = await prisma.goal.deleteMany({
    where: {
      id: goalId,
      userId,
    },
  });
  return deletedGoal;
};
const updateGoal = async (goalId: string, userId: string, payload: any) => {
  const updatedGoal = await prisma.goal.updateMany({
    where: {
      id: goalId,
      userId,
    },
    data: payload,
  });
  return updatedGoal;
};
export const GoalService = {
  createGoal,
  getGoals,
  deleteGoal,
  updateGoal,
};
