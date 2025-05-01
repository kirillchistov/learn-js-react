import { MenuContainer } from '../../../../components/Menu/menu-container';

const MenuPage = async ({ params }) => {
  const { restaurantId } = await params;
  return <MenuContainer restaurantId={restaurantId} />;
};
export default MenuPage;