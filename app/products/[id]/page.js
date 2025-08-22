import Navbar from '../../../components/Navbar';

async function getProduct(id) {
  const res = await fetch(`http://localhost:3000/api/products/${id}`, { cache: 'no-store' });
  if (!res.ok) {
    return null;
  }
  return res.json();
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
            <img src={product.image} alt={product.name} className="w-1/2 h-96 object-cover rounded-lg" />
            <div className="w-1/2">
              <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
              <p className="text-gray-600 mb-4">{product.description}</p>
              <p className="font-bold text-2xl text-gray-800 mb-2">${product.price}</p>
              <p className="text-sm text-gray-500 mb-2">Category: {product.category}</p>
              <p className="text-sm text-yellow-500 mb-4">{'★'.repeat(Math.round(product.rating))} ({product.rating})</p>
              <button className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition transform hover:scale-105">
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}