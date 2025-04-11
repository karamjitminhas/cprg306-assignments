'use client';

import { useEffect, useState } from 'react';
import ItemList from './item-list';
import itemsData from './items.json';

export default function Page() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const stored = localStorage.getItem('shopping-list');
    if (stored) {
      setItems(JSON.parse(stored));
    } else {
      setItems(itemsData);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('shopping-list', JSON.stringify(items));
  }, [items]);

  return (
    <main className="p-6 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Shopping List</h1>
      <ItemList items={items} setItems={setItems} />
    </main>
  );
}
