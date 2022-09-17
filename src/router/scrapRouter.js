import {Router} from 'express';

const scrapRouter = Router();

scrapRouter.get('/scrap', (req, res) => {
   res.send('ok')
})
//asd
export default scrapRouter;