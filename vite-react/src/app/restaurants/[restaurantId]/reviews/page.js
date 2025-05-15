import { ReviewsContainer } from '@/components/Reviews/reviews-container';
import { getReviewsByRestaurantId } from '@/services/get-reviews-by-restaurant-id';
import { getUsers } from '@/services/get-users';
import { UsersContextProvider } from '@/components/users-context/users-context';


const ReviewsPage = async ({ params }) => {
  const { restaurantId } = await params;

  const reviewsPromise = getReviewsByRestaurantId(restaurantId);
  const usersPromise = getUsers();

  const [reviews, users] = await Promise.all([reviewsPromise, usersPromise]);
  
  return (
    <UsersContextProvider users={users}>
      <ReviewsContainer restaurantId={restaurantId} reviews={reviews} />
    </UsersContextProvider>
  )
};

export default ReviewsPage;
