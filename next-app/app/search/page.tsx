import Image from "next/image";
type SearchResultsType = {
  total_count: number;
  items: {
    id: number;
    name: string;
  }[];
};

export const getData = async (query: string) => {
  const data: SearchResultsType = await fetch(
    `https://api.github.com/search/repositories?q=${query}`
  ).then((response) => {
    return response.json();
  });

  return data;
};

export default async function Page({
  searchParams,
}: {
  searchParams: { query: string };
}) {
  const data = await getData(searchParams.query);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
        <h4>Search results for: {searchParams.query}</h4>
        <ul>
          {data.items.map((item) => {
            return <li key={item.id}>{item.name}</li>;
          })}
        </ul>
      </div>
    </main>
  );
}
