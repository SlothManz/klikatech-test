import express, { Express } from 'express';
// import ;

const app: Express = express();

app.use(express.json);

export default app;