import Card from "@/components/Card";
import CategoryCard from "@/components/CategoryCard";
import GridWrapper from "@/components/GridWrapper";
import Navbar from "@/layout/Navbar";
import { getBestSellers, getCategories } from "@/lib/data";
import { ICategory, TProduct } from "@/types/Product-Type";
import Image from "next/image";

export default async function Home() {
  const categories: ICategory[] = await getCategories();
  const bestSellers : TProduct[] = await getBestSellers()

  return (
    <div className="">
      <div className="main relative w-full p-2">
        <Navbar />
      </div>
      {/*  Categories */}
      <div className="p-10 lg:px-40 ">
        <h1 className="text-xl font-bold pb-5 text-center">
          Product Categories
        </h1>
        <GridWrapper classes="w-full mx-auto">
          {categories?.map((item) => (
            <CategoryCard category={item} key={item._id} />
          ))}
        </GridWrapper>
      </div>
      {/*  Baner */}
      <div className="w-full lg:h-64 bg-pink-900 grid grid-cols-1 lg:grid-cols-2 ">
        <div className="flex flex-col text-white p-20">
          <h1 className="font-bold text-xl pb-4">
            NEW Virtual Skincare Analysis
          </h1>
          <p className="text-sm font-light">
            Looking for a full skincare routine? Our NEW Virtual Skincare
            Analysis Tool evaluates your skin and provides the most personalized
            recommendations.
          </p>
        </div>
        <Image
          alt=""
          src="/images/image 10.png"
          width="0"
          height="0"
          sizes="100vw"
          className="w-full h-64 object-cover"
        />
      </div>
      <div className="p-10 lg:px-40">
        <h1 className="text-xl font-bold pb-5 text-center">Best Sellers</h1>
        <GridWrapper classes="w-full">
          {bestSellers?.map(item => (
            <Card product={item} key={item._id}/>
          ))}
          
        </GridWrapper>
      </div>
      <div>
        <Image
          alt="contact"
          src="/images/value proposition.png"
          width="0"
          height="0"
          sizes="100vw"
          className="w-full"
        />
      </div>
    </div>
  );
}
