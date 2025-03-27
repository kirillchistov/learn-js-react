import {Menu} from '../Menu/menu';
import {Reviews} from '../Reviews/reviews';
import RestaurantStyle from './restaurant.module.css';

export const Restaurant = ({ restaurant }) => {

  const {name, menu, reviews} = restaurant;
  
  return (
      <div className={RestaurantStyle.restaurant}>
        <h2 className={RestaurantStyle.heading}>{name}</h2>

        {/* if no menu or reviews throw error message  */}

        {menu.length ? (
          <Menu menu={menu} />
          ) : (
          "No menu yet"
        )}

        {reviews.length ? (
          <Reviews reviews={reviews} />
        ) : (
          "No reviews yet"
        )}
            
      </div>
  );
};