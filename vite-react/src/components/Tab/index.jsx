const TabItem = ({ children, onClick, active }) => {
  return (
    <li
      style={{
        padding: "5px",
        marginRight: "1px",
        border: "1px solid black",
        display: "inline",
        backgroundColor: active ? "#FFFFFF" : "#DDDDDD",
      }}
    >
      <button
        onClick={onClick}
        style={{ border: "none", backgroundColor: "transparent" }}
      >
        {children}
      </button>
    </li>
  );
};

export default TabItem;