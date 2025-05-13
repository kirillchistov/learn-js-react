import { DishContainer } from '@/components/Dish/dish-container';
import { Suspense } from 'react';

const DishPage = async ({ params }) => {
  const { dishId } = await params;
  <Suspense fallback='...loading'>
    return <DishContainer id={dishId} />;
  </Suspense>
};
export default DishPage;