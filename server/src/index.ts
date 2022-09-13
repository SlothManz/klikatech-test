import express, { Express } from "express";
import {resolve} from "path";
import {loadEnv} from "./env";
import api from "./routes/index";
import { sequelize } from "./db/db";

load();
console.log(process.env)


const app: Express = express();
const port = process.env.APP_PORT;

app.use(express.json());
app.use("/api", api);

app.listen(port, async () => {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
    console.log(`App started at port ${port}`);
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
});
