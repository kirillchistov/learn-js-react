import { use } from 'react';
import { AuthContext } from '../../auth-context';
import { TabNav } from '../Tab/tab-nav';
import { ReviewForm } from '../ReviewForm/review-form';
import { Outlet } from 'react-router';
import styles from './restaurant.module.css';


export const Restaurant = ({ name }) => {

  const { auth } = use(AuthContext);
  const { isAuthorized } = auth;

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

      {isAuthorized && ( <ReviewForm /> )}        

    </div>
  );
};
