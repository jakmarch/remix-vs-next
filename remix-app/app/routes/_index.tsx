import type { V2_MetaFunction } from "@remix-run/node";
import { Form, PrefetchPageLinks } from "@remix-run/react";
import { useState } from "react";
import { useNavigate } from "react-router";

export const meta: V2_MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
      <h1>Welcome to Remix</h1>
      <ul>
        <li>
          <a href="/profile/jakmarch">My profile</a>
        </li>
      </ul>

      <h2>Search</h2>
      {/* <input value={query} onChange={(e) => setQuery(e.target.value)} />
        <button onClick={() => navigate(`/search?query=${query}`)}>Search</button> */}

      <Form action="/search">
        <input name="query" onChange={(e) => setQuery(e.target.value)} />
        {query && <PrefetchPageLinks page={`/search?query=${query}`} />}
        <button
          type="submit"
          onClick={() => navigate(`/search?query=${query}`)}
        >
          Search
        </button>
      </Form>
    </div>
  );
}
