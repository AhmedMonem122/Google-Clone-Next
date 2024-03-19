import Link from "next/link";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

const Pagination = () => {
  return (
    <div className="flex justify-between sm:justify-start sm:gap-x-44 sm:px-0 px-10 pb-4 text-blue-700">
      {startIndex >= 10 && (
        <Link
          href={`${pathname}?searchTerm=${searchTerm}&start=${startIndex - 10}`}
        >
          <div
            div
            className="flex flex-col cursor-pointer items-center hover:underline"
          >
            <BsChevronLeft className="h-5" />
            <p>Previous</p>
          </div>
        </Link>
      )}

      {startIndex <= 90 && (
        <Link
          href={`${pathname}?searchTerm=${searchTerm}&start=${startIndex + 10}`}
        >
          <div className="flex flex-col cursor-pointer items-center hover:underline">
            <BsChevronRight className="h-5" />
            <p>Next</p>
          </div>
        </Link>
      )}
    </div>
  );
};

export default Pagination;
