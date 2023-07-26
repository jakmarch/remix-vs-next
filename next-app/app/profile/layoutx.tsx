export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
        <h2>Rendered in profile/layout.tsx</h2>
        <p>Some text</p>
        {children}
      </div>
    </main>
  );
}
