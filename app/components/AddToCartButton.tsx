"use client";

import { ShoppingCart } from "lucide-react";
import { useCart } from "../context/CartContext";

interface AddToCartButtonProps {
  product: any;
}

export default function AddToCartButton({ product }: AddToCartButtonProps) {
  const { addItem } = useCart();

  return (
    <button
      onClick={() => addItem(product)}
      className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg flex items-center justify-center gap-2 hover:bg-blue-700 transition"
    >
      <ShoppingCart size={20} />
      Add to Cart
    </button>
  );
}
