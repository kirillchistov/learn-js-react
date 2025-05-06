export const getDish = async (dishId) => {
  const result = await fetch(`http://localhost:3001/api/dish/${dishId}`, {
    next: {
      tags: ['getDish'],
    },
  });

  return result.json();
};