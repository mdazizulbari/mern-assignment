import { Inter, Poppins } from "next/font/google";
import { Toaster } from "react-hot-toast";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"], weight: ["400", "500", "600"] });
const poppins = Poppins({ subsets: ["latin"], weight: ["600", "700"] });

export const metadata = {
  title: "MERN Store",
  description:
    "A modern e-commerce platform built with Next.js and NextAuth.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Load Tailwind via CDN (async, beforeInteractive) */}
        <Script
          src="https://cdn.tailwindcss.com"
          strategy="beforeInteractive"
        />
        <style>{`
          body {
            font-family: 'Inter', sans-serif;
          }
          h1, h2, h3 {
            font-family: 'Poppins', sans-serif;
          }
        `}</style>
      </head>
      <body className={`${inter.className} bg-gray-50`}>
        <div className="min-h-screen flex flex-col">
          {children}
          <Toaster position="top-right"></Toaster>
          <footer className="bg-gray-800 text-white py-6 text-center">
            <div className="max-w-5xl mx-auto">
              <p className="text-sm">
                &copy; 2025 MERN Store. All rights reserved.
              </p>
              <div className="mt-4 flex justify-center space-x-4">
                <a href="#" className="hover:text-blue-300">
                  About
                </a>
                <a href="#" className="hover:text-blue-300">
                  Contact
                </a>
                <a href="#" className="hover:text-blue-300">
                  Privacy
                </a>
              </div>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
