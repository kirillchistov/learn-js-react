import { useState, useEffect } from 'react';
import { getScrollProgress } from './scroll-progress';
import './progbar.module.css';


export const ProgressBar = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      setScrollProgress(getScrollProgress());
    };

    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <div className="progress-bar" style={{ width: `${scrollProgress}%` }}></div>
    
  );
};