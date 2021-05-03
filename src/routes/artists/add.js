import { prisma } from '../../db/index.js';
import btoa from 'btoa';

export const add = async (ctx) => {
  // nuevo artista
  const args = ctx.request.body;
  console.log(args);
  const idnam = btoa(args.name);
  const idname = idnam.substring(0, 22);
  const artist = await prisma.artist.create({
    data: {
      name: args.name,
      age: args.age,
      id: idname,
    },
  });
  ctx.body = artist;
  ctx.status = 201;
};
