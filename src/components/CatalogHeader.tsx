"use client";

import { useState } from "react";

export const CatalogHeader = () => {
  const [genre, setGenre] = useState("all");

  return (
    <div className="w-full border-b border-[#EFEDF3] px-6 lg:px-64 py-6 lg:py-12 flex flex-col justify-between h-[180px] lg:h-[240px]">
      {/* Top Sellers */}
      <h2 className="font-archivo font-bold text-[24px] lg:text-[36px] leading-[28px] lg:leading-[40px] tracking-[0.4px] text-[#3B3B3B]">
        Top Sellers
      </h2>

      {/* Genre + Dropdown */}
      <div className="flex items-center gap-4 lg:gap-6 h-10 lg:h-14 self-start lg:self-end">
        <span className="font-archivo font-bold text-[16px] lg:text-[20px] leading-5 lg:leading-6 tracking-[0.4px] text-[#3B3B3B]">
          Genre
        </span>
        <span className="w-px h-5 lg:h-6 bg-[#3B3B3B]" />
        <select
          className="h-10 lg:h-14 w-[160px] lg:w-[237px] border border-[#3B3B3B] rounded px-2 lg:px-4 text-[#3B3B3B] font-archivo"
          value={genre}
          onChange={(e) => setGenre(e.target.value)}
        >
          <option value="all">All</option>
          <option value="action">Action</option>
          <option value="rpg">RPG</option>
          <option value="shooter">Shooter</option>
        </select>
      </div>
    </div>
  );
};
