"use client";

import { useState } from "react";
import Item from "./item";
import items from "./items.json";

export default function ItemList() {
  const [sortBy, setSortBy] = useState("name"); // name, category, or grouped

  // Helper: sort by chosen field
  const sortedItems = [...items].sort((a, b) => {
    if (sortBy === "name") {
      return a.name.toLowerCase().localeCompare(b.name.toLowerCase());
    } else if (sortBy === "category") {
      return a.category.toLowerCase().localeCompare(b.category.toLowerCase());
    }
    return 0; // grouped handled separately
  });

  // Optional grouped list by category
  const groupedItems = items.reduce((groups, item) => {
    const cat = item.category;
    if (!groups[cat]) groups[cat] = [];
    groups[cat].push(item);
    return groups;
  }, {});

  // Button styles
  const active =
    "px-3 py-1 rounded-md text-white bg-orange-600 font-semibold";
  const normal =
    "px-3 py-1 rounded-md text-white bg-orange-500 hover:bg-orange-600";

  return (
    <section className="space-y-4">
      {/* Sorting buttons */}
      <div className="flex items-center gap-2 text-white/90">
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
        <button
          className={sortBy === "grouped" ? active : normal}
          onClick={() => setSortBy("grouped")}
        >
          Grouped Category
        </button>
      </div>

      {/* Conditionally render normal list or grouped list */}
      {sortBy !== "grouped" ? (
        <ul className="space-y-3">
          {sortedItems.map((it) => (
            <Item
              key={it.id}
              name={it.name}
              quantity={it.quantity}
              category={it.category}
            />
          ))}
        </ul>
      ) : (
        <div className="space-y-4">
          {Object.keys(groupedItems)
            .sort()
            .map((cat) => (
              <div key={cat}>
                <h2 className="text-white font-bold text-lg capitalize mb-2">
                  {cat}
                </h2>
                <ul className="space-y-2">
                  {groupedItems[cat]
                    .sort((a, b) => a.name.localeCompare(b.name))
                    .map((it) => (
                      <Item
                        key={it.id}
                        name={it.name}
                        quantity={it.quantity}
                        category={it.category}
                      />
                    ))}
                </ul>
              </div>
            ))}
        </div>
      )}
    </section>
  );
}
