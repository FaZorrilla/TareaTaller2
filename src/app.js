import Koa from 'koa';
import body from 'koa-body';

export const app = new Koa();

import { router } from './routes.js';

app.use(body());

app.use(router.routes()).use(router.allowedMethods());
