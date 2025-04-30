'use client'

import { useState } from 'react';
import { AuthContext } from '.';

export const AuthContextProvider = ({ children }) => {
  const [auth, setAuth] = useState({ isAuthorized: false });

  const toggleAuth = () => {
    setAuth((prev) => {
      return prev.isAuthorized
        ? { isAuthorized: false }
        : { isAuthorized: true, name: 'Antony', userId: 'a304959a-76c0-4b34-954a-b38dbf310360'  };
    });
  };

  return <AuthContext value={{ auth, toggleAuth }}>{children}</AuthContext>;
};