import type { ErrorRequestHandler } from "express";

type TErrorResponse = {
  success: false;
  message: string;
  error: {
    name: string;
    details?: unknown;
  };
  stack?: string;
};

export const globalErrorHandler: ErrorRequestHandler = (
  error,
  _req,
  res,
  _next,
) => {
  const statusCode =
    typeof (error as { statusCode?: unknown }).statusCode === "number"
      ? ((error as { statusCode: number }).statusCode ?? 500)
      : 500;

  const message = error.message || "Something went wrong";

  const response: TErrorResponse = {
    success: false,
    message,
    error: {
      name: error.name || "Error",
      details: (error as { details?: unknown }).details,
    },
    ...(process.env.NODE_ENV === "development" && { stack: error.stack }),
  };

  res.status(statusCode).json(response);
};
