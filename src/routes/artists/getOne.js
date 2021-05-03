import { prisma } from '../../db/index.js';

export const getOne = async (ctx) => {
  // obtengo todo
  const artist = await prisma.artist.findUnique({
    where: {
      id: ctx.params.artistId,
    },
  });
  if (artist) {
    ctx.body = artist;
    ctx.status = 200;
  } else {
    ctx.body = 'No existe el artista';
    ctx.status = 404;
  }
};
