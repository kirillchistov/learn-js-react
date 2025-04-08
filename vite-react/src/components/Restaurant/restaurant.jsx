import {Menu} from '../Menu/menu';
import {Reviews} from '../Reviews/reviews';
import styles from './restaurant.module.css';

export const Restaurant = ({ name, menuIds, reviewIds }) => {
  
  return (
      <div className={styles.restaurant}>
        <h2 className={styles.heading}>{name}</h2>

        {menuIds.length ? (
          <Menu menuIds={menuIds} />
          ) : (
          "No menu yet"
        )}

        {reviewIds.length ? (
          <Reviews reviewIds={reviewIds} />
        ) : (
          "No reviews yet"
        )}
            
      </div>
  );
};