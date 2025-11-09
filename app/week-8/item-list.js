"use client";

import { useState } from "react";
import Item from "./item";

export default function ItemList({ items, onItemSelect }) {
  const [sortBy, setSortBy] = useState("name");

  const sortedItems = [...items].sort((a, b) => {
    if (sortBy === "name") return a.name.localeCompare(b.name);
    if (sortBy === "category") return a.category.localeCompare(b.category);
    return 0;
  });

  const active = "px-4 py-1 rounded-md text-white bg-orange-600 font-semibold";
  const normal =
    "px-4 py-1 rounded-md text-white bg-orange-500 hover:bg-orange-600";

  return (
    <section className="space-y-4 max-w-md">

      <div className="flex items-center gap-2 text-white">
        <span>Sort by:</span>
        <button
          className={sortBy === "name" ? active : normal}
          onClick={() => setSortBy("name")}
        >
          Name
        </button>
        <button
          className={sortBy === "category" ? active : normal}
          onClick={() => setSortBy("category")}
        >
          Category
        </button>
      </div>

      <ul className="space-y-3">
        {sortedItems.map((it) => (
          <li key={it.id}>
            <Item
              name={it.name}
              quantity={it.quantity}
              category={it.category}
              onSelect={() => onItemSelect(it)}
            />
          </li>
        ))}
      </ul>

    </section>
  );
}
