import { useSelector } from 'react-redux';
import { selectDishById } from '../../redux/entities/dish/slice';
// import { selectCartItemAmountById } from '../../redux/entities/cart/slice';

import { CartItem } from './cart-item';

export const ItemContainer = ({ id }) => {
  // const { id, amount } = item;
  const dish = useSelector((state) => selectDishById(state, id));

  if (!dish) {
    return null;
  }

  return <CartItem name={dish.name} id={id} />;
};