import { readFileSync } from "fs";
import { join } from "path";

export async function GET(request, { params }) {
  const filePath = join(process.cwd(), "data", "products.json");
  const data = JSON.parse(readFileSync(filePath, "utf-8"));
  const product = data.find((p) => p.id === parseInt(params.id));
  if (!product) {
    return new Response("Product not found", { status: 404 });
  }
  return new Response(JSON.stringify(product), {
    headers: { "Content-Type": "application/json" },
  });
}
