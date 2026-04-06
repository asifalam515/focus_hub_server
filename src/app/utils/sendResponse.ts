import type { Response } from "express";

type TSendResponse<T> = {
  success: true | false;
  statusCode: number;
  message: string;
  data?: T;
  meta?: {
    page?: number;
    limit?: number;
    total?: number;
  };
};

export const sendResponse = <T>(
  res: Response,
  payload: TSendResponse<T>,
): Response => {
  const { statusCode, message, data, meta } = payload;

  return res.status(statusCode).json({
    success: payload.success,
    message,
    meta,
    data,
  });
};
