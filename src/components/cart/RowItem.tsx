// components/cart/RowItem.tsx
interface RowItemProps {
  name: string;
  price: number;
}

export const RowItem = ({ name, price }: RowItemProps) => {
  return (
    <div
      className="
        w-[295px] h-[24px] flex justify-between items-center
        md:w-[474px]
      "
    >
      {/* Nombre del producto */}
      <span
        className="
          w-[180px] h-[24px] font-archivo font-normal 
          text-[16px] leading-[20px] tracking-[0.4px] text-[#3B3B3B] truncate
          md:w-[121px] md:text-[18px] md:leading-[24px]
        "
        title={name} // tooltip para nombre largo
      >
        {name}
      </span>

      {/* Precio */}
      <span
        className="
          w-[62px] h-[24px] font-archivo font-normal 
          text-[16px] leading-[20px] tracking-[0.4px] text-right text-[#3B3B3B]
          md:text-[18px] md:leading-[24px]
        "
      >
        ${price.toFixed(2)}
      </span>
    </div>
  );
};
