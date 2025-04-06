import { useSelector } from 'react-redux';
import { selectRestaurantById } from '../../redux/entities/restaurant/slice';
import { TabItem } from '../Tab/tab';

export const RestaurantTabContainer = ({ id, onClick, isActive }) => {

  const restaurant = useSelector((state) => selectRestaurantById(state, id));

  if (!restaurant) {
    return null;
  }

  const { name } = restaurant;
  return (
    <TabItem
      title={name}
      onClick={onClick}
      isActive={isActive}
    />
  );
};