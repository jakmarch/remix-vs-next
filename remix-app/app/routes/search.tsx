import type { LoaderArgs, V2_MetaFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

export const meta: V2_MetaFunction = () => {
  return [
    { title: "Search" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

type SearchResultsType = {
  total_count: number;
  items: {
    id: number;
    name: string;
  }[];
};

export const loader = async ({ request }: LoaderArgs) => {
  const url = new URL(request.url);
  const query = url.searchParams.get("query");
  const data: SearchResultsType = await fetch(
    `https://api.github.com/search/repositories?q=${query}`
  ).then((response) => {
    return response.json();
  });

  return { data, query };
};

export default function Index() {
  const { data, query } = useLoaderData<typeof loader>();

  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
      <h4>Search results for: {query}</h4>
      <ul>
        {data.items.map((item) => {
          return <li key={item.id}>{item.name}</li>;
        })}
      </ul>
    </div>
  );
}
