import { prisma } from '../../db/index.js';

export const getAll = async (ctx) => {
  // obtengo todo
  const artists = await prisma.artist.findMany();
  var i;
  for (i = 0; i < artists.length; i++) {
    console.log(artists[i]);
    artists[i][
      'albums'
    ] = `https://tarea2tallerfz.herokuapp.com/artists/${artists[i].id}/albums`;
    artists[i][
      'tracks'
    ] = `https://tarea2tallerfz.herokuapp.com/artists/${artists[i].id}/tracks`;
    artists[i][
      'self'
    ] = `https://tarea2tallerfz.herokuapp.com/artists/${artists[i].id}`;
  }
  ctx.body = artists;
  ctx.status = 200;
};
