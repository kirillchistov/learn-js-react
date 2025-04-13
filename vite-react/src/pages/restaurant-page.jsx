import { useParams } from 'react-router';
import { RestaurantContainer } from '../components/Restaurant/restaurant-container';

export const RestaurantPage = () => {
  const { restaurantId } = useParams();

  return <RestaurantContainer id={restaurantId} />;
};