import express from "express";
import { reqLogger } from "./config/reqLogger";
import cookieParser from "cookie-parser";

import helmet from "helmet";
import cors from "cors";
import { errorHandler, notFoundHandler } from "./handlers/errors.handler";

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

app.use(notFoundHandler);

app.use(errorHandler);

export default app;
