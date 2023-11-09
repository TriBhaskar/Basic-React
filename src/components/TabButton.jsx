export default function TabButton({ children, onSelect, isSelected }) {
  return (
    <li>
      <button
        className={isSelected ? "active" : "nonactive"}
        onClick={onSelect}
      >
        {children}
      </button>
    </li>
  );
}
