import Navbar from "../../components/Navbar";
import Link from "next/link";

async function getProducts() {
  const res = await fetch("http://localhost:3000/api/products", {
    cache: "no-store",
  });
  return res.json();
}

export default async function Products() {
  const products = await getProducts();

  return (
    <div>
      <Navbar />
      <div className="container mx-auto py-10">
        <h1 className="text-2xl font-bold mb-4">Products</h1>
        <div className="grid grid-cols-3 gap-4">
          {products.map((product) => (
            <div key={product.id} className="bg-gray-100 p-4 rounded">
              <h2 className="text-xl font-semibold">{product.name}</h2>
              <p>{product.description}</p>
              <p className="font-bold">${product.price}</p>
              <Link
                href={`/products/${product.id}`}
                className="text-blue-500 hover:underline"
              >
                Details
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
