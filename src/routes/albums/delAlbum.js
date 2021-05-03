import { prisma } from '../../db/index.js';

export const delAlbum = async (ctx) => {
  // elimino album
  console.log(ctx.params);
  const album = await prisma.album.findUnique({
    where: {
      id: ctx.params.albumId,
    },
  });
  if (album) {
    const deleteAlbum = await prisma.album.delete({
      where: {
        id: ctx.params.albumId,
      },
    });
    ctx.status = 204;
  } else {
    ctx.body = 'No existe el album';
    ctx.status = 404;
  }
};
