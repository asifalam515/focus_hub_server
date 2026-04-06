import bcrypt from "bcryptjs";
import type { Request, Response } from "express";
import { sendResponse } from "../../utils/sendResponse";
import { AuthService } from "./auth.service";

const signUpUser = async (req: Request, res: Response) => {
  const { email, password, name, avatar } = req.body;
  console.log(email, password, name);
  const hashedPassword = await bcrypt.hash(password, 10);
  const newUser = await AuthService.signUpUser({
    name: name,
    email: email,
    password: hashedPassword,
    avatar: avatar,
  });
  sendResponse(res, {
    statusCode: 201,
    message: "User registered successfully",
    data: newUser,
  });
};
const loginUser = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  const result = await AuthService.loginUser({ email, password });
  sendResponse(res, {
    statusCode: 200,
    message: "User logged in successfully",
    data: result,
  });
};
const logOutUser = async (req: Request, res: Response) => {
  const result = await AuthService.logOutUser({});
  sendResponse(res, {
    statusCode: 200,
    message: "User logged out successfully",
    data: result,
  });
};
const getUserFromToken = async (req: Request, res: Response) => {
  const token = req.headers.authorization;
  if (!token) {
    return sendResponse(res, {
      statusCode: 401,
      message: "Unauthorized: token is missing",
    });
  }
  try {
    const userData = await AuthService.getUserFromToken(token);
    sendResponse(res, {
      statusCode: 200,
      message: "User data retrieved successfully",
      data: userData,
    });
  } catch (error: any) {
    sendResponse(res, {
      statusCode: 401,
      message: "Unauthorized: invalid token",
    });
  }
};

export const AuthController = {
  signUpUser,
  loginUser,
  logOutUser,
  getUserFromToken,
};
