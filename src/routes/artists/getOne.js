import { prisma } from '../../db/index.js';

export const getOne = async (ctx) => {
  // obtengo todo
  const artist = await prisma.artist.findUnique({
    where: {
      id: ctx.params.artistId,
    },
  });
  if (artist) {
    artist[
      'albums'
    ] = `https://tarea2tallerfz.herokuapp.com/artists/${artist.id}/albums`;
    artist[
      'tracks'
    ] = `https://tarea2tallerfz.herokuapp.com/artists/${artist.id}/tracks`;
    artist[
      'self'
    ] = `https://tarea2tallerfz.herokuapp.com/artists/${artist.id}`;
    ctx.body = artist;
    ctx.status = 200;
  } else {
    ctx.body = 'No existe el artista';
    ctx.status = 404;
  }
};
