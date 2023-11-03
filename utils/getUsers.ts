'use server';

import { cache } from 'react';
import prisma from '../lib/prisma';

export const getUser = cache(async (name: string) => {
  const res = await prisma.user.findFirst({
    where: { name },
    select: { posts: true },
  });
  return res;
});
