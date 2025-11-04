"use client";

import { useState } from "react";

export default function NewItem() {
  // State variables //
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [category, setCategory] = useState("produce");

  // Quantity functions //
  function increment() {
    if (quantity < 99) setQuantity(quantity + 1); // ✅ limit raised to 99
  }

  function decrement() {
    if (quantity > 1) setQuantity(quantity - 1);
  }

  // Form submission //
  function handleSubmit(e) {
    e.preventDefault();

    const item = { name, quantity, category };
    console.log("New item:", item);

    alert(
      `Item added!\nName: ${name}\nQuantity: ${quantity}\nCategory: ${category}`
    );

    // reset fields
    setName("");
    setQuantity(1);
    setCategory("produce");
  }

  return (
    // full-screen background
    <div className="flex flex-col items-center min-h-screen bg-[#0b1d0b]">
      <form
        onSubmit={handleSubmit}
        className="mt-6 bg-white rounded-md shadow-md px-4 py-4 flex flex-col gap-4 w-80"
      >
        {/* Name input */}
        <input
          type="text"
          required
          placeholder="Item name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#3a8b57]"
        />

        {/* Quantity & Category row */}
        <div className="flex justify-between items-center">
          {/* Quantity box */}
          <div className="flex items-center bg-white rounded-md shadow-md px-3 py-2">
            <p className="text-lg font-semibold w-6 text-center text-black">
              {quantity}
            </p>

            <button
              type="button"
              onClick={decrement}
              disabled={quantity === 1}
              className="ml-2 px-3 py-1 rounded bg-[#b5c59c] text-white font-bold disabled:opacity-50">
              −
            </button>

            <button
              type="button"
              onClick={increment}
              disabled={quantity === 99}
              className="ml-2 px-3 py-1 rounded bg-[#3a8b57] text-white font-bold disabled:opacity-50">
              +
            </button>
          </div>

          {/* Category dropdown */}
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="rounded border border-gray-300 px-2 py-2 focus:outline-none focus:ring-2 focus:ring-[#3a8b57] text-black">
            
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

        {/* Submit button */}
        <button
          type="submit"
          className="bg-[#3a8b57] text-white font-bold py-2 rounded hover:bg-[#2e744a] transition">
          +
        </button>
      </form>
    </div>
  );
}
