import { useState } from "react";
import { TabItem } from "./tab-item";
import { Restaurant } from "../Restaurant";

const Restaurants = ({ restaurants }) => {
  const [activeRestaurant, setActiveRestaurant] = useState(null);

  return (
    <>
      <ul>
        {restaurants.map((restaurant) => (
          <TabItem
            key={restaurant.id}
            onClick={() => setActiveRestaurant(restaurant)}
            active={activeRestaurant && restaurant.id === activeRestaurant.id}
          >
            {restaurant.name}
          </TabItem>
        ))}
      </ul>
      {activeRestaurant && <Restaurant restaurant={activeRestaurant} />}
    </>
  );
};

export default Restaurants;