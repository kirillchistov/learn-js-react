// import { use } from 'react';
// import { useSelector } from 'react-redux';
// import { AuthContext } from '../../auth-context';
// import { DishCounter } from '../DishCounter/dish-counter';
// import { Dish } from './dish';
// import { selectDishById } from '../../redux/entities/dish/slice';
// import styles from './dish.module.css';

// export const DishContainer = ({ id }) => {
  
//   const { auth } = use(AuthContext);
//   const { isAuthorized } = auth;
//   const { dish } = useSelector((state) => selectDishById(state, id));

//   if (!dish) {
//     console.log('nothing to show here');
//     return null;
    
//   }

//   const  { name } = dish;

//   return (
//     <div className={styles.container}>
//       <div>
//         <Dish name={name} />
//       </div>
//       <div>
//         {isAuthorized && (
//           <DishCounter id={id} />
//         )}
//       </div>
//     </div>
//   );
// };

import { AuthContext } from '../../auth-context';
import { useSelector } from "react-redux";
import { use } from "react";
import { selectDishById } from '../../redux/entities/dish/slice';
import { DishCounter } from "../DishCounter/dish-counter";
import { Dish } from "./dish";

import styles from "./dish.module.css";

export const DishContainer = ({ id }) => {
  const dish = useSelector((state) => selectDishById(state, id));
  const { auth } = use(AuthContext);

  if (!dish) {
    return null;
  }

  const { name } = dish;

  return (
    <div className={styles.container}>
      <Dish name={name} />
      {auth.isAuthorized ? <DishCounter id={id} /> : null}
    </div>
  );
};