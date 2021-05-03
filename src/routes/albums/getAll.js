import { prisma } from '../../db/index.js';

export const getAll = async (ctx) => {
  // obtengo todo
  const albums = await prisma.album.findMany({
    include: {
      artist: true,
    },
  });
  var i;
  for (i = 0; i < albums.length; i++) {
    console.log(albums[i]);
    albums[i][
      'artist'
    ] = `https://tarea2tallerfz.herokuapp.com/artists/${albums[i].artist.id}`;
    albums[i][
      'tracks'
    ] = `https://tarea2tallerfz.herokuapp.com/albums/${albums[i].album.id}/tracks`;
    albums[i][
      'self'
    ] = `https://tarea2tallerfz.herokuapp.com/albums/${albums[i].id}`;
  }
  ctx.body = albums;
  ctx.status = 200;
};
