import { createAsyncThunk } from '@reduxjs/toolkit';
import { selectUsersTotal } from './slice';

export const getUsers = createAsyncThunk(
  'users/getUsers',
//   async (_, { getState, dispatch, rejectWithValue }) => {
  async (_, { rejectWithValue }) => {
    const response = await fetch(`http://localhost:3001/api/users`);

    const result = await response.json();

    if (!result.length) {
      return rejectWithValue('no data in get-users');
    }

    return result;
  },
  {
    condition: (_, { getState }) => {
      return !selectUsersTotal(getState());
    },
  }
);