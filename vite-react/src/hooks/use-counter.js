// import { useState } from 'react';
import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  addToCart,
  removeFromCart,
  selectCartItemAmountById,
} from '../redux/entities/cart/slice';

// import { MIN_COUNT, MAX_COUNT } from '../constants/config';
// import { use } from 'react';

export const useCounter = (id) => {
  // const [value, setCount] = useState(MIN_COUNT);

  const dispatch = useDispatch();

    const value =
    useSelector((state) => selectCartItemAmountById(state, id)) || 0;

    const increment = useCallback(() => dispatch(addToCart(id)), [dispatch, id]); 
    // {
    //     if (value < MAX_COUNT) {
    //         setCount(value + 1);
    //     }
    // };

    const decrement = useCallback(
      () => dispatch(removeFromCart(id)),
      [dispatch, id]
    );
    // {
    //     if (value > MIN_COUNT) {
    //         setCount(value - 1);
    //     }
    // };

  return {
    value,
    increment,
    decrement,
  };
};
