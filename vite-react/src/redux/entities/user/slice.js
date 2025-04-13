import { createSlice } from '@reduxjs/toolkit';
// import { normalizedUsers } from '../../../constants/normalized-mock';
import { getUsers } from './get-users';
import { entityAdapter } from '../restaurants/slice';

export const userSlice = createSlice({
  name: 'userSlice',
  initialState:  entityAdapter.getInitialState(),
  extraReducers: (builder) => 
    builder
      .addCase(getUsers.fulfilled, (state, { payload }) => {  
        entityAdapter.setAll(state, payload);
      })
});

const selectUserSlice = (state) => state.userSlice;

export const {
  selectIds: selectUserIds,
  selectById: selectUserById,
  selectTotal: selectUserTotal
} = entityAdapter.getSelectors(selectUserSlice);
