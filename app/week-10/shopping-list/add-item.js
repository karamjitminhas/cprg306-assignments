"use client";

import { useState } from "react";

export default function AddItem({ onAddItem }) {
  const [name, setName] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (name.trim() === "") return;

    const newItem = {
      name: name.trim(),
      quantity: 1,
      category: "produce",
    };

    await onAddItem(newItem);
    setName("");
  };

  return (
    <form onSubmit={handleSubmit} className="mb-6">
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter an item"
        className="border border-gray-300 px-4 py-2 mr-2 rounded w-64"
      />
      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded"
      >
        Add Item
      </button>
    </form>
  );
}
