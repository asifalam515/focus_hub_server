import { prisma } from "../../../lib/prisma";

const createProject = async (userId: string, payload: any) => {
  const project = await prisma.project.create({
    data: {
      ...payload,
      userId,
    },
  });
  return project;
};

export const ProjectService = {
  createProject,
};
