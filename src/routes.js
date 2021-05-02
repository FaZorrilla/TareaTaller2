import Router from '@koa/router';

export const router = new Router();

import { artistRouter } from './routes/artists';

router.use('/artists', artistsRouter.routes());
