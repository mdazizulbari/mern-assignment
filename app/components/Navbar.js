import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between">
        <h1 className="text-xl font-bold">MERN App</h1>
        <div>
          <Link href="/" className="px-4 hover:underline">
            Home
          </Link>
          <Link href="/products" className="px-4 hover:underline">
            Products
          </Link>
          <Link href="/login" className="px-4 hover:underline">
            Login
          </Link>
        </div>
      </div>
    </nav>
  );
}
