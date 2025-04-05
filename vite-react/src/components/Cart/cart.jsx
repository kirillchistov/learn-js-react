import { useSelector } from 'react-redux';
import { selectCartItems } from '../../redux/entities/cart/slice';
import { ItemContainer } from '../CartItem/item-container';

export const Cart = () => {
  const items = useSelector(selectCartItems);

  if (!items.length) {
    return null;
  }

  return (
    <ul>
      {items.map((cartItem) => (
        <ItemContainer key={cartItem.id} item={cartItem} />
      ))}
    </ul>
  );
};