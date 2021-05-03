import { prisma } from '../../db/index.js';

export const getAll = async (ctx) => {
  // obtengo todo
  const albums = await prisma.album.findMany();
  ctx.body = albums;
  ctx.status = 200;
};
