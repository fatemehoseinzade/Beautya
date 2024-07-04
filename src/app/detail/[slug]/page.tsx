import { getProductBySlug } from "@/lib/data";
import Image from "next/image";
import React from "react";

const Detail = async ({ params }: { params: { slug: string } }) => {
  const product = await getProductBySlug(params.slug);

  return (
    <>
      <div className="lg:flex lg:flex-row m-4">
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
        <div className="w-full lg:w-5/12 me-4" style={{ backgroundColor: "#F2F2F4" }}>
          <Image
            alt={product?.name || ""}
            src={product?.image || "/images/Rectangle 119.png"}
            width={"0"}
            height={"0"}
            sizes="100vw"
            className="w-full h-96 object-contain"
          />
        </div>
        <div className="w-full lg:w-6/12 flex flex-col justify-between items-end">
          <div>
            <h1 className="font-bold text-3xl text-pink-900 pt-4">
              {product?.name}
            </h1>
            <p className="text-md font-bold mt-2">Anti-aging face serum</p>
            <p className="text-sm">{product?.description}</p>
            <p className="text-md mt-2 font-bold">${product?.price}</p>
          </div>
          <div className="w-full lg:w-2/3 bg-pink-50 rounded p-4">
            <div className="flex my-2">
              <Image
                alt=""
                src="/images/Vector.png"
                width={"18"}
                height={"14"}
                className="me-2 hidden lg:block"
              />
              <p className="text-sm ">
                receive 2 free samples when you spend $100
              </p>
            </div>
            <div className="flex my-2">
              <Image
                alt=""
                src="/images/Vector-2.png"
                width={"18"}
                height={"14"}
                className="me-2 hidden lg:block"
                
              />
              <p className="text-sm ">
                receive free 1-2-1 expert advice in branches
              </p>
            </div>
            <div className="flex my-2">
              <Image
                alt=""
                src="/images/Vector-1.png"
                width={"18"}
                height={"10"}
                className="me-2 hidden lg:block"
              />
              <p className="text-sm ">
                receive $2 when you return 5 empty containers
              </p>
            </div>
          </div>
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
