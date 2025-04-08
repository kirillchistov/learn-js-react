import {DishContainer} from '../Dish/dish-container';

export const Menu = ({ menuIds }) => {

  return (
    <>
      <h3>Menu</h3>
        <ul>
          {menuIds.map((id) => (
            <li key={id}>
              <DishContainer id={id} />
            </li>
          ))}
        </ul>
    </>
  )
}
