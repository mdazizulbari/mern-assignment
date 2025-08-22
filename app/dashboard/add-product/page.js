import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import Navbar from "../../../components/Navbar";
import AddProductForm from "../../../components/AddProductForm";
import { authOptions } from "../../api/auth/[...nextauth]/route";

export default async function AddProduct() {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/login");
  }

  return (
    <div>
      <Navbar />
      <div className="max-w-5xl mx-auto py-12">
        <h1 className="text-3xl font-bold mb-8 text-center">Add New Product</h1>
        <AddProductForm />
      </div>
    </div>
  );
}
