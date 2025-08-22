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
      <div className="container mx-auto py-10">
        <h1 className="text-2xl font-bold mb-4">Add New Product</h1>
        <AddProductForm />
      </div>
    </div>
  );
}
