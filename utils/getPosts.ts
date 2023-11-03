'use server';
import { cache } from 'react';
import prisma from '../lib/prisma';

export const getPosts = cache(async () => {
  const posts = await prisma.post.findMany({
    where: {
      published: true,
    },
    include: {
      author: {
        select: { name: true },
      },
    },
  });
  return posts;
});

export const getPost = cache(async (id: string) => {
  const post = await prisma.post.findUnique({
    where: { id },
    include: {
      author: {
        select: { name: true, email: true },
      },
    },
  });
  return post;
});
