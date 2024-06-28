"use client";
import { useRouter } from "next/navigation";
import React from "react";

interface Props {
  classes?: string;
  label: string;
  link?: string;
  onClick?: () => void;
}

const Button = ({ classes, label, link, onClick }: Props) => {
  const router = useRouter();
  return (
    <button
      className={`${classes} border-2 border-pink-800 text-pink-800 p-2 w-52 hover:bg-pink-900 hover:text-white`}
      onClick={
        link
          ? () => {
              router.push(link);
            }
          : onClick
      }
    >
      <span className="font-bold">{label}</span>
    </button>
  );
};

export default Button;
