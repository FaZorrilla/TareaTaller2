import { prisma } from '../../db/index.js';

export const getOne = async (ctx) => {
  // obtengo todo
  console.log(ctx.params);
  const album = await prisma.album.findUnique({
    where: {
      id: ctx.params.albumId,
    },
  });
  if (album) {
    console.log(album);
    ctx.body = album;
    ctx.status = 200;
  } else {
    ctx.body = 'No existe el album';
    ctx.status = 404;
  }
};
