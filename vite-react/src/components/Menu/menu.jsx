import {MenuItem} from '../MenuItem/menu-item';


export const Menu = ({ menu }) => {

  return (
    <>
      <h3>Menu</h3>
        <ul>
          {menu.map((item) => (
            <li key={item.id}>
              <MenuItem item={item} />
            </li>
          ))}
        </ul>
    </>
  )
}
