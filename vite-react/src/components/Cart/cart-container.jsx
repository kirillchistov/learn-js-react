import { useSelector } from 'react-redux';
import { selectCartItemIds } from '../../redux/entities/cart/slice';
import { Cart } from './cart';

export const CartContainer = () => {
  const itemIds = useSelector(selectCartItemIds);

  if (!itemIds.length) {
    console.log('nothing to show here');
    return null;
  }
  return <Cart itemIds={itemIds} />;
};