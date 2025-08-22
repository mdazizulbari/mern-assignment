import Navbar from '../../components/Navbar';
import Link from 'next/link';

async function getProducts() {
  const res = await fetch('http://localhost:3000/api/products', { cache: 'no-store' });
  return res.json();
}

export default async function Products() {
  const products = await getProducts();

  return (
    <div>
      <Navbar />
      <div className="max-w-5xl mx-auto py-12">
        <h1 className="text-3xl font-bold mb-8 text-center">Our Products</h1>
        <div className="grid grid-cols-3 gap-6">
          {products.map((product) => (
            <div key={product.id} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition transform hover:scale-105">
              <img src={product.image} alt={product.name} className="w-full h-48 object-cover rounded-lg mb-4" />
              <h2 className="text-xl font-semibold">{product.name}</h2>
              <p className="text-gray-600">{product.description}</p>
              <p className="font-bold text-gray-800">${product.price}</p>
              <p className="text-sm text-gray-500">Category: {product.category}</p>
              <p className="text-sm text-yellow-500">{'★'.repeat(Math.round(product.rating))} ({product.rating})</p>
              <Link href={`/products/${product.id}`} className="text-blue-500 hover:underline font-semibold mt-2 inline-block">
                View Details
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}