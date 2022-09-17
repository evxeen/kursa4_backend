import {Router} from 'express';
import scrapRouter from "./scrapRouter.js";

const router = Router();

router.use('/', scrapRouter);

export default router;