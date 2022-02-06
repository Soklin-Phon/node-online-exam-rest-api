import { ConnectionOptions } from "typeorm";
import models from "../src/models/model";

const config: ConnectionOptions = {
  type: 'mysql',
  host: process.env.DB_HOST || 'localhost',
  port: Number(process.env.DB_PORT) || 1027,
  username: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || 'secret',
  database: process.env.DB || 'tsi_db',
  entities: models,
  synchronize: true,
};

export default config;