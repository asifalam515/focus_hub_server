import { sendResponse } from "../../utils/sendResponse";
import { PomodoroService } from "./pomodaro.service";

const createPomodoro = async (req: any, res: any) => {
  const userId = req.user?.id as string;
  const payload = req.body;
  const newPomodoro = await PomodoroService.createPomodoro(userId, payload);
  sendResponse(res, {
    statusCode: 201,
    success: true,
    message: "Pomodoro session created successfully",
    data: newPomodoro,
  });
};
const getPomodaros = async (req: any, res: any) => {
  const userId = req.user?.id as string;
  const pomodaros = await PomodoroService.getPomodaros(userId);
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Pomodoro sessions retrieved successfully",
    data: pomodaros,
  });
};
const deletePomodoro = async (req: any, res: any) => {
  const userId = req.user?.id as string;
  const pomodoroId = req.params.id as string;
  await PomodoroService.deletePomodoro(pomodoroId, userId);
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Pomodoro session deleted successfully",
  });
};
const updatePomodoro = async (req: any, res: any) => {
  const userId = req.user?.id as string;
  const pomodoroId = req.params.id as string;
  const payload = req.body;
  await PomodoroService.updatePomodoro(pomodoroId, userId, payload);
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Pomodoro session updated successfully",
  });
};
export const PomodoroController = {
  createPomodoro,
  getPomodaros,
  deletePomodoro,
  updatePomodoro,
};
