import { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectRestaurantIds } from '../../redux/entities/restaurant/slice';
import { RestaurantList } from '../RestaurantList/restaurant-list';
import { Restaurant } from '../Restaurant/restaurant';

// import { restaurants } from '../../constants/mock';

export const Restaurants = () => {
  const restaurantIds = useSelector(selectRestaurantIds);
  const [activeRestaurantId, setActiveRestaurantId] = useState(restaurantIds[0]);
  return (
    <div>
      <RestaurantList restaurantIds={restaurantIds} onSetActiveRestaurantId={setActiveRestaurantId} activeRestaurantId={activeRestaurantId} />
      {activeRestaurantId && (
        <Restaurant id={activeRestaurantId} />
      )}
    </div>
  );
};