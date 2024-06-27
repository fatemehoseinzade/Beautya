import {
  createRecipe,
  deleteRecipe,
  editRecipe,
  getARecipe,
  getAllRecipes,
} from "@/lib/data";
import { NextResponse } from "next/server";
import generateUniqueId from "generate-unique-id";

export const GET = async (req: Request, res: Response) => {
  try {
    const data = getAllRecipes();
    return NextResponse.json({ data, message: "Ok" }, { status: 200 });
  } catch (err) {
    return NextResponse.json({ err, message: "Error" }, { status: 500 });
  }
};

export const POST = async (req: Request, res: Response) => {
  const { label, description } = await req.json();
  try {
    const newRecipe = {
      label,
      description,
      id: generateUniqueId({
        length: 5,
        useLetters: false,
      }),
      date: new Date().toLocaleDateString(),
    };
    createRecipe(newRecipe);
    return NextResponse.json({ newRecipe, message: "Ok" }, { status: 201 });
  } catch (err) {
    return NextResponse.json({ err, message: "Error" }, { status: 500 });
  }
};

