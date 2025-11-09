"use client";

export default function Item({ name, quantity, category }) {
  return (
    <div className="bg-white/10 text-white rounded-md px-3 py-2">
      <div className="font-semibold">{name}</div>
      <div className="text-sm text-white/80">
        Buy {quantity} in <span className="capitalize">{category}</span>
      </div>
    </div>
  );
}

