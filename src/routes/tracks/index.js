import Router from '@koa/router';

export const tracksRouter = new Router();

import { getAll } from './getAll.js';
import { getOne } from './getOne.js';
import { delTrack } from './delTrack.js';

//router.<metodo>(ruta relativa, method)
tracksRouter.get('/', getAll);
tracksRouter.get('/:trackId', getOne);
tracksRouter.del('/:trackId', delTrack);
