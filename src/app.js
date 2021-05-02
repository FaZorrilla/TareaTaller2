const Koa = require("koa");
const body = require("koa-body");

export const app = new Koa();

import { router } from "./routes";

app.use(body());

app.use(router.routes()).use(router.allowedMethods());
