import {Router} from 'express';

const scrapRouter = Router();

scrapRouter.get('/scrap', (req, res) => {
   res.send('ok')
})

export default scrapRouter;