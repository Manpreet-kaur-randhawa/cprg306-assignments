export default function Item({ name, quantity, category }) {
  return (
    <li className="flex items-center justify-between rounded-lg border border-emerald-200 bg-emerald-50 p-4 shadow-sm">
      <div>
        <p className="font-semibold text-emerald-900">{name}</p>
        <p className="text-sm text-emerald-700">
          Buy {quantity} in {category}
        </p>
      </div>
    </li>
  );
}
