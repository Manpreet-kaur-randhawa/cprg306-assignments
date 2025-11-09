"use client";

import { useState } from "react";
import NewItem from "./new-item";
import ItemList from "./item-list";
import MealIdeas from "./meal-ideas";
import itemsData from "./items.json";

export default function Page() {
  const [items, setItems] = useState(itemsData);
  const [selectedItemName, setSelectedItemName] = useState("");

  function handleAddItem(newItem) {
    setItems([...items, newItem]);
  }

  function cleanName(name) {
    return name
      .replace(/[^\p{L}\p{N}\s]/gu, "")  // remove emoji
      .split(",")[0]                    // remove sizes
      .trim()
      .toLowerCase();
  }

  function handleItemSelect(item) {
    const cleaned = cleanName(item.name);
    setSelectedItemName(cleaned);
  }

  return (
    <main className="min-h-screen bg-[#0b1d0b] px-6 py-8 text-white">
      <h1 className="text-3xl font-bold mb-6">Shopping List</h1>

      <div className="flex gap-8">
        
        <div className="space-y-8 max-w-md">
          <NewItem onAddItem={handleAddItem} />
          <ItemList items={items} onItemSelect={handleItemSelect} />
        </div>

        <MealIdeas ingredient={selectedItemName} />

      </div>
    </main>
  );
}


