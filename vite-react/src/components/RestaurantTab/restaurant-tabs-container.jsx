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
    <div className={styles.container}>
      <div><RestaurantTabs restaurants={restaurants} /></div>
      <div><RestaurantsUpdateButton /></div>
    </div>
  )
};
