import { createAsyncThunk } from '@reduxjs/toolkit';
import { selectUserTotal } from './slice';

export const getUsers = createAsyncThunk(
  'users/getUsers',
  async (_, { getState, dispatch, rejectWithValue }) => {
    const response = await fetch(`http://localhost:3001/api/users`);

    const result = await response.json();

    if (!result.length) {
      return rejectWithValue('no data');
    }

    return result;
  },
  {
    condition: (_, { getState }) => {
      return !selectUserTotal(getState());
    },
  }
);