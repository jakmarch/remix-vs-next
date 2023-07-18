import type { LoaderArgs, V2_MetaFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

export const meta: V2_MetaFunction = () => {
  return [
    { title: "Profile" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

type ProfileType = {
  name: string;
  avatar_url: string;
  login: string;
};

export const loader = async ({ params }: LoaderArgs) => {
  const data: ProfileType = await fetch(
    `https://api.github.com/users/${params.login}`
  ).then((response) => {
    return response.json();
  });

  return data;
};

export default function Index() {
  const data = useLoaderData<typeof loader>();

  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
      <h2>Rendered in 'profile.$login.tsx'</h2>
      <h3>Welcome to My Profile</h3>
      <p>Login: {data.login}</p>
      <p>Name: {data.name}</p>
      <p>Avatars: </p>
      <img src={data.avatar_url} alt="alt" width={500} height={500} />
    </div>
  );
}
