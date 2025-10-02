"use client";

import { CartItem } from "@/components/cart/CartItem";
import { OrderSummary } from "@/components/cart/OrderSummary";
import ArrowLeftIcon from "@/components/icons/ArrowLeftIcon";
import { useRouter } from "next/navigation";
import { useCart } from "../context/CartContext";

export default function CartPage() {
  const { items } = useCart();
  const totalItems = items.length;
  const router = useRouter();

  return (
    <main className="w-full min-h-screen flex flex-col">
      {/* Sección Back to Catalog */}
      <section className="w-full h-[56px] md:h-[72px] flex items-center px-6 md:px-32">
        <div
          className="flex items-center gap-2 cursor-pointer ml-0 md:ml-32 w-[146px] h-[24px]"
          onClick={() => router.push("/")}
        >
          {/* Contenedor de la flecha */}
          <div className="w-6 h-6 flex items-center justify-center">
            <ArrowLeftIcon size={16} className="text-[#3B3B3B]" />
          </div>

          {/* Contenedor del texto */}
          <div className="w-[114px] h-4 flex items-center">
            <span className="underline font-archivo font-medium text-base text-[#3B3B3B]">
              Back to Catalog
            </span>
          </div>
        </div>
      </section>

      {/* Sección Your Cart */}
      <section
        className="
          w-full 
          max-w-[375px] mx-auto 
          min-h-[1634px] 
          px-6 py-8 flex flex-col gap-8
          md:max-w-[1536px] md:min-h-[812px] 
          md:px-32 md:py-12 md:gap-12 md:ml-32
        "
      >
        {/* Título + número de items */}
        <div className="w-full max-w-[1280px] flex flex-col gap-3">
          <h1
            className="font-archivo font-bold text-[#3B3B3B] tracking-[0.4px]
                       text-[24px] leading-[28px] md:text-[36px] md:leading-[40px]"
          >
            Your Cart
          </h1>
          <span
            className="font-archivo font-normal text-[#3B3B3B] tracking-[0.4px]
                       text-[20px] leading-[24px] md:text-[24px] md:leading-[28px]"
          >
            {totalItems} {totalItems === 1 ? "Item" : "Items"}
          </span>
        </div>

        {/* Grid base */}
        <div className="w-full max-w-[1280px] grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-12">
          {/* Columna izquierda: productos */}
          <div className="flex flex-col gap-0 md:col-span-2 bg-white">
            {items.map((game) => (
              <CartItem key={game.id} {...game} />
            ))}
          </div>

          {/* Columna derecha: resumen */}
          <aside className="md:col-span-1">
            <OrderSummary />
          </aside>
        </div>
      </section>
    </main>
  );
}
