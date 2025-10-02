"use client";

import { useCart } from "@/app/context/CartContext";
import { RowItem } from "@/components/cart/RowItem";

export const OrderSummary = () => {
  const { items } = useCart();

  const total = items.reduce((acc, g) => acc + g.price, 0);

  return (
    <div
      className="
        w-[327px] md:w-[522px] 
        flex flex-col gap-8
      "
    >
      {/* ml-product-card bag */}
      <div
        className="
          w-[327px] md:w-[522px] 
          rounded-lg border border-[#8F8F8F]/50 bg-white 
          px-4 py-6 md:px-6 md:py-8 
          flex flex-col gap-6 md:gap-8
        "
      >
        {/* Title + items number */}
        <div className="flex flex-col gap-2 md:gap-3">
          <h2
            className="
              font-archivo font-bold text-[20px] leading-[24px] tracking-[0.4px] text-[#3B3B3B]
              md:text-[24px] md:leading-[28px]
            "
          >
            Order Summary
          </h2>
          <span
            className="
              font-archivo font-normal text-[16px] leading-[20px] tracking-[0.4px] text-[#3B3B3B]
              md:text-[18px] md:leading-[24px]
            "
          >
            {items.length} {items.length === 1 ? "item" : "items"}
          </span>
        </div>

        {/* Total Detail */}
        <div className="flex flex-col gap-5 md:gap-6 py-4 md:py-5">
          {/* Detail rows */}
          <div className="flex flex-col gap-2 md:gap-3">
            {items.map((game) => (
              <RowItem key={game.id} name={game.name} price={game.price} />
            ))}
          </div>

          {/* Separator */}
          <div className="border border-[#8F8F8F]/50 opacity-50" />

          {/* Total */}
          <div className="flex justify-between items-center">
            <span
              className="
                font-archivo font-bold text-[16px] leading-[20px] tracking-[0.4px] text-[#3B3B3B]
                md:text-[18px] md:leading-[24px]
              "
            >
              Order Total
            </span>
            <span
              className="
                font-archivo font-bold text-[16px] leading-[20px] tracking-[0.4px] text-[#3B3B3B]
                md:text-[18px] md:leading-[24px]
              "
            >
              ${total.toFixed(2)}
            </span>
          </div>
        </div>
      </div>

      {/* Checkout button */}
      <button
        className="
          w-[327px] h-[48px] md:w-[522px] md:h-[56px]
          rounded-lg bg-[#585660] flex items-center justify-center
        "
      >
        <span
          className="
            font-archivo font-bold text-[14px] leading-[16px] tracking-[0.5px] text-white
            md:text-[16px]
          "
        >
          Checkout
        </span>
      </button>
    </div>
  );
};
