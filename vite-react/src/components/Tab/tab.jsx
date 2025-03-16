import TabStyle from './tab.module.css';

export const TabItem = ({ children, onClick, active }) => {
  return (
    <li className={TabStyle.list}>
      <button className={TabStyle.button}
        onClick={onClick}
      >
        {children}
      </button>
    </li>
  );
};
