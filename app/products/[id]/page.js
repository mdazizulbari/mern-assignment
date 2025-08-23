import Navbar from "../../../components/Navbar";
import Image from "next/image";

// ✅ Fetch all products from public/data/products.json
async function getProduct(id) {
  // Use absolute URL for server-side fetch
  const res = await fetch(`${process.env.NEXTAUTH_URL}/data/products.json`, {
    cache: "no-store",
  });

  if (!res.ok) return null;

  const products = await res.json();
  return products.find((p) => String(p.id) === String(id)) || null;
}

export default async function ProductDetails({ params }) {
  const product = await getProduct(params.id);

  if (!product) {
    return (
      <div>
        <Navbar />
        <div className="max-w-5xl mx-auto py-12">
          <h1 className="text-3xl font-bold text-center">Product Not Found</h1>
        </div>
      </div>
    );
  }

  return (
    <div>
      <Navbar />
      <div className="max-w-5xl mx-auto py-12">
        <div className="bg-white p-8 rounded-xl shadow-lg">
          <div className="flex gap-8">
            {/* ✅ Next.js Image */}
            <div className="w-1/2 h-96 relative">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover rounded-lg"
                priority
              />
            </div>

            <div className="w-1/2">
              <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
              <p className="text-gray-600 mb-4">{product.description}</p>
              <p className="font-bold text-2xl text-gray-800 mb-2">
                ${product.price}
              </p>
              <p className="text-sm text-gray-500 mb-2">
                Category: {product.category}
              </p>
              <p className="text-sm text-yellow-500 mb-4">
                {"★".repeat(Math.round(product.rating))} ({product.rating})
              </p>
              {/* <button className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition transform hover:scale-105">
                Add to Cart
              </button> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
