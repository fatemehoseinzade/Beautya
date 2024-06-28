"use client";
import React from "react";
import { ICategory } from "@/types/Product-Type";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface Props {
  category: ICategory;
}

const CategoryCard = ({ category }: Props) => {
  const router = useRouter();
  return (
    <div
      className="flex flex-col w-full"
      onClick={() => router.push(`/store?slug=${category.slug}`)}
    >
      <Image
        alt={category.slug}
        src={category.image}
        width="0"
        height="0"
        sizes="100vw"
        className="w-full object-cover hover:scale-105 cursor-pointer"
      />
      <h1 className="text-center pt-4">{category.name}</h1>
    </div>
  );
};

export default CategoryCard;
