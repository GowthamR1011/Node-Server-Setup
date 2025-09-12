import { config } from "dotenv";

import { name } from "../../package.json";

config({ path: ".env" });

const CONFIG = {
  PORT: process.env.PORT,
  SERVICE_NAME: name,
};

export default CONFIG;
