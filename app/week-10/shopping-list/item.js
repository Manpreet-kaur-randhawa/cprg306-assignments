"use client";

export default function Item({ name, quantity, category, onSelect }) {
  return (
    <div
      onClick={onSelect}
      className="bg-white/10 text-white rounded-md px-3 py-2 cursor-pointer"
    >
      <div className="font-semibold">{name}</div>
      <div className="text-sm text-white/80">
        Buy {quantity} in {category}
      </div>
    </div>
  );
}
