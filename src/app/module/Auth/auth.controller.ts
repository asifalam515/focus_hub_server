import bcrypt from "bcryptjs";
import type { Request, Response } from "express";
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
  res
    .status(201)
    .json({ message: "User registered successfully", user: newUser });
};
