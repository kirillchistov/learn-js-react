import ListStyle from './restaurant-list.module.css';

export const RestaurantList = ({ restaurants, onSetActiveRestaurant, activeRestaurant}) => {
  
  const handleActiveRestaurant = (restaurant) => {
    if (activeRestaurant.id === restaurant.id) {
      return;
    }
    onSetActiveRestaurant(restaurant);
  };

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
