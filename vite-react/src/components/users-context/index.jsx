'use client';

import { createContext } from 'react';

export const UsersContext = createContext({
    isAuthorized: false,
    userAuth: () => {},
});