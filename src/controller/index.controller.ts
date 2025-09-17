import { Request, Response } from "express";

import CONFIG from "../config";

export const welcome = (req: Request, res: Response) => {
  res.send(`welcome to the ${CONFIG.SERVICE_NAME} server`);
};

export const healthCheck = (req: Request, res: Response) => {
  res.status(400).send("Unauthorised");
};
