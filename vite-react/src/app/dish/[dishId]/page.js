import { DishContainer } from '@/components/Dish/dish-container';

const DishPage = async ({ params }) => {
  const { dishId } = await params;
  return <DishContainer id={dishId} />;
};
export default DishPage;