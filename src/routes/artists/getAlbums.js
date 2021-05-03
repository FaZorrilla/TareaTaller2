import { prisma } from '../../db/index.js';

export const getAlbums = async (ctx) => {
  // obtengo todo
  const artist = await prisma.artist.findUnique({
    where: {
      id: ctx.params.artistId,
    },
    include: {
      albums: true,
    },
  });
  console.log(artist);
  const albums = artist.albums;
  console.log(albums);
  ctx.body = albums;
  ctx.status = 200;
};
