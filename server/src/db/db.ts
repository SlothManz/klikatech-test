import { Sequelize } from "sequelize";
import {env} from "../env";

const { DB_NAME, DB_PASSWORD, DB_USER, DB_HOST, DB_PORT } = process.env;

export const sequelize = new Sequelize(DB_NAME, DB_PASSWORD, DB_USER, {
  host: DB_HOST,
  port: Number(DB_PORT),
  dialect: "mariadb",
});
