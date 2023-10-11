import React from "react";
import useUser from "lib/useUser";
import useEvents from "lib/useEvents";
import Link from "next/link";

// Make sure to check https://nextjs.org/docs/basic-features/layouts for more info on how to use layouts
export default function SgProfile() {
  const { user } = useUser({
    redirectTo: "/login",
  });
  const { events } = useEvents(user);

  return (
    <>
      <h1>Your GitHub profile</h1>
      <h2>
        This page uses{" "}
        <Link href="https://nextjs.org/docs/basic-features/pages#static-generation-recommended">
          Static Generation (SG)
        </Link>{" "}
        and the <Link href="/api/user">/api/user</Link> route (using{" "}
        <Link href="https://github.com/vercel/swr">vercel/SWR</Link>)
      </h2>
      {user && (
        <>
          <p>
            Public data, from{" "}
            <Link href={`https://github.com/${user.login}`}>
              https://github.com/{user.login}
            </Link>
            , reduced to `login` and `avatar_url`.
          </p>

          <pre>{JSON.stringify(user, null, 2)}</pre>
        </>
      )}

      {events !== undefined && (
        <p>
          Number of GitHub events for user: <b>{events.length}</b>.{" "}
          {events.length > 0 && (
            <>
              Last event type: <b>{events[0].type}</b>
            </>
          )}
        </p>
      )}
    </>
  );
}
