import { prisma } from '../../db/index.js';

export const getAll = async (ctx) => {
  // obtengo todo
  const tracks = await prisma.track.findMany();
  ctx.body = tracks;
  ctx.status = 200;
};
