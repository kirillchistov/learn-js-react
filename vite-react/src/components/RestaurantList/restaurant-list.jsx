// import { useState } from "react";
// import { Restaurant } from "../Restaurant/restaurant";
import ListStyle from './restaurant-list.module.css';

export const RestaurantList = ({ restaurants, onSetActiveRestaurant, activeRestaurant}) => {
  
  const handleActiveRestaurant = (restaurant) => {
    if (activeRestaurant.id === restaurant.id) {
      return;
    }
    onSetActiveRestaurant(restaurant);
  };

  return (
    <div className={ListStyle.restlist}>
      {restaurants.map((restaurant) => (
        <button
          key={restaurant.id}
          onClick={() => {
            handleActiveRestaurant(restaurant);
          }}
          disabled={activeRestaurant.id === restaurant.id}
        >
          <h2>{restaurant.name}</h2>
        </button>
      ))}
    </div>
  );
};
