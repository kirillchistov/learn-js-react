// передаем в пропсы ревью, ожидаем там юзера, текст и рейтинг?

export const Review = ({review}) => {
  const {user, text} = review;

  return (
    <li>
      <h5>
        {user}
      </h5>
      <i>
        {text}
      </i>
    </li>
  )
}