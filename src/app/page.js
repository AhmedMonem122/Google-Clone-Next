import HeaderHome from "@/components/HeaderHome";
import SearchHome from "@/components/SearchHome";
import Image from "next/image";
import Logo from "../assets/Google_2015_logo.svg.png";
import { Fragment } from "react";

export default function Home() {
  return (
    <Fragment>
      <HeaderHome />
      <div className="flex flex-col items-center mt-24">
        <Image src={Logo} alt="google" width="300" height="100" priority />
        <SearchHome />
      </div>
    </Fragment>
  );
}
