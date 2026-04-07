import type { Request, Response } from "express";
import { sendResponse } from "../../utils/sendResponse";
import { HabitService } from "./habit.service";

const createHabit = async (req: Request, res: Response) => {
  const userId = req.user?.id as string;
  const payload = req.body;
  const newHabit = await HabitService.createHabit(userId, payload);
  sendResponse(res, {
    statusCode: 201,
    success: true,
    message: "Habit created successfully",
    data: newHabit,
  });
};
const getHabit = async (req: Request, res: Response) => {
  const userId = req.user?.id as string;
  const habits = await HabitService.getHabits(userId);
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Habits retrieved successfully",
    data: habits,
  });
};
export const HabitController = {
  createHabit,
  getHabit,
};
