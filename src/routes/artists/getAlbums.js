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
  if (artist) {
    console.log(artist);
    const albums = artist.albums;
    console.log(albums);
    ctx.body = albums;
    ctx.status = 200;
  } else {
    ctx.body = 'No existe el artista';
    ctx.status = 404;
  }
};
