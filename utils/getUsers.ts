'use server';

import { cache } from 'react';
import prisma from '../lib/prisma';

export const getUser = cache(
  async (name: string | string[]): Promise<{ name: string | null } | null> => {
    const res = await prisma.user.findFirst({
      where: { name: String(name) },
      select: { name: true },
    });
    return res;
  }
);
