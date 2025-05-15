import { Suspense } from 'react';
import { RestaurantsTabsContainer } from '@/components/RestaurantTab/restaurant-tabs-container';
import styles from './restaurant-tab.module.css';


export const RestaurantsLayout = ({ children }) => {
  return (
    <div className={styles.container}>
      <Suspense fallback='...loading'>
        <RestaurantsTabsContainer />
      </Suspense>
      {children}
    </div>
  );
};

export default RestaurantsLayout;