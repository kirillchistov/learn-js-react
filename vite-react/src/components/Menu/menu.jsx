import {DishTabContainer} from '../DishTab/dish-tab-container';

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
