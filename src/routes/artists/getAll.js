import { prisma } from '../../db/index.js';

export const getAll = async (ctx) => {
  // obtengo todo
  const artists = await prisma.artist.findMany();
  ctx.body = artists;
  ctx.status = 200;
};
