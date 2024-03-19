"use client";

import { RxCross2 } from "react-icons/rx";
import { BsFillMicFill } from "react-icons/bs";
import { AiOutlineSearch } from "react-icons/ai";
import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

const BoxSearch = () => {
  const searchParams = useSearchParams();
  const searchTerm = searchParams.get("searchTerm");
  const [search, setSearch] = useState(searchTerm || "");
  const router = useRouter();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!search.trim()) return;
    router.push(`/search/web?searchTerm=${search.trim()}`);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex items-center border border-gray-200 rounded-full shadow-lg px-6 py-2 ml-10 mr-5 max-w-3xl"
    >
      <input
        type="text"
        className="w-full focus:outline-none"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <RxCross2
        className="text-2xl text-gray-500 cursor-pointer sm:mr-2"
        onClick={() => setSearch("")}
      />
      <BsFillMicFill className="hidden sm:flex text-4xl text-blue-500 pl-4 border-l-2 border-gray-300 mr-3 cursor-pointer" />
      <AiOutlineSearch
        className=" hidden sm:flex text-2xl text-blue-500 cursor-pointer"
        onClick={handleSubmit}
      />
    </form>
  );
};

export default BoxSearch;
