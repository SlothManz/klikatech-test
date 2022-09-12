import express, { Express } from 'express';
import songRouter from './songs';

const router: Express = express();

router.use(songRouter);

export default router;