"use client";

import { useEffect, useState } from "react";

// This function gets meal ideas using the MealDB API
async function fetchMealIdeas(ingredient) {
  const url = `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`;
  const res = await fetch(url);
  const data = await res.json();

  // API returns { meals: [...] } or null
  return data.meals || [];
}

export default function MealIdeas({ ingredient }) {
  const [meals, setMeals] = useState([]);

  // Load meal ideas whenever ingredient changes
  useEffect(() => {
    async function load() {
      // If nothing selected, clear meals
      if (!ingredient) {
        setMeals([]);
        return;
      }

      const result = await fetchMealIdeas(ingredient);
      setMeals(result);
    }

    load();
  }, [ingredient]);

  return (
    <section className="space-y-4">
      <h2 className="text-xl font-bold text-white">
        Meal Ideas {ingredient ? `for "${ingredient}"` : ""}
      </h2>

      {!ingredient && (
        <p className="text-white/70">Select an item to see meal ideas.</p>
      )}

      {ingredient && meals.length === 0 && (
        <p className="text-white/70">No meals found for this ingredient.</p>
      )}

      <ul className="grid gap-4 sm:grid-cols-2">
        {meals.map((meal) => (
          <li
            key={meal.idMeal}
            className="bg-white/10 p-3 rounded text-white"
          >

            <p className="mt-2 font-medium">{meal.strMeal}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
