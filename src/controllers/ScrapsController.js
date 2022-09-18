import {scrapRepo} from "../utils/utils.js";

class ScrapsController {
   async createScrap(req, res) {
      try {
         const {src, title, description, price, category} = req.body;
         const newScrap = await scrapRepo.create({src, title, description, price, category});
         await scrapRepo.save(newScrap);
         return res.json(newScrap);
      } catch (err) {
         console.log(err);
      }
   }
}

export default new ScrapsController();