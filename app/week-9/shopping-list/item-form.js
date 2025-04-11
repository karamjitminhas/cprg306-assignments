'use client';

import { useState } from 'react';

export default function ItemForm({ onAddItem }) {
  const [name, setName] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [category, setCategory] = useState('produce');

  const handleSubmit = (e) => {
    e.preventDefault();

    const newItem = {
      id: crypto.randomUUID(),
      name,
      quantity,
      category,
    };

    onAddItem(newItem);

    // Reset form
    setName('');
    setQuantity(1);
    setCategory('produce');
  };

  return (
    <form onSubmit={handleSubmit} className="bg-gray-800 p-4 rounded shadow mb-6">
      <div className="mb-4">
        <input
          type="text"
          placeholder="Item name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="w-full p-2 border border-gray-700 rounded bg-gray-900 text-white placeholder-gray-400"
        />
      </div>
      <div className="mb-4 flex gap-4">
        <input
          type="number"
          min="1"
          value={quantity}
          onChange={(e) => setQuantity(Number(e.target.value))}
          required
          className="w-1/2 p-2 border border-gray-700 rounded bg-gray-900 text-white placeholder-gray-400"
        />
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="w-1/2 p-2 border border-gray-700 rounded bg-gray-900 text-white"
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
        className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded w-full"
      >
        Add Item
      </button>
    </form>
  );
}
