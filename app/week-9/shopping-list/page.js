"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useUserAuth } from "../_utils/auth-context";

import NewItem from "./new-item";
import ItemList from "./item-list";
import MealIdeas from "./meal-ideas";
import itemsData from "./items.json";

export default function Page() {
  const { user } = useUserAuth();
  const router = useRouter();

  // Hooks must be before any early return
  const [items, setItems] = useState(itemsData);
  const [selectedItemName, setSelectedItemName] = useState("");

  useEffect(() => {
    if (!user) router.push("/week-9");
  }, [user, router]);

  if (!user) {
    return (
      <main className="min-h-screen bg-[#0b1d0b] px-6 py-8 text-white">
        <p>Redirecting…</p>
      </main>
    );
  }

  function handleAddItem(newItem) {
    setItems([...items, newItem]);
  }

  function cleanName(name) {
    return name
      .replace(/[^\p{L}\p{N}\s]/gu, "")
      .split(",")[0]
      .trim()
      .toLowerCase();
  }

  function handleItemSelect(item) {
    setSelectedItemName(cleanName(item.name));
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
