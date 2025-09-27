"use client";

import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="flex items-center justify-center py-4 border-t">
      <Link href="/" className="text-sm text-gray-600">
        Apply Digital © {new Date().getFullYear()}
      </Link>
    </footer>
  );
};
