// передаем в пропсы ревью, ожидаем там юзера, текст и рейтинг

const ReviewItem = ({ review }) => {
  return (
    <li>
      {review.user}: {review.text} (Рейтинг: {review.rating})
    </li>
  );
};

export default ReviewItem;