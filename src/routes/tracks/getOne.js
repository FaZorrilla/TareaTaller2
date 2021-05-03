import { prisma } from '../../db/index.js';

export const getOne = async (ctx) => {
  // obtengo todo
  const track = await prisma.track.findUnique({
    where: {
      id: ctx.params.trackId,
    },
  });
  ctx.body = track;
  ctx.status = 200;
};
