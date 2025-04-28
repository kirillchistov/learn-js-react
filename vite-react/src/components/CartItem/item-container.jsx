import { useGetDishesByRestaurantIdQuery } from '../../redux/services/api';

import { CartItem } from './cart-item';

export const ItemContainer = ({ id }) => {
  const { data: dish } = useGetDishesByRestaurantIdQuery(undefined, {
    selectFromResult: (result) => ({
      ...result,
      data: result.data?.find(({ id: dishId }) => dishId === id),
    }),
  });

  if (!dish?.name) {
    return null;
  }

  return <CartItem name={dish.name} id={id} />;
};