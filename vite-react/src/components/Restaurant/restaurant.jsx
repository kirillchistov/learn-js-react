import { Outlet } from 'react-router';
import { TabNav } from '../Tab/tab-nav';

import styles from './restaurant.module.css';

export const Restaurant = ({ name }) => {

  if (!name) {
    return null;
  }

  return (
    <div className={styles.restaurant}>
      <h2 className={styles.heading}>{name}</h2>
      <nav className={styles.tabContainer}>
        <TabNav to={'menu'}>Menu</TabNav>
        <TabNav to={'reviews'}>Reviews</TabNav>
      </nav>

      <Outlet />
    </div>
  );
};
