import { useRouter } from 'next/navigation';
import { FC } from 'react';

export type PostProps = {
  id: string;
  title: string;
  author: {
    name: string | null;
    email?: string | null;
  } | null;
  content: string | null;
  published: boolean;
};

export const Post: FC<PostProps> = (post) => {
  const router = useRouter();
  const onClick = () => router.push(`post/${post.id}`);
  return (
    <div onClick={onClick}>
      <div>Post author: {post.author?.name}</div>
      <div>Author email: {post.author?.email}</div>
      <h2>{post.title}</h2>
    </div>
  );
};
