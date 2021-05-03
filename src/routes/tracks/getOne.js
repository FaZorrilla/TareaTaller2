import { prisma } from '../../db/index.js';

export const getOne = async (ctx) => {
  // obtengo todo
  const track = await prisma.track.findUnique({
    where: {
      id: ctx.params.trackId,
    },
  });
  if (track) {
    track[
      'artist'
    ] = `https://tarea2tallerfz.herokuapp.com/artists/${album.artistId}`;
    track[
      'album'
    ] = `https://tarea2tallerfz.herokuapp.com/albums/${ctx.params.albumId}`;
    track['self'] = `https://tarea2tallerfz.herokuapp.com/tracks/${idtrack}`;
    ctx.body = track;
    ctx.status = 200;
  } else {
    ctx.body = 'No existe el track';
    ctx.status = 404;
  }
};
