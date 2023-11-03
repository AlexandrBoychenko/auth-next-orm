'use client';
import React, { FC, useState, useEffect } from 'react';
import prisma from '../../../lib/prisma';
import { PostProps } from '@/app/components/Post';
import { getPost } from '@/utils/getPosts';
import { redirect, useRouter } from 'next/navigation';

export default function Page({ params }: { params: { postId: string } }) {
  const router = useRouter();

  const [response, setResponse] = useState<PostProps | null>(null);

  const getFeed = async () => {
    const response = await getPost(String(params.postId));
    setResponse(response);
  };

  useEffect(() => {
    getFeed();
  }, []);

  const onClick = () => router.push(`/user/${response?.author?.name}`);

  return (
    <div className="post-page" onClick={onClick}>
      <div>Author: {response?.author?.name}</div>
      <div>Email: {response?.author?.email}</div>
      <h1>Post content:</h1>
      <p>{response?.content}</p>
      <style jsx>
        {`
          .post-page {
            cursor: pointer;
          }
        `}
      </style>
    </div>
  );
}
