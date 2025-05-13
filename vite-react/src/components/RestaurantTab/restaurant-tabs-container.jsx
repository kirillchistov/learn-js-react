import { getRestaurants } from '@/services/get-restaurants';
import { RestaurantTabs } from './restaurant-tab';
import { RestaurantsUpdateButton } from '@/components/RestaurantTab/restaurants-update-button';
import styles from './restaurant-tab.module.css';

export const RestaurantsTabsContainer = async () => {
  
  const restaurants = await getRestaurants();

  if (!restaurants.length) {
    return null;
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.restList}>
        <RestaurantTabs restaurants={restaurants} />
      </div>
      <div className={styles.updateButton}>
        <RestaurantsUpdateButton />
      </div>
    </div>
  )
};
