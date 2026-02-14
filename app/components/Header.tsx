"use client";

import Link from "next/link";
import { ShoppingCart, Home } from "lucide-react";
import { useCart } from "../context/CartContext";

export default function Header() {
  const { totalItems } = useCart();

  return (
    <header className="bg-white shadow-sm sticky top-0 z-10">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-xl font-bold flex items-center gap-2">
          <Home size={20} />
          ShopHub
        </Link>

        <div className="flex items-center gap-6">
          <Link
            href="/category/beauty"
            className="hover:text-blue-600 transition"
          >
            Beauty
          </Link>
          <Link
            href="/category/fragrances"
            className="hover:text-blue-600 transition"
          >
            Fragrances
          </Link>

          <Link href="/cart" className="relative">
            <ShoppingCart size={24} />
            {totalItems > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                {totalItems}
              </span>
            )}
          </Link>
        </div>
      </nav>
    </header>
  );
}
