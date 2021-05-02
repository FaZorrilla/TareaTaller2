import { prisma } from '../../db';

export const add = async (ctx) => {
  // nuevo artista
  const data = ctx.request.body;
  console.log(data);
};
