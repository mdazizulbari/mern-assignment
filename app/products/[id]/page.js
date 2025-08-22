import Navbar from "../../../components/Navbar";

async function getProduct(id) {
  const res = await fetch(`http://localhost:3000/api/products/${id}`, {
    cache: "no-store",
  });
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
        <div className="container mx-auto py-10">
          <h1 className="text-2xl font-bold">Product Not Found</h1>
        </div>
      </div>
    );
  }

  return (
    <div>
      <Navbar />
      <div className="container mx-auto py-10">
        <h1 className="text-2xl font-bold">{product.name}</h1>
        <p>{product.description}</p>
        <p className="font-bold">${product.price}</p>
      </div>
    </div>
  );
}
