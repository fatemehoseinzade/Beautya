"use client";

import SvgIcon from "@/components/SvgIcon";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { useState } from "react";

const Search = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [query, setQuery] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };
  const handleClick = () => {
    const params = new URLSearchParams(searchParams);
    if (query.length > 3) {
      params.delete("query");
      params.delete("page");

      params.set("query", query.trim());
      router.replace(`/?${params.toString()}&page=1#recipe_list`);
    } else {
      router.replace("/");
    }
  };
  return (
    <div className="flex">
      <div className="relative w-full md:w-2/3">
        <input
          className="w-full rounded-lg border py-2 pl-10 pr-4 text-primary shadow-sm outline-none focus:border-primary"
          placeholder="Search"
          defaultValue={query}
          onChange={handleChange}
        />

        <div className="pointer-events-none absolute inset-y-0 left-0 flex w-7 items-center pl-3">
          <SvgIcon name="search" />
        </div>
        <div className="pointer-events-none absolute inset-y-0 right-0 flex w-7 items-center pr-3">
          <SvgIcon name="option" />
        </div>
      </div>
      <button className="bg-white hover:bg-green-300 rounded-md px-3 mx-4" onClick={handleClick}>Search</button>
    </div>
  );
};

export default Search;
