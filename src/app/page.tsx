import Navbar from "@/layout/Navbar";
import Image from "next/image";

export default async function Home() {
  return (
    <div className="">
      <div className="main relative w-full p-2">
        <Navbar />
      </div>
      {/*  Categories */}
      <div className="p-10 px-40">
        <h1 className="text-xl font-bold pb-5 text-center">
          Product Categories
        </h1>
        <div className="w-9/12 mx-auto grid grid-cols-3 gap-4 text-start">
          <div className="flex flex-col w-full">
            <Image
              alt="land"
              src="/images/gifts image.png"
              width="0"
              height="0"
              sizes="100vw"
              className="w-full object-cover hover:scale-105"
            />
            <h1 className="text-center pt-4">Gifts & Sets</h1>
          </div>
          <div className="flex flex-col w-full">
            <Image
              alt="land"
              src="/images/make up image.png"
              width="0"
              height="0"
              sizes="100vw"
              className="w-full object-cover hover:scale-105"
            />
            <h1 className="text-center pt-4">Womens Make up</h1>
          </div>
          <div className="flex flex-col w-full">
            <Image
              alt="land"
              src="/images/skincare image.png"
              width="0"
              height="0"
              sizes="100vw"
              className="w-full object-cover hover:scale-105"
            />
            <h1 className="text-center pt-4">Women Skincare</h1>
          </div>
        </div>
      </div>
      {/*  Baner */}
      <div className="w-full h-64 bg-pink-900 grid grid-cols-2">
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
      <div className="p-10 px-40">
        <h1 className="text-xl font-bold pb-5 text-center">Best Sellers</h1>
        <div className="w-10/12 mx-auto grid grid-cols-3 gap-4 text-start">
          <div className="border-2 shadow-sm flex flex-col w-full h-96 hover:scale-105">
            <Image
              alt="land"
              src="/images/product image.png"
              width="0"
              height="0"
              sizes="100vw"
              className="w-full object-cover h-3/5"
            />
            <div className="p-4">
              <h1 className="font-bold text-pink-900">
                Beautya Prestige la Mousse Micellaire
              </h1>
              <p className="text-sm  my-2">
                Anti-Aging Face Serum, with Purifying French Water Lily
              </p>
              <p className="text-sm">%2500</p>
            </div>
          </div>
          <div className="border-2 shadow-sm flex flex-col w-full h-96 hover:scale-105">
            <Image
              alt="land"
              src="/images/product image_6.png"
              width="0"
              height="0"
              sizes="100vw"
              className="w-full object-cover h-3/5"
            />
            <div className="p-4">
              <h1 className="font-bold text-pink-900">
                {" "}
                Beautya Prestige la Mousse Micellaire
              </h1>
              <p className="text-sm my-2">
                {" "}
                Anti-Aging Face Serum, with Purifying French Water Lily
              </p>
              <p className="text-sm">%2500</p>
            </div>
          </div>
          <div className="border-2 shadow-sm flex flex-col w-full h-96 hover:scale-105">
            <Image
              alt="land"
              src="/images/product image_4.png"
              width="0"
              height="0"
              sizes="100vw"
              className="w-full object-cover h-3/5"
            />
            <div className="p-4">
              <h1 className="font-bold text-pink-900">
                {" "}
                Beautya Prestige la Mousse Micellaire
              </h1>
              <p className="text-sm  my-2">
                {" "}
                Anti-Aging Face Serum, with Purifying French Water Lily
              </p>
              <p className="text-sm">%2500</p>
            </div>
          </div>
        </div>
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
