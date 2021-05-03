import { prisma } from '../../db/index.js';

export const getOne = async (ctx) => {
  // obtengo todo
  const artist = await prisma.artist.findUnique({
    where: {
      id: ctx.params.artistId,
    },
  });
  ctx.body = artist;
  ctx.status = 200;
};
