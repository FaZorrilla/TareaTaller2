import Router from '@koa/router';

export const tracksRouter = new Router();

import { getAll } from './getAll.js';

//router.<metodo>(ruta relativa, method)
tracksRouter.get('/', getAll);
