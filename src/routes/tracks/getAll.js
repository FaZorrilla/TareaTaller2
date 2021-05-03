import { prisma } from '../../db/index.js';

export const getAll = async (ctx) => {
  // obtengo todo
  const tracks = await prisma.track.findMany({
    include: {
      artist: true,
      album: true,
    },
  });
  var i;
  for (i = 0; i < tracks.length; i++) {
    console.log(tracks[i]);
    tracks[i][
      'artist'
    ] = `https://tarea2tallerfz.herokuapp.com/artists/${tracks[i].artist.id}`;
    tracks[i][
      'album'
    ] = `https://tarea2tallerfz.herokuapp.com/albums/${tracks[i].album.id}`;
    tracks[i][
      'self'
    ] = `https://tarea2tallerfz.herokuapp.com/tracks/${tracks[i].id}`;
    delete tracks[i]['artistId'];
    delete tracks[i]['albumId'];
    delete tracks[i]['id'];
  }
  ctx.body = tracks;
  ctx.status = 200;
};
