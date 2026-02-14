import Link from "next/link";
import ProductCard from "@/app/components/ProductCard";

// Define a TypeScript type for the product (based on API)
interface Product {
  id: number;
  title: string;
  description: string;
  category: string;
  price: number;
  discountPercentage: number;
  thumbnail: string;
}

async function getProducts(): Promise<{ products: Product[] }> {
  // Next.js automatically caches fetch requests by default (good for performance)
  const res = await fetch("https://dummyjson.com/products?limit=30");
  if (!res.ok) {
    throw new Error("Failed to fetch products");
  }
  return res.json();
}

export default async function Home() {
  const data = await getProducts();

  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">All Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {data.products.map((product) => (
          <Link href={`/product/${product.id}`} key={product.id}>
            <ProductCard product={product} />
          </Link>
        ))}
      </div>
    </main>
  );
}
