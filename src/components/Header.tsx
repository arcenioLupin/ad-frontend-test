"use client";

import Link from "next/link";

export const Header = () => {
  return (
    <header className="flex items-center justify-between px-4 py-2 border-b">
      {/* Logo */}
      <Link href="/" className="text-xl font-bold">
        Apply Digital
      </Link>

      {/* Cart */}
      <Link href="/cart" className="relative">
        🛒
      </Link>
    </header>
  );
};
