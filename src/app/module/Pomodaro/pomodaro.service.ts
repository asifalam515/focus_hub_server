import { prisma } from "../../../lib/prisma";

const createPomodoro = async (userId: string, payload: any) => {
  const newPomodoro = await prisma.pomodoroSession.create({
    data: {
      ...payload,
      userId,
    },
  });
  return newPomodoro;
};
const getPomodaros = async (userId: string) => {
  const pomodaros = await prisma.pomodoroSession.findMany({
    where: {
      userId,
    },
  });
  return pomodaros;
};
const deletePomodoro = async (pomodoroId: string, userId: string) => {
  const deletedPomodoro = await prisma.pomodoroSession.deleteMany({
    where: {
      id: pomodoroId,
      userId,
    },
  });
  return deletedPomodoro;
};
const updatePomodoro = async (
  pomodoroId: string,
  userId: string,
  payload: any,
) => {
  const updatedPomodoro = await prisma.pomodoroSession.updateMany({
    where: {
      id: pomodoroId,
      userId,
    },
    data: payload,
  });
  return updatedPomodoro;
};
export const PomodoroService = {
  createPomodoro,
  getPomodaros,
  deletePomodoro,
  updatePomodoro,
};
