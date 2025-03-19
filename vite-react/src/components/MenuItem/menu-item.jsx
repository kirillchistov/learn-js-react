import { Counter } from '../Counter/counter';

export const MenuItem = ({ item }) => {
  return (
    <>
      {item.name}
      <Counter />
    </>
  );
};