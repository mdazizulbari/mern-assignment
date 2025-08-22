import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <div>
      <Navbar />
      <section className="bg-blue-500 text-white py-20 text-center">
        <h1 className="text-4xl font-bold mb-4">Welcome to Our Store</h1>
        <p className="text-lg">Discover amazing products!</p>
      </section>
      <section className="container mx-auto py-10">
        <h2 className="text-2xl font-bold mb-4">Product Highlights</h2>
        <div className="grid grid-cols-3 gap-4">
          <div className="bg-gray-100 p-4 rounded">Product 1</div>
          <div className="bg-gray-100 p-4 rounded">Product 2</div>
          <div className="bg-gray-100 p-4 rounded">Product 3</div>
        </div>
      </section>
      <footer className="bg-gray-800 text-white p-4 text-center">
        <p>&copy; 2025 MERN App. All rights reserved.</p>
      </footer>
    </div>
  );
}
