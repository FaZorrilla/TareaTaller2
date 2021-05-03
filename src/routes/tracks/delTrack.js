import { prisma } from '../../db/index.js';

export const delTrack = async (ctx) => {
  const deleteTrack = await prisma.track.delete({
    where: {
      id: ctx.params.trackId,
    },
  });
  ctx.status = 200;
};
