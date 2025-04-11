'use client';

import { useState, useEffect } from 'react';

export default function MealIdeas({ ingredient }) {
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    async function fetchMeals() {
      if (!ingredient) return;

      const res = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`);
      const data = await res.json();
      setMeals(data.meals || []);
    }

    fetchMeals();
  }, [ingredient]);

  return (
    <div className="bg-gray-900 text-white p-4 mt-6 rounded">
      <h2 className="text-xl font-semibold mb-2">Meal Ideas for {ingredient}</h2>
      <ul className="list-disc ml-6">
        {meals.map((meal) => (
          <li key={meal.idMeal}>{meal.strMeal}</li>
        ))}
        {meals.length === 0 && <li>No meals found</li>}
      </ul>
    </div>
  );
}
