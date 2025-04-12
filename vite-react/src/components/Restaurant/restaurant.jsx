import { Outlet } from 'react-router';
import {Menu} from '../Menu/menu';
import {Reviews} from '../Reviews/reviews';
import { TabNav } from '../Tab/tab-nav';
import styles from './restaurant.module.css';

// export const Restaurant = ({ name, menuIds, reviewIds }) => {

export const Restaurant = ({ name }) => {  
  return (
      <div className={styles.restaurant}>
        <h2 className={styles.heading}>{name}</h2>
        <nav className={styles.tabContainer}>
          <TabNav to={'menu'}>Menu</TabNav>
          <TabNav to={'reviews'}>Reviews</TabNav>
        </nav>
        <Outlet />

        {/* {menuIds.length ? (
          <Menu menuIds={menuIds} />
          ) : (
          "No menu yet"
        )}

        {reviewIds.length ? (
          <Reviews reviewIds={reviewIds} />
        ) : (
          "No reviews yet"
        )} */}
            
      </div>
  );
};
