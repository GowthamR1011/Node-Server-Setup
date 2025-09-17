import { AppError } from "../types/AppError";
import { NextFunction, Request, Response } from "express";

import logger from "../config/logger";

const errorHandler = (
  err: AppError,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  logger.error(err.message);
  res
    .status(err.status || 500)
    .send({ success: false, message: err.message || "Internal Server Error" });
};

export default errorHandler;
