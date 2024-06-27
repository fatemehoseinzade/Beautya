import { createProduct, getAllProducts } from "@/lib/data";
import { TProduct } from "@/types/Product-Type";
import generateUniqueId from "generate-unique-id";
import { NextResponse } from "next/server";

export const GET = async () => {
  try {
    const data = await getAllProducts();
    return NextResponse.json({ data, message: "Ok" }, { status: 200 });
  } catch (err) {
    throw new Error("There is an Error");
  }
};

export const POST = async (req: Request, res: Response) => {
  try {
    const formData = await req.formData();
    const newProduct :TProduct = {
      name: formData.get("name")?.toString() || "",
      description: formData.get("description")?.toString() || "",
      price: formData.get("price")?.toString() || "",
      image: formData.get("image")?.toString() || "",
      slug: formData.get("slug")?.toString() || "",
      _id: "2"
    };

    createProduct({...newProduct});
    return NextResponse.json({ newProduct, message: "Ok" }, { status: 201 });
  } catch (err) {
    return NextResponse.json({ err, message: "Error" }, { status: 500 });
  }
};
