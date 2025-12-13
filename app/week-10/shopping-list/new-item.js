"use client";

import { useState } from "react";

export default function NewItem({ onAddItem }) {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [category, setCategory] = useState("produce");

  function increment() {
    if (quantity < 99) setQuantity(quantity + 1);
  }

  function decrement() {
    if (quantity > 1) setQuantity(quantity - 1);
  }

  function handleSubmit(e) {
    e.preventDefault();

    const item = {
      id: Date.now().toString(),
      name,
      quantity,
      category
    };

    onAddItem(item);

    setName("");
    setQuantity(1);
    setCategory("produce");
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-[#0f1724] border border-white/10 rounded-lg p-4 shadow-md w-full max-w-md space-y-4"
    >
      {/* Input */}
      <input
        type="text"
        required
        placeholder="Item name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="w-full px-3 py-2 rounded-md bg-white text-black"
      />

      {/* Quantity + Category */}
      <div className="flex justify-between items-center">
        <div className="flex items-center bg-white rounded-md shadow-md px-3 py-2">
          <p className="text-lg font-semibold w-6 text-center text-black">
            {quantity}
          </p>

          <button
            type="button"
            onClick={decrement}
            disabled={quantity === 1}
            className="ml-2 px-3 py-1 rounded bg-[#b5c59c] text-white font-bold disabled:opacity-50"
          >
            −
          </button>

          <button
            type="button"
            onClick={increment}
            disabled={quantity === 99}
            className="ml-2 px-3 py-1 rounded bg-[#3a8b57] text-white font-bold disabled:opacity-50"
          >
            +
          </button>
        </div>

        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="rounded border border-gray-300 px-2 py-2 bg-white text-black"
        >
          <option value="produce">Produce</option>
          <option value="dairy">Dairy</option>
          <option value="bakery">Bakery</option>
          <option value="meat">Meat</option>
          <option value="frozen foods">Frozen Foods</option>
          <option value="canned goods">Canned Goods</option>
          <option value="dry goods">Dry Goods</option>
          <option value="beverages">Beverages</option>
          <option value="snacks">Snacks</option>
          <option value="household">Household</option>
          <option value="other">Other</option>
        </select>
      </div>

   
      <button
        type="submit"
         className="w-full bg-[#3a8b57] text-white font-bold py-2 rounded-md hover:bg-[#2e744a]"
      >
        +
      </button>
    </form>
  );
}
