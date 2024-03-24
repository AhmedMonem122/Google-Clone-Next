import Image from "next/image";
import Link from "next/link";
import logo from "../assets/Google_2015_logo.svg.png";
import { RiSettings3Line } from "react-icons/ri";
import { TbGridDots } from "react-icons/tb";
import BoxSearch from "./BoxSearch";
import HeaderSearchOptions from "./HeaderSearchOptions";
import { Suspense } from "react";

const HeaderSearch = () => {
  return (
    <header className=" sticky  top-0 left-0 w-full bg-white">
      <div className="flex justify-between items-center p-6">
        <Link href={"/"}>
          <Image src={logo} width="120" height="40" alt="google" priority />
        </Link>

        <div className=" flex-1">
          <Suspense>
            <BoxSearch />
          </Suspense>
        </div>

        <div className="hidden md:flex gap-x-2 ">
          <RiSettings3Line className="header-icon" />
          <TbGridDots className="header-icon" />
        </div>

        <button className=" hidden sm:block bg-blue-500 text-white px-6 py-2 font-medium rounded-md hover:brightness-105 hover:shadow-md transition-all ml-2">
          Sign in
        </button>
      </div>

      <Suspense>
        <HeaderSearchOptions />
      </Suspense>
    </header>
  );
};

export default HeaderSearch;
