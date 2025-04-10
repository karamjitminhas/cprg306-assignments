"use client";

import { useState } from "react";

export default function NewItem() {
  const [quantity, setQuantity] = useState(1);

  const increment = () => {
    setQuantity((prev) => Math.min(prev + 1, 20));
  };

  const decrement = () => {
    setQuantity((prev) => Math.max(prev - 1, 1));
  };

  return (
    <div className="p-4 border rounded max-w-xs bg-white dark:bg-zinc-900">
      <p className="text-lg font-semibold mb-2">Quantity: {quantity}</p>
      <div className="flex space-x-2">
        <button
          onClick={decrement}
          disabled={quantity === 1}
          className="px-4 py-2 bg-red-600 text-white rounded disabled:opacity-50"
        >
          -
        </button>
        <button
          onClick={increment}
          disabled={quantity === 20}
          className="px-4 py-2 bg-green-600 text-white rounded disabled:opacity-50"
        >
          +
        </button>
      </div>
    </div>
  );
}
