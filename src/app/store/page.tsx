import React from "react";
import { getProductByCategory } from "@/lib/data";
import { TCategory, TProduct } from "@/types/Product-Type";
import Card from "@/components/Card";
import Image from "next/image";

const Store = async ({
  searchParams,
}: {
  searchParams: { slug: TCategory };
}) => {
  const category = searchParams.slug;
  const data: TProduct[] = await getProductByCategory(category);

  return (
    <div className="container py-5">
      <h1 className="ms-5 text-2xl font-bold mb-2">
        {category || "Store"}{" "}
        <span className="text-base font-medium">({data.length} items)</span>
      </h1>
      <div className="flex flex-row py-4s h-full">
        <div className="hidden lg:w-1/5 relative left-0">
          <Image
            alt=""
            src="/images/banner.png"
            width={"0"}
            height={"0"}
            sizes="100vw"
            className="w-full h-96 object-contain mb-4"
          />
          <Image
            alt=""
            src="/images/banner_3.png"
            width={"0"}
            height={"0"}
            sizes="100vw"
            className="w-full h-96 object-contain"
          />
        </div>
        {data?.length === 0 ? (
          <div className="flex w-full lg:w-4/5 h-full bg-pink-300 justify-center align-middle py-2">
            <h2 className="text-xl font-bold">
              There is no item in
              <span className="text-2xl text-pink-900">{` ${category} `}</span>
              Category
            </h2>
          </div>
        ) : (
          <div className="w-full lg:w-4/5 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 md:grid-cols-3 md:gap-8 lg:grid-cols-4">
            {data?.map((item) => (
              <Card product={item} key={item._id} />
            ))}

            {/* <div className="col-span-2">
              <Image
                alt=""
                src="/images/banner_2.png"
                width={"0"}
                height={"0"}
                sizes="100vw"
                className="w-full h-96 object-cover"
              />
            </div> */}
          </div>
        )}
      </div>
    </div>
  );
};

export default Store;
