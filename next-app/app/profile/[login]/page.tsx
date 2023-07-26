import Image from "next/image";
type ProfileType = {
  name: string;
  avatar_url: string;
  login: string;
};

export const getData = async (login: string) => {
  const data: ProfileType = await fetch(
    `https://api.github.com/users/${login}`
  ).then((response) => {
    return response.json();
  });

  return data;
};

export default async function Page({ params }: { params: { login: string } }) {
  const data = await getData(params.login);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
        <h2>Rendered in profile/[login]/page.tsx</h2>
        <h3>Welcome to My Profile</h3>
        <p>Login: {data.login}</p>
        <p>Name: {data.name}</p>
        <p>Avatars: </p>
        <Image src={data.avatar_url} alt="alt" width={500} height={500} />
      </div>
    </main>
  );
}
