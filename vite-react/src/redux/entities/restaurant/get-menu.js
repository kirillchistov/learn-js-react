import { createAsyncThunk } from '@reduxjs/toolkit';
import { selectRestaurantMenu } from './slice';
import { selectDishIds } from '../dish/slice';

export const getRestaurantMenu = createAsyncThunk(
  'restaurants/getRestaurantMenu',
  async (id, { rejectWithValue }) => {
    const response = await fetch(`http://localhost:3001/api/dishes?restaurantId=${id}`);
    const result = await response.json();

    if (!result.length) {
      return rejectWithValue('no data');
    }
    return result;
  },
  {
    condition: (id, { getState }) => {
      const state = getState();
      const restaurantDishIds = selectRestaurantMenu(state, id);
      const allDishIds = selectDishIds(state);

      if (!restaurantDishIds) {
        return true;
      }
      if (restaurantDishIds.length === 0) {
        return false;
      }

      return restaurantDishIds.some((dishId) => !allDishIds.includes(dishId));
    },
  }
);