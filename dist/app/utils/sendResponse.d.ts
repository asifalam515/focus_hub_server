import type { Response } from "express";
type TSendResponse<T> = {
    statusCode: number;
    message: string;
    data?: T;
    meta?: {
        page?: number;
        limit?: number;
        total?: number;
    };
};
export declare const sendResponse: <T>(res: Response, payload: TSendResponse<T>) => Response;
export {};
//# sourceMappingURL=sendResponse.d.ts.map