import { useSelector } from 'react-redux';
import { selectCartItemIds } from '../../redux/entities/cart/slice';
import { Cart } from './cart-new';

export const CartContainer = () => {
  const itemIds = useSelector(selectCartItemIds);

  if (!itemIds.length) {
    return null;
  }

  return <Cart itemIds={itemIds} />;
};