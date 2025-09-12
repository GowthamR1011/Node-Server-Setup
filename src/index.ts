import express, { Request, Response, NextFunction } from "express";
import { AppError } from "./types/AppError";
import { setupGracefulShutdown } from "./utils/shutdown";
import CONFIG from "./config";
import logger, { morganFormat } from "./config/logger";

import morgan from "morgan";
import helmet from "helmet";
import cors from "cors";

const app = express();

app.use(helmet());
app.use(
  cors({
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
    credentials: true,
  })
);

app.use(
  morgan(morganFormat, {
    stream: {
      write: (message: string) => {
        logger.info(message.trim());
      },
    },
  })
);

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.get("/", (req: Request, res: Response) => {
  res
    .status(200)
    .send({ message: `Hello from ${CONFIG.SERVICE_NAME} service` });
});

app.get("/health", (req: Request, res: Response) => {
  throw new AppError("Unauthorized", 400);
});

app.use((err: AppError, req: Request, res: Response, next: NextFunction) => {
  logger.error(err.message);
  res
    .status(err.status || 500)
    .send({ success: false, message: err.message || "Internal Server Error" });
});

const server = app.listen(CONFIG.PORT, () => {
  logger.info(` ${CONFIG.SERVICE_NAME} running on port ${CONFIG.PORT}`);
});

setupGracefulShutdown(server);
