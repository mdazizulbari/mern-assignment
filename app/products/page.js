"use client";

import { Suspense } from "react";
import Navbar from "../../components/Navbar";
import Link from "next/link";
import Image from "next/image";
import products from "../../public/data/products.json";
import { toast, Toaster } from "react-hot-toast";

function ProductsContent() {
  return (
    <div>
      <Navbar />
      <Toaster position="top-right" />
      <div className="max-w-5xl mx-auto py-12">
        <h1 className="text-3xl font-bold mb-8 text-center">Our Products</h1>
        <div className="grid grid-cols-3 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition transform hover:scale-105"
            >
              <Image
                src={product.image}
                alt={product.name}
                width={400}
                height={300}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h2 className="text-xl font-semibold">{product.name}</h2>
              <p className="text-gray-600">{product.description}</p>
              <p className="font-bold text-gray-800">${product.price}</p>
              <p className="text-sm text-gray-500">
                Category: {product.category}
              </p>
              <p className="text-sm text-yellow-500">
                {"★".repeat(Math.round(product.rating))} ({product.rating})
              </p>
              <Link
                href={`/products/${product.id}`}
                className="text-blue-500 hover:underline font-semibold mt-2 inline-block"
                onClick={() => toast.success(`Viewing ${product.name}`)}
              >
                View Details
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function ProductsPage() {
  return (
    <Suspense fallback={<p className="text-center py-10">Loading...</p>}>
      <ProductsContent />
    </Suspense>
  );
}
