import { prisma } from '../../db/index.js';

export const delAlbum = async (ctx) => {
  // elimino album
  const deleteAlbum = await prisma.album.delete({
    where: {
      id: ctx.params.albumId,
    },
  });
  ctx.status = 204;
};
