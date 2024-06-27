import { deleteRecipe, editRecipe, getARecipe } from "@/lib/data";
import { NextResponse } from "next/server";


export const GET = async (req: Request, res: Response) => {
    console.log(req.url)
    const id = req.url.split("recipe/")[1];
    console.log(id)
    try {
      const data= getARecipe(id);
      return NextResponse.json({ data, message: "Ok" }, { status: 200 });
    } catch (err) {
      return NextResponse.json({ err, message: "Error" }, { status: 500 });
    }
  };
export const DELETE = async (req: Request, res: Response) => {
    const id = req.url.split("recipe/")[1];
    try {
      deleteRecipe(id);
      return NextResponse.json({ message: "Ok" }, { status: 200 });
    } catch (err) {
      return NextResponse.json({ err, message: "Error" }, { status: 500 });
    }
  };
  
  export const PUT = async (req: Request, res: Response) => {
    const id = req.url.split("recipe/")[1];
    const { label, description } = await req.json();
    try {
      editRecipe(id, label, description);
      return NextResponse.json({ message: "Ok" }, { status: 201 });
    } catch (err) {
      return NextResponse.json({ err, message: "Error" }, { status: 500 });
    }
  };
  