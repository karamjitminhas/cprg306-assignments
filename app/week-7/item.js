export default function Item({ name, quantity, category }) {
  return (
    <li className="bg-gray-800 text-white border border-gray-700 p-4 my-2 rounded shadow">
      <p className="font-bold">{name}</p>
      <p>Buy {quantity} in {category}</p>
    </li>
  );
}
