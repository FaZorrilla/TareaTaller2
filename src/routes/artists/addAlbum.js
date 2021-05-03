import { prisma } from '../../db/index.js';
import btoa from 'btoa';

export const addAlbum = async (ctx) => {
  console.log(ctx.params);
  const args = ctx.request.body;
  console.log(args);
  const idalbum = `${args.name}:${ctx.params.artistId}`;
  console.log(idalbum);
  const album = await prisma.album.create({
    data: {
      name: args.name,
      genre: args.genre,
      artist: {
        connect: { id: ctx.params.artistId },
      },
      id: btoa(idalbum),
    },
  });
  ctx.body = album;
  ctx.status = 201;
  // => { category: 'programming', title: 'how-to-node' }
};
