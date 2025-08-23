# MERN Assignment

A simple Next.js 15 application with authentication and product management features, built as part of the Programming Hero MERN Stack Development Bootcamp.

## Project Description

This app includes a landing page, a public product list, product details pages, and a protected page for adding products. Authentication is handled via NextAuth.js with Google login. Data is stored in a mock JSON file, and the app uses Tailwind CSS for styling.

## Setup & Installation Instructions

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/mdazizulbari/mern-assignment.git
   cd mern-assignment
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```

3. **Set Up Environment Variables**:
   Create a `.env.local` file in the root directory and add:
   ```
   NEXTAUTH_URL=http://localhost:3000
   NEXTAUTH_SECRET=your-secret-key
   GOOGLE_CLIENT_ID=your-google-client-id
   GOOGLE_CLIENT_SECRET=your-google-client-secret
   ```
   - Generate a secret key using `openssl rand -base64 32`.
   - Obtain Google Client ID and Secret from https://console.cloud.google.com/.

4. **Run the Development Server**:
   ```bash
   npm run dev
   ```
   Open `http://localhost:3000` in your browser.

## Route Summary

- **/**: Landing page with Navbar, Hero, Product Highlights, and Footer.
- **/login**: Login page with Google authentication.
- **/products**: Public page listing all products.
- **/products/[id]**: Public page showing details of a single product.
- **/dashboard/add-product**: Protected page for adding new products (requires login).

## Live Site

[Live Demo](https://mern-assignment-six.vercel.app/)