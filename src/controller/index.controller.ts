import { Request, Response } from "express";

import CONFIG from "../config/index.config";
import { successMessageResponse } from "../handlers/serverResponse.handler";
import { AppError } from "../types/AppError";

export const welcome = (req: Request, res: Response) => {
  return successMessageResponse(
    res,
    `Welcome to the ${CONFIG.SERVICE_NAME} server`,
    200
  );
};

export const healthCheck = (req: Request, res: Response) => {
  throw new AppError("UnAuthorised", 401);
};
