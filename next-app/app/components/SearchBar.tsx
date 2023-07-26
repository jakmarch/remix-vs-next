"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { FC, useState } from "react";
interface SearchBarProps {}

export const SearchBar: FC<SearchBarProps> = (props) => {
  const [query, setQuery] = useState("");
  const router = useRouter();

  return (
    <>
      <h2>Search</h2>
      {/* <input value={query} onChange={(e) => setQuery(e.target.value)} />
      <button onClick={() => router.push(`/search?query=${query}`)}>
        Search
      </button> */}

      <form action={"/search"}>
        <input name="query" onChange={(e) => setQuery(e.target.value)} />
        {query && (
          <Link
            prefetch
            href={`/search?query=${query}`}
            className="mx-2 px-2 border-solid border-2 border-indigo-600"
          >
            Link search
          </Link>
        )}
        <button
          type="submit"
          onClick={() => router.push(`/search?query=${query}`)}
          className="mx-2 px-2 border-solid border-2 border-indigo-600"
        >
          Search
        </button>
      </form>
    </>
  );
};
