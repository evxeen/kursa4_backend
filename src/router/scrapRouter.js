import {Router} from 'express';
import ScrapsController from "../controllers/ScrapsController.js";

const scrapRouter = Router();

scrapRouter.post('/scrap', ScrapsController.createScrap)

export default scrapRouter;