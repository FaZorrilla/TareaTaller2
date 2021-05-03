import { prisma } from '../../db/index.js';

export const delArtist = async (ctx) => {
  // elimino album
  const artist = await prisma.artist.findUnique({
    where: {
      id: ctx.params.artistId,
    },
  });
  if (artist) {
    const deleteArtist = await prisma.artist.delete({
      where: {
        id: ctx.params.artistId,
      },
    });
    ctx.status = 204;
  } else {
    ctx.body = 'No existe el artista';
    ctx.status = 404;
  }
};
