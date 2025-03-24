import { DishCounter } from '../DishCounter/dish-counter';
import menuStyle from './menu-item.module.css';

export const MenuItem = ({ item }) => {
  return (
    <div className={menuStyle.container}>
      <div className={menuStyle.title}>
        {item.name}
      </div>
      <div>
        <DishCounter />
      </div>
    </div>
  );
};