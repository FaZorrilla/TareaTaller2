import Router from '@koa/router';

export const router = new Router();

import { artistsRouter } from './routes/artists/index.js';

router.use('/artists', artistsRouter.routes());
