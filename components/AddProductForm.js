'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function AddProductForm() {
  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState(null);
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const formData = new FormData(e.target);
    const product = {
      name: formData.get('name'),
      description: formData.get('description'),
      price: parseFloat(formData.get('price')),
      category: formData.get('category'),
      rating: parseFloat(formData.get('rating')),
      image: formData.get('image'),
    };

    const res = await fetch('/api/products', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(product),
    });

    setLoading(false);
    if (res.ok) {
      setToast('Product added successfully!');
      e.target.reset();
      setTimeout(() => router.push('/products'), 2000);
    } else {
      setToast('Failed to add product.');
    }
  };

  return (
    <div className="relative">
      {toast && (
        <div className="fixed top-4 right-4 bg-green-500 text-white p-4 rounded-lg shadow-lg">
          {toast}
        </div>
      )}
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded-xl shadow-lg max-w-md mx-auto">
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Name</label>
          <input
            type="text"
            name="name"
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Description</label>
          <textarea
            name="description"
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
            required
          ></textarea>
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Price</label>
          <input
            type="number"
            name="price"
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Category</label>
          <select
            name="category"
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
            required
          >
            <option value="Electronics">Electronics</option>
            <option value="Accessories">Accessories</option>
          </select>
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Rating (1-5)</label>
          <input
            type="number"
            name="rating"
            min="1"
            max="5"
            step="0.1"
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Image URL</label>
          <input
            type="url"
            name="image"
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600 transition transform hover:scale-105"
          disabled={loading}
        >
          {loading ? 'Adding...' : 'Add Product'}
        </button>
      </form>
    </div>
  );
}