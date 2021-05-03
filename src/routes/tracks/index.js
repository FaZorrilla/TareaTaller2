import Router from '@koa/router';

export const tracksRouter = new Router();

import { getAll } from './getAll.js';
import { getOne } from './getOne.js';

//router.<metodo>(ruta relativa, method)
tracksRouter.get('/', getAll);
tracksRouter.get('/:trackId', getOne);
