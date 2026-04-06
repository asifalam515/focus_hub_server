import type { Request, Response } from "express";
import { sendResponse } from "../../utils/sendResponse";
import { TaskService } from "./task.service";

const getTasksByUser = async (req: Request, res: Response) => {
  try {
    const userId = req.user?.id as string;
    const tasks = await TaskService.getTasksForUser(userId);
    sendResponse(res, {
      statusCode: 200,
      message: "Tasks retrieved successfully",
      data: tasks,
      success: true,
    });
  } catch (error: any) {
    sendResponse(res, {
      statusCode: 500,
      message: error.message || "Failed to retrieve tasks",
      success: false,
    });
  }
};
export const TaskController = {
  getTasksByUser,
};
