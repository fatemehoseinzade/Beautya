"use client";
import React from "react";
import Image from "next/image";
import { addCommas } from "@/utils/addCommas";
import { TProduct } from "@/types/Product-Type";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { add, remove } from "@/redux/reducers/FavoriteSlice";
import { IRootState } from "@/redux/store";

interface Props {
  product: TProduct;
}

const Card = (props: Props) => {
  const { image, name, description, price, slug, _id } = props.product;
  const router = useRouter();

  const favoriteList = useSelector(
    (state: IRootState) => state.favorite.favoriteList
  );
  
  const dispatch = useDispatch();

  const isFavorite = favoriteList.find(item => item._id === _id)

  const handleFavourite = () => {
    if (isFavorite) dispatch(remove(_id));
    else dispatch(add(props.product));
  };


  return (
    <div className="relative border-2 shadow-sm flex flex-col w-full h-96 hover:scale-105 ">
      <div
        className="absolute top-2 right-2 w-10 h-10 rounded-lg border-2 p-2 cursor-pointer hover:scale-105"
        onClick={handleFavourite}
      >
        <Image
          alt="heart"
          src={!isFavorite ? "/images/heart.png" : "/images/heart (1).png"}
          width="32"
          height="32"
        />
      </div>
      <Image
        alt={name}
        src={image}
        width="0"
        height="0"
        sizes="100vw"
        className="w-full object-cover h-3/5"
      />
      <div
        className="p-3 cursor-pointer"
        onClick={() => router.push(`/detail/${slug}`)}
      >
        <h1 className="font-bold text-pink-900">{name}</h1>
        <p className="text-sm  my-2">{description?.slice(0, 40)}...</p>
        <p className="text-sm font-semibold">${addCommas(parseInt(price))}</p>
      </div>
    </div>
  );
};

export default Card;
