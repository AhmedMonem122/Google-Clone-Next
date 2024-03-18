import { FooterList1, FooterList2 } from "@/footerData/footerData";
import Country from "./Country";

const Footer = () => {
  return (
    <footer className=" absolute bottom-0 w-full text-sm text-gray-500 bg-[#f2f2f2]">
      <div className="border-b px-8 py-3">
        <Country />
      </div>

      <div className="flex flex-col sm:flex-row justify-between items-center px-8 py-3 gap-y-7 sm:gap-y-0">
        <ul className="flex items-center gap-x-2 sm:gap-x-6  ">
          {FooterList1.map(({ id, title }) => (
            <li key={id} className="hover:underline cursor-pointer">
              {title}
            </li>
          ))}
        </ul>

        <ul className="flex items-center gap-x-6 ">
          {FooterList2.map(({ id, title }) => (
            <li key={id} className="hover:underline cursor-pointer">
              {title}
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
