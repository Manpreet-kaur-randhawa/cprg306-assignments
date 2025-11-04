import ItemList from "./item-list";

export default function Page() {
  return (
    <main className="min-h-screen bg-[#0b1d0b] px-4 py-6">
      <h1 className="text-3xl font-bold text-white mb-4">Shopping List</h1>
      <div className="max-w-2xl">
        <ItemList />
      </div>
    </main>
  );
}
