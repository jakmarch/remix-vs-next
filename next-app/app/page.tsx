import { SearchBar } from "./components/SearchBar";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
        <h1>Welcome to Next.js</h1>
        <ul>
          <li>
            <a href="/profile/jakmarch">My profile</a>
          </li>
        </ul>

        <SearchBar />
      </div>
    </main>
  );
}
