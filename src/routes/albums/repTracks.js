import { prisma } from '../../db/index.js';

export const repTracks = async (ctx) => {
  // obtengo todo
  const album = await prisma.album.findUnique({
    where: {
      id: ctx.params.albumId,
    },
    include: {
      tracks: true,
    },
  });
  if (album) {
    var i;
    for (i = 0; i < album.tracks.length; i++) {
      await prisma.track.update({
        where: {
          id: album.tracks[i].id,
        },
        data: {
          timesPlayed: {
            increment: 1,
          },
        },
      });
    }
    console.log(album);

    ctx.body = album.tracks;
    ctx.status = 200;
  } else {
    ctx.body = 'No existe el album';
    ctx.status = 404;
  }
};
