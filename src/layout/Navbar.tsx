import React from "react";
import Image from "next/image";
import Link from "next/link";
const Navbar = () => {
  return (
    <div className="navbar flex items-center justify-between px-10 py-2">
      <Link href="/">
        <Image alt="logo" src="/images/logo__1_-removebg-preview_2.png" width={'150'} height={'50'}/>
      </Link>
      <div className="flex">
        <Link href={"/"} className="px-10">
          <p className="text-lg text-white hover:scale-105">Home</p>
        </Link>
        <Link href={"/store"} className="px-10">
          <p className="text-lg text-white hover:scale-105">Store</p>
        </Link>
        <Link href={"/recipe"} className="px-10">
          <p className="text-lg text-white hover:scale-105">Create New One</p>
        </Link>
      </div>
 
    </div>
  );
};

export default Navbar;
