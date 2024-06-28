import React from "react";
import Image from "next/image";
import Link from "next/link";

interface Props{
  classes ?: string
}

const Navbar = ({classes}:Props) => {
  return (
    <div className={`flex items-center justify-between px-10 py-2 rounded-lg ${classes || 'navbar'}`}>
      <Link href="/">
        <Image alt="logo" src="/images/logo__1_-removebg-preview_2.png" width={'150'} height={'50'}/>
      </Link>
      <div className="flex">
        <Link href={"/"} className="px-10">
          <p className="text-md text-white hover:scale-105">Home</p>
        </Link>
        <Link href={"/store"} className="px-10">
          <p className="text-md text-white hover:scale-105">Store</p>
        </Link>
        <Link href={"/favorites"} className="px-10">
          <p className="text-md text-white hover:scale-105">Favorites</p>
        </Link>
      </div>
 
    </div>
  );
};

export default Navbar;
