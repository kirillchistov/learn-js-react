'use client';

// import { useState } from 'react';
import { UsersContext } from '.';

export const UsersContextProvider = ({ children, users }) => {

  // const [auth, setAuth] = useState({ isAuthorized: false });

  // const userAuth = () => {
  //   setAuth((prev) => {
  //     return prev.isAuthorized
  //       ? { isAuthorized: false }
  //       : {
  //           isAuthorized: true,
  //           name: "SuperAdmin",
  //           userId: "c3d4abd4-c3ef-46e1-8719-eb17db1d6e99",
  //         };
  //   });
  // };

  return <UsersContext value={users}>{children}</UsersContext>;
};