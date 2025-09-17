import { AppError } from "../types/AppError";
import { NextFunction, Request, Response } from "express";

import logger from "../config/logger";
import { errorServerResponse } from "../utils/responseFormatter";

const errorHandler = (
  err: AppError,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  logger.error(err.message);

  return errorServerResponse(res, err.message, err.status);
};

export default errorHandler;
