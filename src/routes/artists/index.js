import Router from '@koa/router';

export const artistsRouter = new Router();

import { getAll } from './getAll.js';
import { add } from './add.js';

//router.<metodo>(ruta relativa, method)
artistsRouter.get('/', getAll);
artistsRouter.post('/', add);
