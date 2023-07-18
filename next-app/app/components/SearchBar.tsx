"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { FC, useState } from "react";
interface SearchBarProps {}

export const SearchBar: FC<SearchBarProps> = (props) => {
  const [query, setQuery] = useState("asd");
  const router = useRouter();

  return (
    <>
      <h2>Search</h2>
      {/* <input value={query} onChange={(e) => setQuery(e.target.value)} />
      <button onClick={() => router.push(`/search?query=${query}`)}>
        Search
      </button> */}

      <form>
        <input name="query" onChange={(e) => setQuery(e.target.value)} />
        {query && <Link prefetch href={`/search?query=${query}`} />}
        <button
          type="submit"
          onClick={() => router.push(`/search?query=${query}`)}
        >
          Search
        </button>
      </form>
    </>
  );
};
