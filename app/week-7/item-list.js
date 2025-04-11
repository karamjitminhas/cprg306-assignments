'use client';

import { useState } from 'react';
import Item from './item';
import ItemForm from './item-form';
import itemsData from './items.json';

export default function ItemList() {
  const [items, setItems] = useState(itemsData);
  const [sortBy, setSortBy] = useState('name');

  const handleAddItem = (newItem) => {
    setItems((prevItems) => [...prevItems, newItem]);
  };

  const sortedItems = [...items].sort((a, b) => {
    if (sortBy === 'name') {
      return a.name.localeCompare(b.name);
    } else if (sortBy === 'category') {
      return a.category.localeCompare(b.category);
    }
    return 0;
  });

  return (
    <div>
      <ItemForm onAddItem={handleAddItem} />
      <div className="mb-4">
        <span className="mr-2 font-semibold text-white">Sort by:</span>
        <button
          className={`mr-2 px-4 py-2 rounded ${
            sortBy === 'name' ? 'bg-orange-600 text-white' : 'bg-gray-300'
          }`}
          onClick={() => setSortBy('name')}
        >
          Name
        </button>
        <button
          className={`px-4 py-2 rounded ${
            sortBy === 'category' ? 'bg-orange-600 text-white' : 'bg-gray-300'
          }`}
          onClick={() => setSortBy('category')}
        >
          Category
        </button>
      </div>
      <ul>
        {sortedItems.map((item) => (
          <Item key={item.id} {...item} />
        ))}
      </ul>
    </div>
  );
}
