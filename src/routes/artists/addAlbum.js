import { prisma } from '../../db/index.js';
import btoa from 'btoa';

export const addAlbum = async (ctx) => {
  console.log(ctx.params);
  const args = ctx.request.body;
  console.log(args);
  const artist = await prisma.artist.findUnique({
    where: {
      id: ctx.params.artistId,
    },
  });
  if (artist) {
    const idalbu = btoa(`${args.name}:${ctx.params.artistId}`);
    const idalbum = idalbu.substring(0, 22);
    console.log(idalbum);
    const ifExist = await prisma.album.findUnique({
      where: {
        id: idalbum,
      },
    });
    if (ifExist) {
      ctx.body = ifExist;
      ctx.status = 409;
    } else {
      const album = await prisma.album.create({
        data: {
          name: args.name,
          genre: args.genre,
          artist: {
            connect: { id: ctx.params.artistId },
          },
          id: idalbum,
        },
      });
      ctx.body = album;
      ctx.status = 201;
    }
  } else {
    ctx.body = 'No existe el artista';
    ctx.status = 422;
  }
};
