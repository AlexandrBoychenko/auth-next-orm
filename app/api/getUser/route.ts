import prisma from '../../../lib/prisma';
import { PostProps } from '../../components/Post';

export async function GET() {
  const res = await prisma.post.findMany({
    where: {
      published: true,
    },
    include: {
      author: {
        select: { name: true },
      },
    },
  });
  console.log('reeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeees: ', res);
  return JSON.stringify(res);
}
