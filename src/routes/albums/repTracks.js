import { prisma } from '../../db/index.js';

export const repTracks = async (ctx) => {
  // obtengo todo
  const album = await prisma.album.findUnique({
    where: {
      id: ctx.params.albumId,
    },
    include: {
      tracks: true,
    },
  });
  if (album) {
    var i;
    for (i = 0; i < album.tracks.length; i++) {
      await prisma.track.update({
        where: {
          id: album.tracks[i].id,
        },
        data: {
          times_played: {
            increment: 1,
          },
        },
      });
    }
    console.log(album);
    const tracks = album.tracks;

    var i;
    for (i = 0; i < tracks.length; i++) {
      console.log(tracks[i]);
      const track = await prisma.track.findUnique({
        where: {
          id: tracks[i].id,
        },
        include: {
          artist: true,
          album: true,
        },
      });
      tracks[i][
        'artist'
      ] = `https://tarea2tallerfz.herokuapp.com/artists/${track.artist.id}`;
      console.log('Entre artist');
      tracks[i][
        'albums'
      ] = `https://tarea2tallerfz.herokuapp.com/albums/${track.album.id}`;
      console.log('Entre albums');
      tracks[i][
        'self'
      ] = `https://tarea2tallerfz.herokuapp.com/tracks/${tracks[i].id}`;
      delete tracks[i]['artistId'];
      delete tracks[i]['albumId'];
      delete tracks[i]['id'];
      console.log('Pase');
    }

    ctx.body = tracks;
    ctx.status = 200;
  } else {
    ctx.body = 'No existe el album';
    ctx.status = 404;
  }
};
