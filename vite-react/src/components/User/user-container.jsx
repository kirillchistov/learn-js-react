'use client';

import { use } from 'react';
import { User } from './user';
import { UsersContext } from '../users-context';
// import { useGetUsersQuery } from '../../redux/services/api';

export const UserContainer = ({ id }) => {
  // const { data } = useGetUsersQuery(undefined, {
  //   selectFromResult: (result) => ({
  //     ...result,
  //     data: result?.data?.find(({ id: userId }) => userId === id),
  //   })
  // })
  // if (!data?.name) {
  //   return null;
  // }

  const users = use(UsersContext);

  const user = users.find(({ id: userId }) => userId === id);

  if (!user?.name) {
    return null;
  }

  return <User name={user.name} />
};