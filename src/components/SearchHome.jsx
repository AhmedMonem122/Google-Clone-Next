"use client";

import axios from "axios";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Fragment, useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { BsFillMicFill } from "react-icons/bs";

const SearchHome = () => {
  const [search, setSearch] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!search.trim()) return;
    router.push(`/search/web?searchTerm=${search.trim()}`);
  };

  const randomSearch = async () => {
    try {
      setIsLoading(true);
      const { data } = await axios.get(
        "https://random-word-api.herokuapp.com/word"
      );
      router.push(`/search/web?searchTerm=${data[0]}`);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
    }
  };

  return (
    <Fragment>
      <form
        onSubmit={handleSubmit}
        className=" w-[80%] md:w-3/6 lg:w-[40%] mx-auto mt-10 relative "
      >
        <AiOutlineSearch className="text-xl text-gray-500 absolute left-5 top-4" />
        <input
          className="border border-gray-200 w-full rounded-full px-5 py-3 focus:outline-none pl-12"
          type="text"
          onChange={(e) => setSearch(e.target.value)}
          value={search}
        />
        <BsFillMicFill className="text-xl absolute right-5 top-4" />
      </form>

      <div className=" flex flex-col sm:flex-row gap-y-4 sm:gap-x-4 mt-8">
        <button type="submit" onClick={handleSubmit} className="btn">
          Google Search
        </button>
        <button
          type="submit"
          onClick={randomSearch}
          className="btn flex justify-center items-center"
        >
          {isLoading ? (
            <Image
              src="spinner.svg"
              alt="loading"
              width={24}
              height={24}
              className=" text-center"
              priority
            />
          ) : (
            " I am Feeling Lucky"
          )}
        </button>
      </div>
    </Fragment>
  );
};

export default SearchHome;
