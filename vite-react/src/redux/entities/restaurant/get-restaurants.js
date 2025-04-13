import { createAsyncThunk } from "@reduxjs/toolkit";
import { selectRestaurantsTotal } from "./slice";

export const getRestaurants = createAsyncThunk(
  "restaurants/getRestaurants",
//   async (_, { getState, dispatch, rejectWithValue }) => {
  async (_, { rejectWithValue }) => {
    const response = await fetch("http://localhost:3001/api/restaurants");

    const result = await response.json();

    if (!result.length) {
      rejectWithValue("no data in get-restaurants");
      return;
    }

    return result;
  },
  {
    condition: (_, { getState }) => {
      return !selectRestaurantsTotal(getState());
    },
  }
);