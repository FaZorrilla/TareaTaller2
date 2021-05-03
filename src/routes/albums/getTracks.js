import { prisma } from '../../db/index.js';

export const getTracks = async (ctx) => {
  // obtengo todo
  const album = await prisma.album.findUnique({
    where: {
      id: ctx.params.albumId,
    },
    include: {
      tracks: true,
    },
  });
  console.log(album);
  const tracks = album.tracks;
  console.log(tracks);
  ctx.body = tracks;
  ctx.status = 200;
};
