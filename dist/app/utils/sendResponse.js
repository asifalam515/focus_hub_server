export const sendResponse = (res, payload) => {
    const { statusCode, message, data, meta } = payload;
    return res.status(statusCode).json({
        success: true,
        message,
        meta,
        data,
    });
};
//# sourceMappingURL=sendResponse.js.map