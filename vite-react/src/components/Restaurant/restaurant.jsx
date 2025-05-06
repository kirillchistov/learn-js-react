import { TabNav } from '../Tab/tab-nav';

import styles from './restaurant.module.css';

export const Restaurant = ({ name, restaurantId }) => {


  return (
    <div className={styles.container}>
      <div className={styles.restaurant}>
        <h2 className={styles.heading}>{name}</h2>
        <nav className={styles.tabContainer}>
          <TabNav href={`/restaurants/${restaurantId}/menu`}>Menu</TabNav>
          <TabNav href={`/restaurants/${restaurantId}/reviews`}>Reviews</TabNav>
        </nav>
      </div>
    </div>
  );
};
