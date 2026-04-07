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
const getProjects = async (userId: string) => {
  const projects = await prisma.project.findMany({
    where: {
      userId,
    },
  });
  return projects;
};
export const ProjectService = {
  createProject,
  getProjects,
};
