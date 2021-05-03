import { prisma } from '../../db/index.js';

export const getOne = async (ctx) => {
  // obtengo todo
  const track = await prisma.track.findUnique({
    where: {
      id: ctx.params.trackId,
    },
  });
  if (track) {
    ctx.body = track;
    ctx.status = 200;
  } else {
    ctx.body = 'No existe el track';
    ctx.status = 404;
  }
};
