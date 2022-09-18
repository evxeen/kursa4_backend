import { DataSource } from 'typeorm';
import Scraps from "./models/Scraps.js";

export const AppDataSource = new DataSource({
   type: 'postgres',
   url: process.env.DATABASE_URL,
   ssl: {
      rejectUnauthorized: false
   },
   entities: [Scraps],
   synchronize: true,
   logging: false,
});