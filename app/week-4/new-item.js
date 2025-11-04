"use client";

import { useState } from "react";

export default function NewItem() {
  const [quantity, setQuantity] = useState(1);

  function increment() {
    if (quantity < 20) setQuantity(quantity + 1);
  }

  function decrement() {
    if (quantity > 1) setQuantity(quantity - 1);
  }

  return (
    // full-screen background //
    <div className="flex flex-col items-center min-h-screen bg-[#0b1d0b]">
      {/* it pushes the box near the top */}
      <div className="mt-6 flex items-center bg-white rounded-md shadow-md px-3 py-2">
        {/* numbers */}
        <p className="text-lg font-semibold w-6 text-center text-black">
          {quantity}
        </p>

        {/* minus button */}
        <button
          onClick={decrement}
          disabled={quantity === 1}
          className="ml-2 px-3 py-1 rounded bg-[#b5c59c] text-white font-bold disabled:opacity-50"
        >
          −
        </button>

        {/* plus button */}
        <button
          onClick={increment}
          disabled={quantity === 20}
          className="ml-2 px-3 py-1 rounded bg-[#3a8b57] text-white font-bold disabled:opacity-50"
        >
          +
        </button>
      </div>
    </div>
  );
}
