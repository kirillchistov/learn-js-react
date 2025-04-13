import { configureStore } from '@reduxjs/toolkit';
import { restaurantSlice } from './entities/restaurant/slice';
import { dishSlice } from './entities/dish/slice';
import { reviewSlice } from './entities/review/slice';
import { cartSlice } from './entities/cart/slice';
import { userSlice } from './entities/user/slice';
import { requestSlice } from './entities/request/slice';

const loggerMiddleware = (store) => (next) => (action) => {
// const loggerMiddleware = () => (next) => (action) => {
  console.log(action);
  return next(action)
}

export const store = configureStore({
  reducer: {
    [userSlice.name]: userSlice.reducer,
    [restaurantSlice.name]: restaurantSlice.reducer,
    [dishSlice.name]: dishSlice.reducer,
    [reviewSlice.name]: reviewSlice.reducer,
    [cartSlice.name]: cartSlice.reducer,    
    [userSlice.name]: userSlice.reducer,
    [requestSlice.name]: requestSlice.reducer,    
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(loggerMiddleware),
});