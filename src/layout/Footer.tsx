import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="w-full py-5 px-10 bg-pink-800 flex justify-between mb-5 ">
      <Link href="/#" className="hidden lg:block">
        <Image
          alt="logo"
          src="/images/logo__1_-removebg-preview_2.png"
          width={"140"}
          height={"40"}
        />
      </Link>
      <Image
        alt="contact"
        src="/images/social media icons.png"
        width="0"
        height="0"
        sizes="100vw"
        className="w-64 h-11"
      />
    </div>
  );
};

export default Footer;
