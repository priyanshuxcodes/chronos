"use client";

import { signIn, signOut, useSession } from "next-auth/react";

export default function Home() {
  const { data: session } = useSession();

  if (session) {
    return (
      <div>
        <h1>Welcome {session.user?.name}</h1>

        <img
          src={session.user?.image ?? ""}
          alt="profile"
          width={80}
        />

        <button onClick={() => signOut()}>
          Logout
        </button>
      </div>
    );
  }

  return (
    <button
      onClick={() => signIn("google")}
    >
      Sign in with Google
    </button>
  );
}