import Image from "next/image";
import React from "react";

const Detail = () => {
  return (
    <>
      <div className="w-full flex flex-row my-4">
        <div className="w-1/12">
          <Image
            alt=""
            src="/images/gallery.png"
            width={"0"}
            height={"0"}
            sizes="100vw"
            className="w-full h-96 object-contain"
          />
        </div>
        <div className="w-5/12" style={{backgroundColor:"#EDEDEF"}}>
          <Image
            alt=""
            src="/images/Rectangle 119.png"
            width={"0"}
            height={"0"}
            sizes="100vw"
            className="w-full h-96 object-contain"
          />
        </div>
        <div className="w-6/12">
          <h1 className="font-bold text-3xl text-pink-900 pt-4">
            beautya prestige lA micro-huile de rose advanced serum
          </h1>
          <p className="text-md font-bold mt-2">Anti-aging face serum</p>
          <p className="text-sm">
            Formulated with 92% natural-origin ingredients
          </p>
          <p className="text-md mt-2 font-bold">$250.0</p>
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
        <h1 className="font-bold text-xl pt-4">Product detail</h1>
        <p className="text-sm m-2">
          Beautya's 1st revitalizing serum that concentrates the double power of
          the Rose de Granville from the stem to the flower to revitalize the
          skin twice as fast (1) and visibly rejuvenate. Created after 20 years
          of research, the 10,000 (2) micro-pearls rich in revitalizing rose
          micro-nutrients are now completed by the power of the Rose sap. The
          next-generation, 92% natural-origin (3) formula of La Micro-Huile de
          Rose Advanced Serum is twice as concentrated,(4) combining the
          nourishing richness of an oil with the deep penetration of a serum.
          From the first application of the serum, the skin appears plumped. In
          3 weeks, 2x improvement in the look or feel of skin elasticity.(5)
          With regular use, skin looks and feels transformed. As if replenished
          from within, the skin seems denser and firmer, and wrinkles appear
          noticeably reduced. As if lifted, facial contours appear enhanced.
          Reveal your extraordinary beauty with Beautya Prestige. (1)
          Instrumental test, 32 panelists, after 30 min. (2) In a 30 ml bottle.
          (3) Amount calculated based on the ISO 16128-1 and ISO 16128-2
          standard. Water percentage included. The remaining 8% of ingredients
          contribute to the formula’s performance, sensory appeal and stability.
          (4) In Rose de Granville micro-nutrients compared to the previous
          formula. (5) Clinical assessment by a dermatologist on the evolution
          of the product’s performance on the skin elasticity, comparison
          between the effect after 7 days and 28 days on 34 women.
        </p>
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
