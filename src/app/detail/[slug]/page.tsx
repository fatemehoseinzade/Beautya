import { getProductBySlug } from "@/lib/data";
import Image from "next/image";
import React from "react";

const Detail =  async ({
  params,
}: {
  params: { slug:string };
}) => {
  
  const product =await getProductBySlug(params.slug)


  return (
    <>
      <div className="w-full flex flex-row m-4">
        {/* <div className="w-1/12">
          <Image
            alt=""
            src="/images/gallery.png"
            width={"0"}
            height={"0"}
            sizes="100vw"
            className="w-full h-96 object-contain"
          />
        </div> */}
        <div className="w-5/12 me-4" style={{backgroundColor:"#F2F2F4"}}>
          <Image
            alt={product?.name || ""}
            src={product?.image || "/images/Rectangle 119.png"}
            width={"0"}
            height={"0"}
            sizes="100vw"
            className="w-full h-96 object-contain"
          />
        </div>
        <div className="w-6/12">
          <h1 className="font-bold text-3xl text-pink-900 pt-4">
            {product?.name}
          </h1>
          <p className="text-md font-bold mt-2">Anti-aging face serum</p>
          <p className="text-sm">
            {product?.description}
          </p>
          <p className="text-md mt-2 font-bold">${product?.price}</p>
          <Image
            alt=""
            src="/images/product_detail.png"
            width={"300"}
            height={"200"}
            sizes="60vw"
            className="mt-20"
          />
        </div>
      </div>
      

      <div className="m-4">
        <h1 className="font-bold text-xl pt-4">How To Apply</h1>
        <p className="text-sm m-2">
          <span className="font-semibold ">Step 1 :</span> Dispense two to three
          pumps into the palm of your hand. Then, using the pads of the fingers,
          apply the serum to the entire face from the centre outwards.
        </p>
        <p className="text-sm m-2">
          <span className="font-semibold ">Step 2 :</span>
          Use gentle pressure to make the serum penetrate deeply.
        </p>
      </div>
    </>
  );
};

export default Detail;
