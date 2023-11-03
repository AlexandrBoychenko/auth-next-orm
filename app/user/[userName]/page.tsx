import React from 'react';
import prisma from '../../../lib/prisma';
import { getUser } from '@/utils/getUsers';

export default function User({ params }: { params: { name: string } }) {
  const getUserRes = async () => {
    const user = await getUser(params.name);
    return user;
  };

  return <div>{getUserRes?.name}</div>;
}
