// import { useSelector } from 'react-redux';
import {DishTabContainer} from '../DishTab/dish-tab-container';
// import { selectDishIds } from '../../redux/entities/dish/slice';
// import { selectRestaurantById } from '../../redux/entities/restaurant/slice';

export const Menu = ({ menuIds }) => {

  return (
    <>
      <h3>Menu</h3>
        <ul>
          {menuIds.map((id) => (
            <li key={id}>
              <DishTabContainer id={id} />
            </li>
          ))}
        </ul>
    </>
  )
}
