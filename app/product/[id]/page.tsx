import Image from "next/image";
import { notFound } from "next/navigation";
import AddToCartButton from "@/app/components/AddToCartButton";

interface ProductPageProps {
  params: Promise<{ id: string }>;
}

async function getProduct(id: string) {
  const res = await fetch(`https://dummyjson.com/products/${id}`);
  if (!res.ok) {
    return null;
  }
  return res.json();
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { id } = await params;
  const product = await getProduct(id);

  if (!product) {
    notFound(); // Shows the closest not-found page
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid md:grid-cols-2 gap-8">
        {/* Image Gallery */}
        <div>
          <div className="relative w-full h-96 mb-4">
            <Image
              src={product.thumbnail}
              alt={product.title}
              fill
              className="object-contain"
              priority
            />
          </div>
          <div className="grid grid-cols-4 gap-2">
            {product.images?.map((img: string, index: number) => (
              <div key={index} className="relative w-full h-24 border rounded">
                <Image
                  src={img}
                  alt={`${product.title} ${index + 1}`}
                  fill
                  className="object-contain"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Product Info */}
        <div>
          <h1 className="text-3xl font-bold mb-4">{product.title}</h1>
          <p className="text-gray-600 mb-4">{product.description}</p>

          <div className="mb-4">
            <span className="text-2xl font-bold text-green-600">
              $
              {(product.price * (1 - product.discountPercentage / 100)).toFixed(
                2,
              )}
            </span>
            <span className="text-gray-500 line-through ml-2">
              ${product.price}
            </span>
            <span className="ml-2 text-sm bg-red-100 text-red-800 px-2 py-1 rounded">
              {product.discountPercentage}% OFF
            </span>
          </div>

          <div className="mb-6">
            <p>
              <strong>Brand:</strong> {product.brand}
            </p>
            <p>
              <strong>Category:</strong> {product.category}
            </p>
            <p>
              <strong>In Stock:</strong> {product.stock}
            </p>
            <p>
              <strong>Rating:</strong> ⭐ {product.rating}
            </p>
          </div>

          <AddToCartButton product={product} />
        </div>
      </div>
    </div>
  );
}
