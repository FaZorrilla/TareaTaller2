import { prisma } from '../../db/index.js';

export const getOne = async (ctx) => {
  // obtengo todo
  console.log(ctx.params);
  const album = await prisma.album.findUnique({
    where: {
      id: ctx.params.albumId,
    },
    include: {
      artist: true,
    },
  });
  if (album) {
    album[
      'artist'
    ] = `https://tarea2tallerfz.herokuapp.com/artists/${album.artist.id}`;
    album[
      'tracks'
    ] = `https://tarea2tallerfz.herokuapp.com/albums/${album.id}/tracks`;
    album['self'] = `https://tarea2tallerfz.herokuapp.com/albums/${album.id}`;
    console.log(album);
    ctx.body = album;
    ctx.status = 200;
  } else {
    ctx.body = 'No existe el album';
    ctx.status = 404;
  }
};
