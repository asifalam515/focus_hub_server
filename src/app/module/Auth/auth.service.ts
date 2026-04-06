import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { prisma } from "../../../lib/prisma";
const signUpUser = async (payload: any) => {
  const existingUser = await prisma.user.findUnique({
    where: { email: payload.email },
  });

  if (existingUser) {
    throw new Error("User already exists");
  }

  const newUser = await prisma.user.create({
    data: payload,
  });

  return newUser;
};

const loginUser = async (payload: any) => {
  const user = await prisma.user.findUnique({
    where: { email: payload.email },
  });
  if (!user) {
    throw new Error("User not found");
  }
  // check if password matches
  const isPasswordMatched = await bcrypt.compare(
    payload.password,
    user.password,
  );
  if (!isPasswordMatched) {
    throw new Error("Invalid credentials");
  }
  // set the token and return the user data
  const userData = {
    id: user.id,
    email: user.email,
    name: user.name,
    role: user.role,
    status: user.status,
  };
  const token = jwt.sign(userData, process.env.JWT_SECRET as string, {
    expiresIn: "7d",
  });
  return { token, user: userData };
};
const logOutUser = async (payload: any) => {
  return { token: null, user: null };
};
const getUserFromToken = async (token: string) => {
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET as string) as any;
    const userData = await prisma.user.findUnique({
      where: { email: decoded.email },
    });
    if (!userData) {
      throw new Error("User not found");
    }
    return userData;
  } catch (error: any) {
    throw new Error("Invalid token");
  }
};
const updateUserProfile = async (userId: string, payload: any) => {
  const updatedUser = await prisma.user.update({
    where: { id: userId },
    data: payload,
  });
  return updatedUser;
};

export const AuthService = {
  signUpUser,
  loginUser,
  logOutUser,
  getUserFromToken,
  updateUserProfile,
};
