import Link from "next/link";
import { CartIcon } from "./icons/CartIcon";

export const Header = () => {
  return (
    <header className="w-full h-16 bg-background-secondary flex items-center justify-between px-6 lg:px-[16rem]">
      {/* Logo → / */}
      <Link href="/" aria-label="Go to Home">
        <div className="text-[#585660] font-bold text-2xl">GamerShop</div>
      </Link>

      {/* Cart → /cart */}
      <Link href="/cart" aria-label="Go to Cart" className="p-2">
        <CartIcon />
      </Link>
    </header>
  );
};
