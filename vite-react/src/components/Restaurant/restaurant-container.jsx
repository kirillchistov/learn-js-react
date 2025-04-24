import { useSelector } from 'react-redux';
import { selectRestaurantById } from '../../redux/entities/restaurant/slice';
import { Restaurant } from './restaurant';


export const RestaurantContainer = ({ id }) => {

  const restaurant = useSelector((state) => selectRestaurantById(state, id));

  const { name, reviews, dishes } = restaurant || {};

  return (
    <Restaurant 
      name={name}
      reviewsIds={reviews}
      dishIds={dishes}
      id={id}
    />
  );
};