export default function Item({ name, quantity, category }) {
  return (
    <li className="border border-gray-600 rounded-md px-4 py-2 mb-2 shadow-sm bg-black w-full">
      <p className="font-semibold">{name}</p>
      <p className="text-sm">Quantity: {quantity}</p>
      <p className="text-xs italic text-gray-400">Category: {category}</p>
    </li>
  );
}
