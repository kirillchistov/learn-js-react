import { useEffect, useState } from 'react';

const getScrollProgress = () => {
  return (
    (window.scrollY /
      (document.documentElement.scrollHeight -
        document.documentElement.clientHeight)) * 100 + '%'
  );
};

// add scroll listener and call onScroll at mount, remove listener on unmount
export const useProgress = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      setScrollProgress(getScrollProgress());
    };

    window.addEventListener('scroll', onScroll);

    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  return scrollProgress;
};