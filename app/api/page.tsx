'use client';
import React, { useState, useEffect } from 'react';
import { getUser } from '@/utils/getUsers';
import { useParams } from 'next/navigation';

export default function User() {
  const param = useParams();
  const [user, setUser] = useState<{ name: string | null } | null>(null);

  const getUserRes = async () => {
    const user = await getUser(param.userName);
    setUser(user);
  };

  useEffect(() => {
    getUserRes();
  }, []);

  return user ? <div>{user?.name}</div> : <div>Loading...</div>;
}
