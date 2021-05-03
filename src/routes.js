import Router from '@koa/router';

export const router = new Router();

import { artistsRouter } from './routes/artists/index.js';
import { albumsRouter } from './routes/albums/index.js';
import { tracksRouter } from './routes/tracks/index.js';

router.use('/artists', artistsRouter.routes());
router.use('/albums', albumsRouter.routes());
router.use('/tracks', tracksRouter.routes());
// testing WW8=
