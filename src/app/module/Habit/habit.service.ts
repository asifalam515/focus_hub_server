import { prisma } from "../../../lib/prisma";

const createHabit = async (userId: string, payload: any) => {
  const newHabit = await prisma.habit.create({
    data: {
      ...payload,
      userId,
    },
  });
  return newHabit;
};
const getHabits = async (userId: string) => {
  const habits = await prisma.habit.findMany({
    where: {
      userId,
    },
  });
  return habits;
};
export const HabitService = {
  createHabit,
  getHabits,
};
