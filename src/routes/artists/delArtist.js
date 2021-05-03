import { prisma } from '../../db/index.js';

export const delArtist = async (ctx) => {
  // elimino album
  const deleteArtist = await prisma.artist.delete({
    where: {
      id: ctx.params.artistId,
    },
  });
  ctx.status = 204;
};
