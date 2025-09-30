import { CartIcon } from "./icons/CartIcon";

export const Header = () => {
  return (
    <header className="w-full h-16 bg-background-secondary flex items-center justify-between px-6 lg:px-[16rem]">
      <div className="text-[#585660] font-bold text-2xl">GamerShop</div>
      <button aria-label="Cart" className="p-2">
        <CartIcon />
      </button>
    </header>
  );
};
