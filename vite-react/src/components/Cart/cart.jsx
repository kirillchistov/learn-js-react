import { ItemContainer } from '../CartItem/item-container';

export const Cart = ({ itemIds} ) => {

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
