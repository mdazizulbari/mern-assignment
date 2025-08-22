'use client';

import { signIn } from 'next-auth/react';

export default function Login() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="bg-white p-8 rounded-xl shadow-lg max-w-md w-full">
        <h1 className="text-3xl font-bold mb-6 text-center">Sign In</h1>
        <button
          onClick={() => signIn('google')}
          className="w-full bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition transform hover:scale-105"
        >
          Sign in with Google
        </button>
      </div>
    </div>
  );
}