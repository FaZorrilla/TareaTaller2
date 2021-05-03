import { prisma } from '../../db/index.js';

export const repTrack = async (ctx) => {
  // obtengo todo
  const track = await prisma.track.findUnique({
    where: {
      id: ctx.params.trackId,
    },
  });
  if (track) {
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
  } else {
    ctx.body = 'No existe el track';
    ctx.status = 404;
  }
};
