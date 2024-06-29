'use client'
import React from "react";
import Image from "next/image";
import Card from "@/components/Card";
import Button from "@/components/Button";
import { useSelector } from "react-redux";
import { IRootState } from "@/redux/store";

const page = async () => {
  const favorites = useSelector((state : IRootState) => state.favorite.favoriteList)

  return (
    <div className="container py-5">
      <h1 className="ms-5 text-2xl font-bold mb-2">
        {"Favorite List"}{" "}
        <span className="text-base font-medium">
          ({favorites.length} items)
        </span>
      </h1>
      <div className="flex flex-row py-4s h-full">
        <div className="w-1/5 relative left-0">
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
        {favorites?.length === 0 ? (
          <div className="flex flex-col w-4/5 h-full bg-pink-300 text-center items-center py-2">
            <h2 className="text-xl font-bold my-2">
              There is no item in
              <span className="text-2xl text-pink-900">{` Favorite List`}</span>
            </h2>
            <Button label="Browse Product" link="/store" />
          </div>
        ) : (
          <div className="w-4/5 grid grid-cols-4 gap-4">
            {favorites?.map((item) => (
              <Card product={item} key={item._id} />
            ))}

             {/*<div className="col-span-2">
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

export default page;
