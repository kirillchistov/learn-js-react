import { useState, useEffect, useRef } from 'react';
import './progbar.module.css';

const getScrollProgress = () => {
  return (
    (window.scrollY /
      (document.documentElement.scrollHeight -
        document.documentElement.clientHeight)) *
    100
  );
};

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