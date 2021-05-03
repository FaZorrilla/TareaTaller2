import Router from '@koa/router';

export const albumsRouter = new Router();

import { getAll } from './getAll.js';
import { addTrack } from './addTrack.js';
import { getOne } from './getOne.js';
import { getTracks } from './getTracks.js';
import { delAlbum } from './delAlbum.js';
import { repTracks } from './repTracks.js';

//router.<metodo>(ruta relativa, method)
albumsRouter.get('/', getAll);
albumsRouter.post('/:albumId/tracks', addTrack);
albumsRouter.get('/:albumId', getOne);
albumsRouter.get('/:albumId/tracks', getTracks);
albumsRouter.del('/:albumId', delAlbum);
albumsRouter.put('/:albumId/tracks/play', repTracks);
