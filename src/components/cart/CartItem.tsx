"use client";

import { Game } from "@/utils/endpoint";
import Image from "next/image";
import CloseIcon from "../icons/CloseIcon";
import { useCart } from "@/app/context/CartContext";

interface CartItemProps extends Game {}

export const CartItem = ({ id, genre, name, description, price, image }: CartItemProps) => {
  const { remove } = useCart();

  return (
    <div
      className="
        relative bg-white border-b border-[#8F8F8F]/50 last:border-b-0
        w-[327px] h-[332px] px-4 py-5 flex flex-col gap-4
        md:w-[678px] md:h-[196px] md:flex-row md:gap-6
      "
    >
      {/* Top: Image + Close */}
      <div className="w-[295px] h-[136px] flex gap-3">
        {/* Imagen */}
        <div className="w-[259px] h-[136px] bg-white flex items-center justify-center md:w-[256px] md:h-[156px]">
          <Image
            src={image}
            alt={name}
            width={259}
            height={136}
            className="object-cover w-full h-full"
          />
        </div>

        {/* Botón eliminar */}
        <button
          onClick={() => remove(id)} // 👈 ahora elimina del carrito
          className="absolute top-4 right-4 w-6 h-6 p-1 flex items-center justify-center z-10"
          aria-label="Remove item"
        >
          <CloseIcon size={12} />
        </button>
      </div>

      {/* Bottom: Product info */}
      <div className="w-[295px] h-[140px] flex flex-col justify-between gap-6">
        {/* Genre, title, description */}
        <div className="flex flex-col gap-3 w-full h-[76px]">
          <span className="font-archivo font-bold text-[14px] leading-[16px] text-[#737373]">
            {genre}
          </span>
          <div className="flex flex-col gap-2">
            <h2 className="font-archivo font-bold text-[18px] leading-[20px] tracking-[0.4px] text-[#3B3B3B]">
              {name}
            </h2>
            <p className="font-archivo font-normal text-[14px] leading-[18px] text-[#737373] truncate">
              {description}
            </p>
          </div>
        </div>

        {/* Price */}
        <div className="flex justify-end w-full h-[40px]">
          <span className="w-[44px] h-[20px] font-archivo font-bold text-[18px] leading-[20px] tracking-[0.4px] text-center text-[#3B3B3B]">
            ${price.toFixed(2)}
          </span>
        </div>
      </div>
    </div>
  );
};
