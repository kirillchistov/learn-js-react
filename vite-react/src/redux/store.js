import { configureStore } from '@reduxjs/toolkit';
import { userSlice } from './entities/user/slice';
import { restaurantSlice } from './entities/restaurant/slice';
import { dishSlice } from './entities/dish/slice';
import { reviewSlice } from './entities/review/slice';
import { cartSlice } from './entities/cart/slice';

export const store = configureStore({
  reducer: {
    [userSlice.name]: userSlice.reducer,
    [restaurantSlice.name]: restaurantSlice.reducer,
    [dishSlice.name]: dishSlice.reducer,
    [reviewSlice.name]: reviewSlice.reducer,
    [cartSlice.name]: cartSlice.reducer,    
  },
});