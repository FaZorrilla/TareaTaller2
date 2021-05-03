import { prisma } from '../../db/index.js';

export const getTracks = async (ctx) => {
  // obtengo todo
  const artist = await prisma.artist.findUnique({
    where: {
      id: ctx.params.artistId,
    },
    include: {
      tracks: true,
    },
  });
  if (artist) {
    console.log(artist);
    const tracks = artist.tracks;
    console.log(tracks);
    ctx.body = tracks;
    ctx.status = 200;
  } else {
    ctx.body = 'No existe el artista';
    ctx.status = 404;
  }
};
