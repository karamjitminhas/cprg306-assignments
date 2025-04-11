'use client';

import { useState } from 'react';
import Item from './item';
import itemsData from './items.json';

export default function ItemList() {
  const [sortBy, setSortBy] = useState('name');

  const sortedItems = [...itemsData].sort((a, b) => {
    if (sortBy === 'name') {
      return a.name.localeCompare(b.name);
    } else if (sortBy === 'category') {
      return a.category.localeCompare(b.category);
    }
    return 0;
  });

  return (
    <div>
      <div className="mb-4">
        <span className="mr-2 font-semibold">Sort by:</span>
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
