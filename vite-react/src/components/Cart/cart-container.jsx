import { getDishesByRestaurantId } from '@/services/get-dishes-by-restaurant-id';
import { Cart } from './cart';

export const CartContainer = async () => {

  const dishes = await getDishesByRestaurantId()

  if (!dishes.length) {
    return null;
  }
  return <Cart dishes={dishes} />;
};