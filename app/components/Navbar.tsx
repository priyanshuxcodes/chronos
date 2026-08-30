"use client";

import { signOut, useSession } from "next-auth/react";
import ThemeToggle from "./ThemeToggle";

const Navbar = () => {
  const { data: session } = useSession();

  const userName = session?.user?.name || "User";
  const userEmail = session?.user?.email || "";
  const avatarInitial = userName.charAt(0).toUpperCase();

  const handleLogout = async () => {
    console.log("LOGOUT BUTTON CLICKED");

    try {
      const result = await signOut({
        redirect: false,
      });

      console.log("SIGNOUT RESULT:", result);

      window.location.href = "/login";
    } catch (error) {
      console.error("LOGOUT ERROR:", error);
    }
  };

  return (
    <header className="h-16 bg-white/80 dark:bg-[#030712]/80 backdrop-blur-md border-b border-gray-200 dark:border-white/5 flex items-center justify-between px-6 shadow-xs z-20 transition-colors duration-200">

      {/* Logo */}
      <div className="flex items-center gap-3">
        <div className="flex items-center justify-center w-8 h-8 bg-blue-600 rounded-lg shadow-md">
          <svg
            className="w-4 h-4 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
            />
          </svg>
        </div>

        <h1 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
          Chronos
        </h1>
      </div>

      {/* Right side */}
      <div className="flex items-center gap-4">

        <ThemeToggle />

        {/* Notifications */}
        <button className="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors cursor-pointer">
          <svg
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-2 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
            />
          </svg>
        </button>

        {/* Profile / Logout */}
        <button
          type="button"
          onClick={handleLogout}
          title={`Logout ${userEmail}`}
          className="h-10 w-10 rounded-full bg-linear-to-tr from-blue-600 to-indigo-600 border border-gray-200 dark:border-white/10 shadow-lg shadow-blue-500/20 flex items-center justify-center text-white font-semibold cursor-pointer hover:scale-105 transition-transform"
        >
          {avatarInitial}
        </button>

      </div>
    </header>
  );
};

export default Navbar;