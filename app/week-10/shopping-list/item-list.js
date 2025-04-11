'use client';

import { useState } from 'react';
import Item from './item';
import MealIdeas from './meal-ideas';

export default function ItemList({ items }) {
  const [sortBy, setSortBy] = useState('name');
  const [selectedItemName, setSelectedItemName] = useState('');

  const sortedItems = [...items].sort((a, b) => {
    if (sortBy === 'name') return a.name.localeCompare(b.name);
    if (sortBy === 'category') return a.category.localeCompare(b.category);
    return 0;
  });

  return (
    <div>
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
          <Item
            key={item.id}
            {...item}
            onSelect={setSelectedItemName}
          />
        ))}
      </ul>
      {selectedItemName && <MealIdeas ingredient={selectedItemName} />}
    </div>
  );
}
