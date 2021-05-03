import Router from '@koa/router';

export const artistsRouter = new Router();

import { getAll } from './getAll.js';
import { add } from './add.js';
import { addAlbum } from './addAlbum.js';
import { getOne } from './getOne.js';
import { getAlbums } from './getAlbums.js';

//router.<metodo>(ruta relativa, method)
artistsRouter.get('/', getAll);
artistsRouter.post('/', add);
artistsRouter.post('/:artistId/albums', addAlbum);
artistsRouter.get('/:artistId', getOne);
artistsRouter.get('/:artistId/albums', getAlbums);
