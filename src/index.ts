import app from "./ server";
import CONFIG from "./config/index.config";
import logger from "./config/logger";
import { setupGracefulShutdown } from "./utils/shutdown";

const server = app.listen(CONFIG.PORT, () => {
  logger.debug(` ${CONFIG.SERVICE_NAME} running on port ${CONFIG.PORT}`);
});

setupGracefulShutdown(server);
