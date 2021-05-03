import { prisma } from '../../db/index.js';

export const repTrack = async (ctx) => {
  // obtengo todo
  const repTrack = await prisma.track.update({
    where: {
      id: ctx.params.trackId,
    },
    data: {
      timesPlayed: {
        increment: 1,
      },
    },
  });
  ctx.body = repTrack;
  ctx.status = 200;
};
