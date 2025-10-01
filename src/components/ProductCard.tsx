"use client";

import { Game } from "@/utils/endpoint";
import { useCart } from "@/hooks/useCart";

export const ProductCard = ({ id, image, genre, name, price, description, isNew }: Game) => {
  const { inCart, toggle } = useCart();

  return (
    <div
      className="
        bg-white rounded-2xl border border-gray-300 flex flex-col 
        h-[436px] w-[327px] md:w-[380px] p-6 gap-5
      "
    >
      {/* Imagen */}
      <div className="relative w-full h-[240px]">
        <img
          src={image}
          alt={name}
          className="w-full h-[240px] object-cover rounded-t-2xl"
        />
        {isNew && (
          <span className="absolute top-2 left-2 bg-black/80 text-white text-xs px-2 py-1 rounded">
            NEW
          </span>
        )}
      </div>

      {/* Contenido */}
      <div className="flex flex-col flex-1">
        {/* Genre */}
        <span className="text-sm font-bold text-gray-500 uppercase tracking-wide">
          {genre}
        </span>

        {/* Nombre + Precio */}
        <div className="flex justify-between items-center gap-2 mt-2">
          <h3 className="text-lg font-bold text-gray-800 truncate max-w-[70%]">
            {name}
          </h3>
          <span className="text-base font-semibold text-primary whitespace-nowrap">
            ${price}
          </span>
        </div>

        {/* Botón dinámico */}
        <button
          onClick={() =>
            toggle({ id, image, genre, name, price, description, isNew })
          }
          className={`
            mt-auto h-[56px] border rounded-lg 
            px-6 py-4 flex items-center justify-center gap-2
            text-sm font-bold transition w-[279px] md:w-[332px]
            ${
              inCart(id)
                ? "border-red-500 text-red-700 bg-red-50 hover:bg-red-100"
                : "border-[#3B3B3B] text-[#3B3B3B] hover:bg-gray-100"
            }
          `}
        >
          {inCart(id) ? "REMOVE" : "ADD TO CART"}
        </button>
      </div>
    </div>
  );
};
