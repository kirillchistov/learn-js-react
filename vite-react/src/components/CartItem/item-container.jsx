import { useSelector } from 'react-redux';
import { selectDishById } from '../../redux/entities/dish/slice';
import { CartItem } from './cart-item';

export const ItemContainer = ({ item }) => {
  const { id, amount } = item;
  const dish = useSelector((state) => selectDishById(state, id));

  if (!dish) {
    return null;
  }

  return <CartItem name={dish.name} amount={amount} />;
};