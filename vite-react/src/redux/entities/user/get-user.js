import { createAsyncThunk } from '@reduxjs/toolkit';
import { selectUserById } from './slice';

export const getUser = createAsyncThunk(
  'userId/getUser',
  async (userId, { rejectWithValue }) => {
    const response = await fetch(
      `http://localhost:3001/api/user/${userId}`
    );

    const result = await response.json();

    if (!result || Object.keys(result).length === 0) {
      return rejectWithValue('no data');
    }

    return result;
  },
  {
    condition: (userId, { getState }) => {
      return !selectUserById(getState(), userId);
    },
  }
);