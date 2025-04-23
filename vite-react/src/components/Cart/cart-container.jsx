import { useSelector } from 'react-redux';
import { selectCartItemIds } from '../../redux/entities/cart/slice';
import { Cart } from './cart';

export const CartContainer = () => {
  const itemIds = useSelector(selectCartItemIds);

  return <Cart itemIds={itemIds} />;
};