import express, { Express, Request, Response } from "express";
import api from "./routes/index";
import { sequelize } from "./db/db";
import { join } from "path";

const app: Express = express();
const port = process.env.APP_PORT || 5000;

app.use(express.json());

app.use("/api", api);

if (process.env.NODE_ENV === "PRODUCTION") {
  app.use(express.static(join(__dirname, "..", "..", "client", "build")));
  app.get("/", (req: Request, res: Response) => {
    return res
      .status(200)
      .sendFile(join(__dirname, "..", "..", "client", "build", "index.html"));
  });
}

app.listen(port, async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync();
    console.log("Connection has been established successfully.");
    console.log(`App started at port ${port}`);
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
});
