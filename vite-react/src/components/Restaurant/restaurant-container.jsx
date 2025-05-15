import { Restaurant } from './restaurant';
import { getRestaurants } from '@/services/get-restaurants';

export const RestaurantContainer = async ({ id }) => {

  const restaurants = await getRestaurants(id);

  const restaurant = restaurants.find(
    ({ id: restaurantId }) => restaurantId === id
  );

  if (!restaurant) {
    return null;
  }

  const { name } = restaurant;

  return <Restaurant name={name} restaurantId={id} />;
};
