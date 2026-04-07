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
const createTask = async (req: Request, res: Response) => {
  try {
    const userId = req.user?.id as string;
    console.log("user id is ", userId);
    const payload = req.body;
    const task = await TaskService.createTask(userId, payload);
    sendResponse(res, {
      statusCode: 201,
      message: "Task created successfully",
      data: task,
      success: true,
    });
  } catch (error: any) {
    sendResponse(res, {
      statusCode: 500,
      message: error.message || "Failed to create task",
      success: false,
    });
  }
};
const updateTask = async (req: Request, res: Response) => {
  try {
    const taskId = req.params.id as string;
    const payload = req.body;
    const task = await TaskService.updateTask(taskId, payload);
    sendResponse(res, {
      statusCode: 200,
      message: "Task updated successfully",
      data: task,
      success: true,
    });
  } catch (error: any) {
    sendResponse(res, {
      statusCode: 500,
      message: error.message || "Failed to update task",
      success: false,
    });
  }
};
const deleteTask = async (req: Request, res: Response) => {
  try {
    const taskId = req.params.id as string;
    await TaskService.deleteTask(taskId);
    sendResponse(res, {
      statusCode: 200,
      message: "Task deleted successfully",
      success: true,
    });
  } catch (error: any) {
    sendResponse(res, {
      statusCode: 500,
      message: error.message || "Failed to delete task",
      success: false,
    });
  }
};
const getInboxTasksForUser = async (req: Request, res: Response) => {
  try {
    const userId = req.user?.id as string;
    const tasks = await TaskService.getInboxTasksForUser(userId);
    sendResponse(res, {
      statusCode: 200,
      message: "Inbox tasks retrieved successfully",
      data: tasks,
      success: true,
    });
  } catch (error: any) {
    sendResponse(res, {
      statusCode: 500,
      message: error.message || "Failed to retrieve inbox tasks",
      success: false,
    });
  }
};

export const TaskController = {
  getTasksByUser,
  createTask,
  updateTask,
  deleteTask,
  getInboxTasksForUser,
};
