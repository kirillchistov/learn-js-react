import { useSelector } from 'react-redux';
import { Menu } from './menu';
import { selectDishById } from '../../redux/entities/dish/slice';

export const MenuContainer = ({ id }) => {
  const dish = useSelector((state) =>
    selectDishById(state, id)
  );


  if (!dish) {
    return null;
  }

  const { name } = dish;

  return <Menu id={id} name={name} />;
};