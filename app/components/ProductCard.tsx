import Image from "next/image";
import { Star } from "lucide-react";

interface ProductCardProps {
  product: {
    id: number;
    title: string;
    price: number;
    discountPercentage: number;
    thumbnail: string;
  };
}

export default function ProductCard({ product }: ProductCardProps) {
  const discountedPrice = (
    product.price *
    (1 - product.discountPercentage / 100)
  ).toFixed(2);

  return (
    <div className="border rounded-lg p-4 hover:shadow-lg transition-shadow bg-white">
      <div className="relative w-full h-48 mb-4">
        <Image
          src={product.thumbnail}
          alt={product.title}
          fill
          className="object-contain"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
        />
      </div>
      <h2 className="font-semibold text-lg mb-2 line-clamp-1">
        {product.title}
      </h2>
      <div className="flex items-center justify-between">
        <div>
          <span className="text-gray-500 line-through text-sm mr-2">
            ${product.price}
          </span>
          <span className="font-bold text-green-600">${discountedPrice}</span>
        </div>
        <button className="bg-blue-500 text-white p-2 rounded-full hover:bg-blue-600 transition">
          <Star size={16} />
        </button>
      </div>
    </div>
  );
}
