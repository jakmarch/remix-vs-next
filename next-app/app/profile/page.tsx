export default async function Page({ params }: { params: { login: string } }) {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
        <h2>Rendered in profile/page.tsx</h2>
      </div>
    </main>
  );
}
