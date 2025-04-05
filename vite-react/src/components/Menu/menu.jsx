import {MenuItem} from '../MenuItem/menu-item';

export const Menu = ({ menuIds }) => {

  return (
    <>
      <h3>Menu</h3>
        <ul>
          {menuIds.map((id) => (
            <li key={id}>
              <MenuItem id={id} />
            </li>
          ))}
        </ul>
    </>
  )
}
