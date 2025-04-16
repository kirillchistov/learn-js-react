import { createSlice } from '@reduxjs/toolkit';
import { getUsers } from './get-users';
import { entityAdapter } from '../restaurant/slice';

export const userSlice = createSlice({
  name: 'users',
  initialState:  entityAdapter.getInitialState(),
  extraReducers: (builder) => 
    builder
      .addCase(getUsers.fulfilled, (state, { payload }) => {  
        entityAdapter.setAll(state, payload);
      })
});

const selectUserSlice = (state) => state.users;

export const {
  selectIds: selectUserIds,
  selectById: selectUserById,
  selectTotal: selectUserTotal
} = entityAdapter.getSelectors(selectUserSlice);
