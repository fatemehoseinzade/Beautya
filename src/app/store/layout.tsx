import Navbar from "@/layout/Navbar";
import React from "react";

const layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className="mt-3">
      <Navbar classes={'bg-pink-600'}/>
      {children}
    </div>
  );
};

export default layout;
