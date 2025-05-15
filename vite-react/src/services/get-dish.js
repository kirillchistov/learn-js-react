export const getDish = async (dishId) => {
  const result = await fetch(`http://localhost:3001/api/dish/${dishId}`, {
    next: {
      tags: ['getDish'],
    },
  });
  console.log(result);
  return result.json();
};