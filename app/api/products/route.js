import { readFileSync, writeFileSync } from 'fs';
import { join } from 'path';

export async function GET() {
  const filePath = join(process.cwd(), 'data', 'products.json');
  const data = JSON.parse(readFileSync(filePath, 'utf-8'));
  return new Response(JSON.stringify(data), {
    headers: { 'Content-Type': 'application/json' },
  });
}

export async function POST(request) {
  const filePath = join(process.cwd(), 'data', 'products.json');
  const data = JSON.parse(readFileSync(filePath, 'utf-8'));
  const newProduct = await request.json();
  newProduct.id = data.length + 1;
  newProduct.price = parseFloat(newProduct.price);
  newProduct.rating = parseFloat(newProduct.rating);
  data.push(newProduct);
  writeFileSync(filePath, JSON.stringify(data, null, 2));
  return new Response(JSON.stringify(newProduct), {
    status: 201,
    headers: { 'Content-Type': 'application/json' },
  });
}