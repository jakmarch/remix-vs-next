# Remix vs Next.js 13

Small comparison between Remix and Next.js 13 apps.

## Routing

- Remix\
  Remix bases on file structure routing. At the beginning they recommended to structure the route directory with nested files.
  According to the latest documentation, Remix recommends flat files structure. Every nesting is determined by a dot. Every dynamic part of url is determined by a dollar sign.
  Example:
  `users.$id.tsx` => `/users/id`

- Next.js\
  Next 13 introduced the app directory (beta). Since 13.4 it’s in stable version and now it’s called App Router. That means they decided to leave `/pages` approach (which is still supported). I’ll focus on the new approach.
  According to Next.js documentation:
  Next.js uses a file-system based router where folders are used to define routes.Each folder represents a route segment hat maps to a URL segment. To create a nested route, you can nest folders inside each other. A special page.tsx file is used to make route segments publicly accessible.

## Serving pages

- Remix\
  Remix uses swr (stale-while-revalidate) to serve page. That means that basically everything can happen on the server side.

  ```
  remix-app
  |- app
  | |- routes
  | | |- _index.tsx
  | | |- profile.$login.tsx
  | | |- profile.tsx
  | | |- search.tsx
  ```

- Next.js\
  In the new approach, Next.js developers decided to get rid of SSR and SSG. You can’t call `getServerSideProps()` or `getStaticProps()` methods anymore. Now fetching data happens directly in components. But now every component is the Server Component by default. That means that the components are rendered on the server, so the data is also fetched on the server. React Server Components allow to more granular approach in terms of server side rendering. (Previously the whole page was rendered on server, now only particular components). Important note: You can’t use hooks inside RSC. To use hooks you have to change RSC to client component by adding declaration `"use client"` at the top of the component.
  ```
  next-app
  |- app
  | |- components
  | | |- SearchBar.tsx (not route)
  | |- profile
  | | |- layout.tsx
  | | |- page.tsx (route)
  | | |- [login]
  | | | |- page.tsx (route)
  | |- search
  | | |- page.tsx (route)
  ```

## Nesting pages

- Remix\
  Thanks to the `Outlet` component we can render child route elements inside parent route.

- Next.js\
  We can achieve something similar by using layouts. We can define `layout.tsx` file next to `page.tsx` file in the parent route. Every child route will render inside layout component in place where we call children prop. Please note that if we call parent route, `page.tsx` will be also rendered inside layout.

## Fetching data

- Remix\
  Remix provides loader method where we can fetch data. Inside the component we can get the data by using the `useLoaderData()` hook.

- Next.js\
  Thanks to RSC we can get the data in the async function and then we just awaiting this method in the component.

## Summary

In my opinion, Remix and Next.js 13 are much more similar than Remix and Next.js 12. Definitely Next.js has bigger community and is more developed. From what I read, people claim that Next is better for bigger projects and I think I can agree with that. Especially because of better support, longer existence on the market. I also heard that Remix can make a lot of breaking changes between major versions, so that can be problematic in the future.
