'use client';
import React, { useEffect, useMemo, useState } from 'react';
import { GetServerSideProps, GetStaticProps } from 'next';
import Layout from './components/Layout';
import { PostProps, Post } from './components/Post';
import prisma from '../lib/prisma';
import { getPosts } from '@/utils/getPosts';

const Blog: React.FC = () => {
  const [response, setResponse] = useState<PostProps[] | null>(null);

  const getFeed = async () => {
    const res = await getPosts();
    setResponse(res);
  };

  useEffect(() => {
    getFeed();
  }, []);

  return response ? (
    <Layout>
      <div className="page">
        <h1>Public Feed:</h1>
        <main>
          {response?.map((post) => (
            <div key={post.id} className="post">
              <Post {...post} />
            </div>
          ))}
        </main>
      </div>
      <style jsx>{`
        .h1 {
          margin-bottom: 2rem;
        }
        .post {
          background: white;
          transition: box-shadow 0.1s ease-in;
        }

        .post:hover {
          cursor: pointer;
          box-shadow: 1px 1px 3px #aaa;
        }

        .post + .post {
          margin-top: 2rem;
        }
      `}</style>
    </Layout>
  ) : (
    <div>Loading...</div>
  );
};

export default Blog;
