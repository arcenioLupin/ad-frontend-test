import { CatalogHeader } from "@/components/CatalogHeader";
import { ProductCard } from "@/components/ProductCard";
import { allGames } from "@/utils/endpoint";

export default function Home() {
  return (
    <main>
      <CatalogHeader />

    <section
      className="
        w-full 
        mx-auto 
        px-6 sm:px-6 lg:px-20 
        pt-8 sm:pt-12 pb-8 sm:pb-12
        max-w-[375px] lg:max-w-[1536px]
      "
    >
       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {allGames.slice(0, 9).map((game) => (
          <ProductCard key={game.id} {...game} />
        ))}
        </div>
                {/* Botón See more */}
        <div className="mt-8 sm:mt-1 lg:mt-10 flex justify-start">
          <button
            className="
              bg-[#585660] text-white font-bold
              rounded-lg
              w-[327px] h-12        /* Mobile */
              md:w-[137px] md:h-14  /* Desktop */
              px-6
            "
          >
            SEE MORE
          </button>
        </div>
      </section>
    </main>
  );
}
