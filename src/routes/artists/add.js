import { prisma } from '../../db/index.js';
import btoa from 'btoa';

export const add = async (ctx) => {
  // nuevo artista

  const args = ctx.request.body;
  if (typeof args.name == 'string' && typeof args.age == 'number') {
    console.log(args);
    console.log(args.length);
    const idnam = btoa(args.name);
    const idname = idnam.substring(0, 22);
    const ifExist = await prisma.artist.findUnique({
      where: {
        id: idname,
      },
    });
    if (ifExist) {
      ctx.body = ifExist;
      ctx.status = 409;
    } else {
      const artist = await prisma.artist.create({
        data: {
          name: args.name,
          age: args.age,
          id: idname,
        },
      });
      ctx.body = artist;
      ctx.status = 201;
    }
  } else {
    console.log('El json esta mal');
    ctx.body = 'El json ingresado esta mal';
    ctx.status = 400;
  }
};
