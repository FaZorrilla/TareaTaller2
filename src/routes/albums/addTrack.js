import { prisma } from '../../db/index.js';
import btoa from 'btoa';

export const addTrack = async (ctx) => {
  console.log(ctx.params);
  const args = ctx.request.body;
  console.log(args);
  const album = await prisma.album.findUnique({
    where: {
      id: ctx.params.albumId,
    },
  });
  if (album) {
    const idtrac = btoa(`${args.name}:${ctx.params.albumId}`);
    const idtrack = idtrac.substring(0, 22);
    console.log(idtrack);
    const album = await prisma.album.findUnique({
      where: {
        id: ctx.params.albumId,
      },
    });
    const ifExist = await prisma.track.findUnique({
      where: {
        id: idtrack,
      },
    });
    if (ifExist) {
      ctx.body = ifExist;
      ctx.status = 409;
    } else {
      const track = await prisma.track.create({
        data: {
          name: args.name,
          duration: args.duration,
          timesPlayed: args.timesPlayed,
          artist: {
            connect: { id: album.artistId },
          },
          album: {
            connect: { id: ctx.params.albumId },
          },
          id: idtrack,
        },
      });
      ctx.body = track;
      ctx.status = 201;
    }
  } else {
    ctx.body = 'No existe el album';
    ctx.status = 422;
  }
};
