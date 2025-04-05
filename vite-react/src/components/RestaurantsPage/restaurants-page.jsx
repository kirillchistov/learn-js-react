import { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectRestaurantIds } from '../../redux/entities/restaurant/slice';
import { RestaurantContainer } from '../Restaurant/restaurant-container';
import { RestaurantTabContainer } from '../RestaurantList/restaurant-tab-container';
import styles from './restaurants-page.module.css';

export const RestaurantsPage = () => {

  const restaurantIds = useSelector(selectRestaurantIds);

  const [activeRestaurantId, setActiveRestaurantId] = useState(
    restaurantIds[0]
  );

  const handleSetActiveRestaurantId = (id) => {
    if (activeRestaurantId === id) {
      return;
    }
    setActiveRestaurantId(id);
  };

  return (
    <div className={'container'}>
      <div className={styles.restaurantContainer}>
        {restaurantIds.map((id) => (
          <RestaurantTabContainer
            key={id}
            id={id}
            onClick={() => {
              handleSetActiveRestaurantId(id);
            }}
            isActive={activeRestaurantId === id}
          />
        ))}
      </div>
      <div>
        <RestaurantContainer key={activeRestaurantId} id={activeRestaurantId} />
      </div>
    </div>
  );
};