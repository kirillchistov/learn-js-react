import { useCallback } from 'react';
// import { Restaurant } from '../Restaurant/restaurant';
import ListStyle from './restaurant-list.module.css';

// TODO: Move handler and button out
export const RestaurantList = ({ restaurants, onSetActiveRestaurant, activeRestaurant}) => {
  
  const handleActiveRestaurant = useCallback ((id) => {
    const openRestaurant = restaurants.find(
      (restaurant) => restaurant.id === id
    );
    onSetActiveRestaurant(openRestaurant);
    }, []
  );


  return (
    <div className={ListStyle.restList}>
      {restaurants.map((restaurant) => (
        <button
          key={restaurant.id}
          onClick={() => {
            handleActiveRestaurant(restaurant);
          }}
          disabled={activeRestaurant.id === restaurant.id}
        >
          <h3 className={ListStyle.restHeading}>{restaurant.name}</h3>
        </button>
      ))}
    </div>
  );
};
