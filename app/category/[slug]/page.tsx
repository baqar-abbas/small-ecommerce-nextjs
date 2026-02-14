import ProductCard from "@/app/components/ProductCard";
import Link from "next/link";

interface CategoryPageProps {
  params: Promise<{ slug: string }>;
}

async function getProductsByCategory(category: string) {
  const res = await fetch(
    `https://dummyjson.com/products/category/${category}`,
  );
  if (!res.ok) {
    throw new Error("Failed to fetch category products");
  }
  return res.json();
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { slug } = await params;
  const data = await getProductsByCategory(slug);
  const categoryName = slug.replace("-", " "); // Simple formatting

  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4 capitalize">{categoryName}</h1>
      <p className="text-gray-600 mb-8">
        {data.products.length} products found
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {data.products.map((product: any) => (
          <Link href={`/product/${product.id}`} key={product.id}>
            <ProductCard product={product} />
          </Link>
        ))}
      </div>
    </main>
  );
}
