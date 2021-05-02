import { prisma } from '../../db/index.js';
import btoa from 'btoa';

export const add = async (ctx) => {
  // nuevo artista
  const args = ctx.request.body;
  console.log(args);
  const artist = await prisma.artist.create({
    data: {
      name: args.name,
      age: args.age,
      id: btoa(args.name),
    },
  });
  ctx.body = artist;
  ctx.status = 201;
};
