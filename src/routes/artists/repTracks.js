import { prisma } from '../../db/index.js';

export const repTracks = async (ctx) => {
  // obtengo todo
  const artist = await prisma.artist.findUnique({
    where: {
      id: ctx.params.artistId,
    },
    include: {
      tracks: true,
    },
  });
  var i;
  for (i = 0; i < artist.tracks.length; i++) {
    await prisma.track.update({
      where: {
        id: artist.tracks[i].id,
      },
      data: {
        timesPlayed: {
          increment: 1,
        },
      },
    });
  }
  console.log(artist);

  ctx.body = artist.tracks;
  ctx.status = 200;
};
