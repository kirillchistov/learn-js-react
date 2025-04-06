// import styles from './restaurant-list.module.css';

// export const RestaurantList = ({ restaurantIds, onSetActiveRestaurantId, activeRestaurantId}) => {
  
//   const handleActiveRestaurant = (restaurant) => {
//     if (activeRestaurantId === restaurant.id) {
//       return;
//     }
//     onSetActiveRestaurantId(restaurant.id);
//   };

//   return (
//     <div className={styles.restList}>
//       {restaurantIds.map((restaurantId) => (
//         <button
//           key={restaurantId}
//           onClick={() => {
//             handleActiveRestaurant(restaurantId);
//           }}
//           disabled={activeRestaurantId === restaurantId}
//         >
//           <h3 className={styles.restHeading}>{restaurant.name}</h3>
//         </button>
//       ))}
//     </div>
//   );
// };

import { useSelector } from 'react-redux';
import { selectRestaurantById } from '../../redux/entities/restaurant';
import { Restaurant } from './restaurant';

export const RestaurantList = ({ id }) => {
  const restaurant = useSelector((state) => selectRestaurantById(state, id));

  if (!restaurant) {
    return null;
  }

  const { name, menu, reviews } = restaurant;

  return <Restaurant name={name} reviewsIds={reviews} menuIds={menu} id={id} />;
};
