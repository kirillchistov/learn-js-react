import { DishContainer } from "../../../components/Dish";

const DishPage = async ({ params }) => {
  const { dishId } = await params;
  return <DishContainer id={dishId} />;
};
export default DishPage;