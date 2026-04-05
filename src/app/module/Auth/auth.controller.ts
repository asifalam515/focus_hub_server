import bcrypt from "bcryptjs";
import type { Request, Response } from "express";
import { sendResponse } from "../../utils/sendResponse";
import { AuthService } from "./auth.servic";

const signUpUser = async (req: Request, res: Response) => {
  const { email, password, name, avatar } = req.body;
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

export const AuthController = {
  signUpUser,
};
