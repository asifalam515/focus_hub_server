import type { NextFunction, Request, Response } from "express";
import jwt, { type JwtPayload } from "jsonwebtoken";
import { prisma } from "../../lib/prisma";

export enum Role {
  admin = "ADMIN",
  user = "USER",
}
const extractTokenFromHeader = (authorizationHeader: string | undefined) => {
  if (!authorizationHeader) return null;
  const trimmedHeader = authorizationHeader.trim();
  if (!trimmedHeader) return null;
  // accept both bearer token and token only formats
  const bearerMatch = trimmedHeader.match(/^Bearer\s+(.+)$/i);
  const token = bearerMatch?.[1] ?? trimmedHeader;

  return token.replace(/^['\"]|['\"]$/g, "").trim();
};

export const auth = (...roles: Role[]) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      // get the token
      const token = extractTokenFromHeader(req.headers.authorization);
      if (!token) {
        return res
          .status(401)
          .json({ message: "Unauthorized: token is missing" });
      }
      //decode and verify the token here (e.g., using JWT)
      const decoded = jwt.verify(
        token,
        process.env.JWT_SECRET as string,
      ) as JwtPayload;
      const userData = await prisma.user.findUnique({
        where: { email: decoded.email },
      });
      if (!userData) {
        return res
          .status(401)
          .json({ message: "Unauthorized: user not found" });
      }
      if (userData.status !== "ACTIVE") {
        return res
          .status(401)
          .json({ message: "Unauthorized: user is not active" });
      }
      if (roles.length > 0 && !roles.includes(userData.role as Role)) {
        return res
          .status(403)
          .json({ message: "Forbidden: insufficient permissions" });
      }
      req.user = decoded;
      return next();
    } catch (error: any) {
      return next(error);
    }
  };
};
