import Navbar from "../components/Navbar";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Navbar />
      <section
        className="bg-blue-500 text-white py-20 text-center bg-cover bg-center"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1600585154340-be6161a56a0c)",
        }}
      >
        <div className="max-w-5xl mx-auto">
          <h1 className="text-5xl font-bold mb-4">Welcome to MERN Store</h1>
          <p className="text-lg mb-6">
            Discover premium electronics and accessories.
          </p>
          <Link
            href="/products"
            className="bg-white text-blue-500 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition transform hover:scale-105"
          >
            Shop Now
          </Link>
        </div>
      </section>
      <section className="max-w-5xl mx-auto py-12">
        <h2 className="text-3xl font-bold mb-8 text-center">
          Product Highlights
        </h2>
        <div className="grid grid-cols-3 gap-6">
          {[
            {
              name: "Laptop",
              image:
                "https://images.unsplash.com/photo-1516321318423-f06f85e504b3",
              price: 999,
            },
            {
              name: "Phone",
              image:
                "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
              price: 699,
            },
            {
              name: "Headphones",
              image:
                "https://images.unsplash.com/photo-1496957961599-e35b69ef5d7c?q=80&w=1472&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
              price: 199,
            },
          ].map((product, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition transform hover:scale-105"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold">{product.name}</h3>
              <p className="font-bold text-gray-800">${product.price}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
