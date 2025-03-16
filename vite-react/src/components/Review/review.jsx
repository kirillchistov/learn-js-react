export const Review = ({ review }) => {
  return (
  <>
    <h4>{review.user}</h4>
    <i>{review.text}</i>
  </>
  );
};