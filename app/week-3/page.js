import ItemList from "./item-list";

export default function Page() {
  return (
    <main className="min-h-screen bg-emerald-950 text-emerald-50">
      <section className="px-8 py-16">
        <h1 className="mb-8 text-4xl font-bold text-emerald-300">
          Shopping List
        </h1>
        <ItemList />
      </section>
    </main>
  );
}



