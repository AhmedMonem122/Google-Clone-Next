import WebSearchResult from "@/components/WebSearchResult";
import axios from "axios";
import Link from "next/link";

const WebSearch = async ({ searchParams }) => {
  const startIndex = searchParams.start || "1";

  const { data } = await axios.get(
    `https://www.googleapis.com/customsearch/v1?key=${process.env.GOOGLE_SEARCH_API_KEY}&cx=${process.env.GOOGLE_SEARCH_CX}&q=${searchParams.searchTerm}&start=${startIndex}`
  );

  const results = data.items;

  if (!results) {
    return (
      <div className="flex flex-col justify-center items-center pt-10">
        <h1 className="text-3xl mb-4">No results found</h1>
        <p className="text-lg">
          Try searching for something else or go back to the homepage{" "}
          <Link href="/" className="text-blue-500">
            Home
          </Link>
        </p>
      </div>
    );
  }

  return <>{results && <WebSearchResult results={data} />}</>;
};

export default WebSearch;
