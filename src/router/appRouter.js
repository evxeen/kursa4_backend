import {Router} from 'express';
import scrapRouter from "./scrapRouter.js";
fix
const router = Router();

router.use('/', scrapRouter);

export default router;