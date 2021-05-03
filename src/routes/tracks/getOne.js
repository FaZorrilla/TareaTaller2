import { prisma } from '../../db/index.js';

export const getOne = async (ctx) => {
  // obtengo todo
  const track = await prisma.track.findUnique({
    where: {
      id: ctx.params.trackId,
    },
    include: {
      artist: true,
      album: true,
    },
  });
  if (track) {
    track[
      'artist'
    ] = `https://tarea2tallerfz.herokuapp.com/artists/${track.artist.id}`;
    track[
      'album'
    ] = `https://tarea2tallerfz.herokuapp.com/albums/${track.album.id}`;
    track['self'] = `https://tarea2tallerfz.herokuapp.com/tracks/${track.id}`;
    ctx.body = track;
    ctx.status = 200;
  } else {
    ctx.body = 'No existe el track';
    ctx.status = 404;
  }
};
