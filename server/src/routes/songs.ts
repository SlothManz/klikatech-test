import express, {Router, Request, Response} from 'express';

const router: Router = express.Router();

router.get('/', (req: Request, res: Response) => {
  return res.status(200).send({message: 'hello, world'});
});

export default router;