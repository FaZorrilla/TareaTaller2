import { prisma } from '../../db/index.js';

export const getAlbums = async (ctx) => {
  // obtengo todo
  const artist = await prisma.artist.findUnique({
    where: {
      id: ctx.params.artistId,
    },
    include: {
      albums: true,
    },
  });
  if (artist) {
    const albums = artist.albums;
    var i;
    for (i = 0; i < albums.length; i++) {
      console.log(albums[i]);
      albums[i][
        'artist'
      ] = `https://tarea2tallerfz.herokuapp.com/artists/${artist.id}`;
      albums[i][
        'tracks'
      ] = `https://tarea2tallerfz.herokuapp.com/albums/${albums[i].id}/tracks`;
      albums[i][
        'self'
      ] = `https://tarea2tallerfz.herokuapp.com/albums/${albums[i].id}`;
    }
    console.log(artist);

    console.log(albums);
    ctx.body = albums;
    ctx.status = 200;
  } else {
    ctx.body = 'No existe el artista';
    ctx.status = 404;
  }
};
