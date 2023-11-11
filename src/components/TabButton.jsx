export default function TabButton({ children, isSelected, ...props }) {
  return (
    <li>
      <button className={isSelected ? "active" : "nonactive"} {...props}>
        {children}
      </button>
    </li>
  );
}
