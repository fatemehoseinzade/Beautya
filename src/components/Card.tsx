"use client";
import React from "react";
import Image from "next/image";
import { addCommas } from "@/utils/addCommas";
import { Product } from "@/types/Product-Type";


interface Props {
  content: Product;
}

const Card = (props: Props) => {
  const { image, name, description,_id, price } = props.content;
  return (
    <div
      className="border-2 border-lime-200 rounded-lg bg-white"
      onClick={() => console.log("d")}
    >
      <Image
        src={image}
        alt="{alt || title}"
        width={"300"}
        height={"100"}
        className="mx-auto"
        // layout="fill"
        objectFit="cover"
      />
      <div className="p-5 flex flex-col justify-between align-bottom">
        <div className="h-14">
          <h3 className="text-base pb-2">{name.slice(0,40)} {name?.length > 40 && '...'}</h3>
        </div>
        {/* <p className="text-xs pb-2">{'description'}</p> */}
        <p className="text-md font-semibold">
          Cal.
          <span className="font-normal">{addCommas(price)}</span>
        </p>
      </div>
    </div>
  );
};

export default Card;
