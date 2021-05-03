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
  var i;
  for (i = 0; i < tracks.length; i++) {
    const track = await prisma.track.findUnique({
      where: {
        id: tracks[i].id,
      },
      include: {
        album: true,
        artist: true,
      },
    });
    tracks[i][
      'artist'
    ] = `https://tarea2tallerfz.herokuapp.com/artists/${track.artist.id}`;
    tracks[i][
      'albums'
    ] = `https://tarea2tallerfz.herokuapp.com/albums/${track.album.id}`;
    tracks[i][
      'self'
    ] = `https://tarea2tallerfz.herokuapp.com/tracks/${tracks[i].id}`;
  }
  console.log(tracks);
  ctx.body = tracks;
  ctx.status = 200;
};
