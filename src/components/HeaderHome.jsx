import Link from "next/link";
import { TbGridDots } from "react-icons/tb";

const HeaderHome = () => {
  return (
    <header className="flex justify-end text-sm p-5">
      <div className="flex gap-x-4 items-center">
        <Link
          target="blank"
          className="hover:underline"
          href="https://mail.google.com"
        >
          Gmail
        </Link>
        <Link
          target="blank"
          className="hover:underline"
          href="https://image.google.com"
        >
          Images
        </Link>
        <TbGridDots className=" hover:bg-gray-200 rounded-full text-4xl p-2 cursor-pointer" />
        <button className="bg-blue-500 text-white px-6 py-2 font-medium rounded-md hover:brightness-105 hover:shadow-md transition-shadow">
          Sign in
        </button>
      </div>
    </header>
  );
};

export default HeaderHome;
