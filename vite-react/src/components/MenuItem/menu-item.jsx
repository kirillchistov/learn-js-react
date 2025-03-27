import { use } from 'react';
import { AuthContext } from '../../auth-context';
import { DishCounter } from '../DishCounter/dish-counter';
import menuStyle from './menu-item.module.css';

export const MenuItem = ({ item }) => {
  const { auth } = use(AuthContext);
  const { isAuthorized } = auth;

  if (!item.name) {
    return null;
  }

  return (
    <div className={menuStyle.container}>
      <div className={menuStyle.title}>
        {item.name}
      </div>
      <div>
        {isAuthorized && (
          <>
            <DishCounter />
          </>
        )}
      </div>
    </div>
  );
};