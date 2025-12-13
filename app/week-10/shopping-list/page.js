"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import { useUserAuth } from "../_utils/auth-context";
import { getItems, addItem } from "../_services/shopping-list-service";

import NewItem from "./new-item";
import ItemList from "./item-list";
import MealIdeas from "./meal-ideas";

export default function Page() {
  const { user } = useUserAuth();
  const router = useRouter();

  const [items, setItems] = useState([]);
  const [selectedItemName, setSelectedItemName] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  // Protect: redirect to week-10 landing if not logged in //
  useEffect(() => {
    if (!user) {
      router.push("/week-10");
    }
  }, [user, router]);

  // Load items from Firestore for this user //
  useEffect(() => {
    async function loadItems() {
      if (!user) return;

      setIsLoading(true);
      try {
        const firestoreItems = await getItems(user.uid);
        setItems(firestoreItems);
      } catch (err) {
        console.error(err);
        alert("Failed to load items from Firestore.");
      } finally {
        setIsLoading(false);
      }
    }

    loadItems();
  }, [user]);

  // Add item to Firestore & update //
  async function handleAddItem(newItem) {
    if (!user) return;

    try {
      const id = await addItem(user.uid, newItem);
      setItems((prev) => [...prev, { ...newItem, id }]);
    } catch (err) {
      console.error(err);
      alert("Failed to add item.");
    }
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

  if (!user) {
    return (
      <main className="min-h-screen bg-[#0b1d0b] px-6 py-8 text-white">
        <p>Redirecting…</p>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#0b1d0b] px-6 py-8 text-white">
      <h1 className="text-3xl font-bold mb-6">Shopping List</h1>

      {isLoading ? (
        <p className="text-white/70">Loading items…</p>
      ) : (
        <div className="flex gap-8">
          <div className="space-y-8 max-w-md">
            <NewItem onAddItem={handleAddItem} />
            <ItemList items={items} onItemSelect={handleItemSelect} />
          </div>

          <MealIdeas ingredient={selectedItemName} />
        </div>
      )}
    </main>
  );
}
