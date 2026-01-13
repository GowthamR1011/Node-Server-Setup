const morganFormat =
  ":method :url :status :res[content-length] - :response-time ms";

import logger from "./logger.config.js";

import morgan from "morgan";

export const reqLogger = morgan(morganFormat, {
  stream: {
    write: (message: string) => {
      logger.info(message.trim());
    },
  },
});
