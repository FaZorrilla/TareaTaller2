import { prisma } from '../../db/index.js';

export const getOne = async (ctx) => {
  // obtengo todo
  console.log(ctx.params);
  const album = await prisma.album.findUnique({
    where: {
      id: ctx.params.albumId,
    },
  });
  console.log(album);
  ctx.body = album;
  ctx.status = 200;
};
