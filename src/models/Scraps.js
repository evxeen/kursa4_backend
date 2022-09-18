import { EntitySchema } from 'typeorm';

export default new EntitySchema({
   name: 'Scraps',
   tableName: 'Scraps',
   columns: {
      id: {
         primary: true,
         type: 'int',
         generated: true,
      },
      src: {
         type: 'text',
      },
      title: {
         type: 'varchar',
      },
      description: {
         type: 'text',
      },
      price: {
         type: 'real',
      },
      category: {
         type: 'int',
      },
   },
});