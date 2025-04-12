import { ItemContainer } from '../CartItem/item-container';
import styles from './cart.module.css';

export const Cart = ({ itemIds} ) => {

  if (!itemIds.length) {
    console.log('Nothing to show');
    return null;
  }

  return (
    <>
      <h3>Your cart</h3>
      <ul>
        {itemIds.map((id) => (
          <li key={id}>
            <ItemContainer id={id} />
          </li>
        ))}
      </ul>
    </>
  );
};
