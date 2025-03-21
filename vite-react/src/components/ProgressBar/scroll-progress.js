export const getScrollProgress = () => {
  return (
    (window.scrollY /
      (document.documentElement.scrollHeight -
        document.documentElement.clientHeight)) *
    100
  );
};
