import { RestaurantLayout } from '@/components/Restaurant/layout';
import { getRestaurants } from '@/services/get-restaurants';

export const generateMetadata = async ({ params }) => {
  const { restaurantId } = await params;

  const restaurants = await getRestaurants();

  const restaurant = restaurants.find(({ id }) => restaurantId === id);

  return {
    title: restaurant.name,
  };
};

export default RestaurantLayout;
