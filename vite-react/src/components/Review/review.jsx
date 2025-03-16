// передаем в пропсы ревью, ожидаем там юзера, текст

export const Review = ({ review }) => {
  return <>{review.user} {review.text}</>;
};