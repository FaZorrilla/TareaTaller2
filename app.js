// app.js
const Koa = require("koa");
const app = new Koa();

// Our First Route
app.use(async (ctx) => {
  ctx.body = "Hello World";
});

// request and response as context in Koa
app.use(async (ctx) => {
  ctx.request;
  ctx.response;
});

// Bootstrap the server
app.listen(3000);
