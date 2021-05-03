import { prisma } from '../../db/index.js';

export const repTrack = async (ctx) => {
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
    const repTrack = await prisma.track.update({
      where: {
        id: ctx.params.trackId,
      },
      data: {
        times_played: {
          increment: 1,
        },
      },
    });
    console.log(repTrack);
    repTrack[
      'artist'
    ] = `https://tarea2tallerfz.herokuapp.com/artists/${track.artist.id}`;
    repTrack[
      'album'
    ] = `https://tarea2tallerfz.herokuapp.com/albums/${track.album.id}`;
    repTrack[
      'self'
    ] = `https://tarea2tallerfz.herokuapp.com/tracks/${track.id}`;
    delete repTrack['artistId'];
    delete repTrack['albumId'];
    delete repTrack['id'];
    ctx.body = repTrack;
    ctx.status = 200;
  } else {
    ctx.body = 'No existe el track';
    ctx.status = 404;
  }
};
