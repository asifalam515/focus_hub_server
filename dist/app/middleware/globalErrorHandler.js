export const globalErrorHandler = (error, _req, res, _next) => {
    const statusCode = typeof error.statusCode === "number"
        ? (error.statusCode ?? 500)
        : 500;
    const message = error.message || "Something went wrong";
    const response = {
        success: false,
        message,
        error: {
            name: error.name || "Error",
            details: error.details,
        },
        ...(process.env.NODE_ENV === "development" && { stack: error.stack }),
    };
    res.status(statusCode).json(response);
};
//# sourceMappingURL=globalErrorHandler.js.map