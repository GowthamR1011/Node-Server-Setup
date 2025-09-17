import express from "express";
import { setupGracefulShutdown } from "./utils/shutdown";
import CONFIG from "./config";
import logger from "./config/logger";
import { reqLogger } from "./config/reqLogger";
import cookieParser from "cookie-parser";

import helmet from "helmet";
import cors from "cors";
import errorHandler from "./middleware/errorHandler";

import indexRouter from "./routes/index.routes";

export const app = express();

app.use(helmet());
app.use(
  cors({
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
    credentials: true,
  })
);

app.use(reqLogger);
app.use(cookieParser());
app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use(indexRouter);

app.use(errorHandler);

const server = app.listen(CONFIG.PORT, () => {
  logger.info(` ${CONFIG.SERVICE_NAME} running on port ${CONFIG.PORT}`);
});

setupGracefulShutdown(server);
