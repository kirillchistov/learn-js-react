
import { Menu } from './menu';
import { getDishesByRestaurantId } from '@/services/get-dishes-by-restaurant-id';

export const MenuContainer = async ({ restaurantId }) => {

  const dishes = await getDishesByRestaurantId(restaurantId);

  return <Menu dishes={dishes} />;
};
