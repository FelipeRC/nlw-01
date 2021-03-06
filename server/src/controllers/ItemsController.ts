import { Request, Response } from 'express';
import knex from '../database/connection';

class ItemsController {
    async index(request: Request, response: Response) {
        const items = await knex('items').select('*');

        let serializedItems = items.map(item => {
            return {
                ...item,
                image_url: `http://192.168.0.24:3333/uploads/${item.image}`,
            }

        });

        response.json(serializedItems);
    }
}

export default ItemsController;