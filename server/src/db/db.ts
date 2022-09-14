import { Sequelize } from "sequelize";

export const sequelize = new Sequelize(
  "mariadb://slothman@localhost/test_app",
  {
    logging: false,
  }
);
