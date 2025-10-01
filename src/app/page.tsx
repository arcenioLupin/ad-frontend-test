"use client";
import { useRouter, useSearchParams } from "next/navigation";
import { CatalogHeader } from "@/components/CatalogHeader";
import { ProductCard } from "@/components/ProductCard";
import { useCatalog } from "@/hooks/useCatalog";

export default function Home() {
  const router = useRouter();
  const sp = useSearchParams();
  const genre = sp.get("genre") || "";
  const page = Number(sp.get("page") || 1);

  const { list, loading, error, totalPages, availableFilters } = useCatalog(
    genre || undefined,
    page
  );

  const setParam = (next: Record<string, string | number | undefined>) => {
    const params = new URLSearchParams(sp.toString());
    Object.entries(next).forEach(([k, v]) => {
      if (v === undefined || v === "") params.delete(k);
      else params.set(k, String(v));
    });
    router.replace(`?${params.toString()}`);
  };

  const onSeeMore = () => setParam({ page: page + 1 });

  return (
    <main>
      <CatalogHeader availableFilters={availableFilters} />

      <section
        className="
          w-full 
          mx-auto 
          px-6 sm:px-6 lg:px-20 
          pt-8 sm:pt-12 pb-8 sm:pb-12
          max-w-[375px] lg:max-w-[1536px]
        "
      >
        {/* Loading / Error */}
        {loading && (
          <div className="text-center text-gray-500 py-10">Loading…</div>
        )}
        {error && (
          <div className="text-center text-red-500 py-10">
            Error loading games. Try again.
          </div>
        )}

        {/* Grid de juegos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {list.map((game) => (
            <ProductCard key={game.id} {...game} />
          ))}
        </div>

        {/* Botón See more */}
        {
         page < totalPages && !loading && !error && (
          <div className="mt-8 sm:mt-1 lg:mt-10 flex justify-start">
            <button
              onClick={onSeeMore}
              className="
                bg-[#585660] text-white font-bold
                rounded-lg
                w-[327px] h-12
                md:w-[137px] md:h-14
                px-6
              "
            >
              SEE MORE
            </button>
          </div>
        )}
      </section>
    </main>
  );
}
