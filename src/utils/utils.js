import { AppDataSource } from '../db.js';
import Scraps from "../models/Scraps.js";

const scrapRepo = AppDataSource.getRepository(Scraps);

export {scrapRepo};