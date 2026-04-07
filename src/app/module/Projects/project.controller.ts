import type { Request, Response } from "express";
import { sendResponse } from "../../utils/sendResponse";
import { ProjectService } from "./project.service";

const createProject = async (req: Request, res: Response) => {
  try {
    const { name, description } = req.body;
    const userId = req.user?.id as string;

    const project = await ProjectService.createProject(userId, {
      name,
      description,
      userId,
    });
    sendResponse(res, {
      statusCode: 201,
      message: "Project created successfully",
      data: project,
      success: true,
    });
  } catch (error: any) {
    sendResponse(res, {
      statusCode: 500,
      message: error.message,
      data: null,
      success: false,
    });
  }
};
const getProjects = async (req: Request, res: Response) => {
  try {
    const userId = req.user?.id as string;
    const projects = await ProjectService.getProjects(userId);
    sendResponse(res, {
      statusCode: 200,
      message: "Projects fetched successfully",
      data: projects,
      success: true,
    });
  } catch (error: any) {
    sendResponse(res, {
      statusCode: 500,
      message: error.message,
      data: null,
      success: false,
    });
  }
};
export const ProjectController = {
  createProject,
  getProjects,
};
