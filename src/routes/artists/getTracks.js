import { prisma } from '../../db/index.js';

export const getTracks = async (ctx) => {
  // obtengo todo
  const artist = await prisma.artist.findUnique({
    where: {
      id: ctx.params.artistId,
    },
    include: {
      tracks: true,
    },
  });
  if (artist) {
    console.log(artist);
    const tracks = artist.tracks;
    var i;
    for (i = 0; i < tracks.length; i++) {
      console.log(tracks[i]);
      const track = await prisma.track.findUnique({
        where: {
          id: tracks[i].id,
        },
        include: {
          album: true,
        },
      });
      tracks[i][
        'artist'
      ] = `https://tarea2tallerfz.herokuapp.com/artists/${artist.id}`;
      console.log('Entre artist');
      tracks[i][
        'albums'
      ] = `https://tarea2tallerfz.herokuapp.com/albums/${track.album.id}`;
      console.log('Entre albums');
      tracks[i][
        'self'
      ] = `https://tarea2tallerfz.herokuapp.com/tracks/${tracks[i].id}`;
      console.log('Pase');
    }
    console.log(tracks);
    ctx.body = tracks;
    ctx.status = 200;
  } else {
    ctx.body = 'No existe el artista';
    ctx.status = 404;
  }
};
