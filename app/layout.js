export const metadata = {
  title: "MERN Assignment",
  description:
    "A simple Next.js app with authentication and product management",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script src="https://cdn.tailwindcss.com"></script>
      </head>
      <body>{children}</body>
    </html>
  );
}
