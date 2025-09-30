import { Game } from "@/utils/endpoint";

export const ProductCard = ({ image, genre, name, price }: Game) => {
  return (
    <div className="bg-white rounded-2xl border border-gray-300 flex flex-col 
                    h-[436px] w-[327px] md:w-[380px] p-6 gap-5">
      {/* Imagen ocupa todo el ancho del card */}
      <img
        src={image}
        alt={name}
        className="w-full h-[240px] object-cover rounded-t-2xl"
      />

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

        {/* Botón siempre abajo */}
    <button
    className="mt-auto h-[56px] border border-[#3B3B3B] rounded-lg 
                px-6 py-4 flex items-center justify-center gap-2
                text-sm font-bold text-[#3B3B3B] hover:bg-gray-100 transition
                w-[279px] md:w-[332px]"
    >
        ADD TO CART
        </button>

      </div>
    </div>
  );
};
