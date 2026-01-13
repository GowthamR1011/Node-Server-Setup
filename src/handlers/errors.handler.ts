import logger from "../config/logger";
import { Request, Response, NextFunction } from "express";

import { errorServerResponse } from "./serverResponse.handler";
import { AppError } from "../types/AppError";

const notFoundHandler = (req: Request, res: Response, next: NextFunction) => {
  logger.error("Invalid API URL");
  return errorServerResponse(res, "Not Found", 404);
};

const errorHandler = (
  err: AppError,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const statusCode = err.status || 500;
  const message = err.message || "Internal Server Error";

  logger.error(message);
  return errorServerResponse(res, message, statusCode, err.data);
};

export { notFoundHandler, errorHandler };
