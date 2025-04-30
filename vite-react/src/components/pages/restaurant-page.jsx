'use client';

import { useParams } from 'react-router';
import { RestaurantContainer } from '../Restaurant/restaurant-container';

export const RestaurantPage = () => {
  const { restaurantId } = useParams();

  return (
    <div>
      <RestaurantContainer id={restaurantId} />
    </div>
  );
};
