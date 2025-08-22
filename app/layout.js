export const metadata = {
  title: "MERN Store",
  description:
    "A modern e-commerce platform built with Next.js and NextAuth.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Poppins:wght@600;700&display=swap"
          rel="stylesheet"
        />
        <script src="https://cdn.tailwindcss.com"></script>
        <style>{`
          body {
            font-family: 'Inter', sans-serif;
          }
          h1, h2, h3 {
            font-family: 'Poppins', sans-serif;
          }
        `}</style>
      </head>
      <body className="bg-gray-50">
        <div className="min-h-screen flex flex-col">
          {children}
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
