export default function Item({ name, quantity, category }) {
  return (
    <li className="border p-2 my-2 rounded shadow-sm">
      <p className="font-bold">{name}</p>
      <p>Quantity: {quantity}</p>
      <p>Category: {category}</p>
    </li>
  );
}
