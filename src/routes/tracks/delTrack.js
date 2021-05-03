import { prisma } from '../../db/index.js';

export const delTrack = async (ctx) => {
  const track = await prisma.track.findUnique({
    where: {
      id: ctx.params.trackId,
    },
  });
  if (track) {
    const deleteTrack = await prisma.track.delete({
      where: {
        id: ctx.params.trackId,
      },
    });
    ctx.status = 204;
  } else {
    ctx.body = 'No existe el track';
    ctx.status = 404;
  }
};
