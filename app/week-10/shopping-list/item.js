export default function Item({ name, quantity, category, onSelect }) {
  return (
    <li
      onClick={() => onSelect(name.split(',')[0])}
      className="bg-gray-800 text-white border border-gray-700 p-4 my-2 rounded shadow cursor-pointer hover:bg-gray-700"
    >
      <p className="font-bold">{name}</p>
      <p>Buy {quantity} in {category}</p>
    </li>
  );
}
