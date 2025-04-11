"use client";

import { useState } from "react";

export default function NewItem() {
  const [name, setName] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [category, setCategory] = useState('produce');

  const handleSubmit = (e) => {
    e.preventDefault();

    const item = {
      name,
      quantity,
      category,
    };

    console.log(item);
    alert(`Item Added:\n- Name: ${name}\n- Quantity: ${quantity}\n- Category: ${category}`);

    // Reset form
    setName('');
    setQuantity(1);
    setCategory('produce');
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="p-4 border rounded max-w-md space-y-4 bg-white dark:bg-zinc-900"
    >
      <div>
        <label className="block mb-1 font-medium">Item Name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="w-full border px-3 py-2 rounded"
        />
      </div>

      <div>
        <label className="block mb-1 font-medium">Quantity:</label>
        <input
          type="number"
          min="1"
          max="20"
          value={quantity}
          onChange={(e) => setQuantity(Number(e.target.value))}
          required
          className="w-full border px-3 py-2 rounded"
        />
      </div>

      <div>
        <label className="block mb-1 font-medium">Category:</label>
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="w-full border px-3 py-2 rounded"
        >
          <option value="produce">Produce</option>
          <option value="dairy">Dairy</option>
          <option value="bakery">Bakery</option>
          <option value="meat">Meat</option>
          <option value="canned goods">Canned Goods</option>
          <option value="dry goods">Dry Goods</option>
          <option value="household">Household</option>
        </select>
      </div>

      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Add Item
      </button>
    </form>
  );
}
