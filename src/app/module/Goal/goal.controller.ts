import type { Request, Response } from "express";
import { sendResponse } from "../../utils/sendResponse";
import { GoalService } from "./goal.service";

const createGoal = async (req: Request, res: Response) => {
  const userId = req.user?.id;
  const payload = req.body;

  const newGoal = await GoalService.createGoal(userId, payload);

  sendResponse(res, {
    statusCode: 201,
    success: true,
    message: "Goal created successfully",
    data: newGoal,
  });
};
const getGoals = async (req: Request, res: Response) => {
  const userId = req.user?.id;
  const goals = await GoalService.getGoals(userId);
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Goals retrieved successfully",
    data: goals,
  });
};
const deleteGoal = async (req: Request, res: Response) => {
  const userId = req.user?.id;
  const goalId = req.params.id as string;
  const deletedGoal = await GoalService.deleteGoal(goalId, userId);
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Goal deleted successfully",
    data: deletedGoal,
  });
};
const updateGoal = async (req: Request, res: Response) => {
  const userId = req.user?.id;
  const goalId = req.params.id as string;
  const payload = req.body;
  const updatedGoal = await GoalService.updateGoal(goalId, userId, payload);
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Goal updated successfully",
    data: updatedGoal,
  });
};
export const GoalController = {
  createGoal,
  getGoals,
  deleteGoal,
  updateGoal,
};
