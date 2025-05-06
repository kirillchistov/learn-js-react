'use client';

import { useRouter } from 'next/navigation';

export const RestaurantsUpdateButton = () => {
  const router = useRouter();

  const handleClick = async () => {
    const res = await fetch('api/revalidate-restaurants');
    const data = await res.json();
    console.log(data)
    router.refresh();
  }
  return (
    <button onClick={handleClick}>
      Refetch restaurants
    </button>
  );
};