"use client";

import { useState } from "react";
import NewItem from "./new-item";
import ItemList from "./item-list";
import itemsData from "./items.json";

export default function Page() {
  const [items, setItems] = useState(itemsData);

  function handleAddItem(newItem) {
    setItems([...items, newItem]);
  }

  return (
    <main className="min-h-screen bg-[#0b1d0b] px-6 py-8">
      <h1 className="text-3xl font-bold text-white mb-6">Shopping List</h1>

      <div className="max-w-lg space-y-8">

        <NewItem onAddItem={handleAddItem} />

        {/* List */}
        <ItemList items={items} />
      </div>
    </main>
  );
}

