import Link from "next/link";
import Pagination from "./Pagination";
import Parser from "html-react-parser";

const WebSearchResult = ({ results }) => {
  return (
    <div className="w-full mx-auto px-3 pb-40 sm:pb-24 sm:pl-[5%] md:pl-[14%] lg:pl-48">
      <p className="text-gray-600 text-sm mb-5 mt-3">
        About {results.searchInformation?.formattedTotalResults} results ({" "}
        {results.searchInformation?.formattedSearchTime} seconds)
      </p>

      {results.items?.map((result) => (
        <div className="mb-8 max-w-xl" key={result.link}>
          <div className="group flex flex-col">
            <Link
              className="text-sm truncate text-gray-600"
              href={result.link}
              target="blank"
            >
              {result.formattedUrl}
            </Link>
            <Link
              className="group-hover:underline decoration-blue-800 text-xl truncate font-medium text-blue-800"
              href={result.link}
              target="blank"
            >
              {result.title}
            </Link>
          </div>

          <p className="text-gray-600 text-sm">{Parser(result.htmlSnippet)}</p>
        </div>
      ))}

      <Pagination />
    </div>
  );
};

export default WebSearchResult;
