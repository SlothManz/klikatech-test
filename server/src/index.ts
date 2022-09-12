import express, { Express } from "express";
import dotenv from "dotenv";
import api from "./routes/index";

dotenv.config();

const app: Express = express();
const port = process.env.APP_PORT;

app.use(express.json());
app.use("/api", api);

app.listen(port, () => {
  console.log(`App started at port ${port}`);
});
