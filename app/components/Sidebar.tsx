"use client";

import { useRouter } from "next/navigation";
import { signOut } from "next-auth/react";

const Sidebar = () => {
  const router = useRouter();

  const handleLogout = async () => {
    try {
      await signOut({
        redirect: false,
      });

      window.location.href = "/login";
    } catch (error) {
      console.error("LOGOUT ERROR:", error);
    }
  };

  return (
    <aside className="hidden md:flex flex-col justify-between w-20 lg:w-60 bg-gray-50 dark:bg-[#060b18] border-r border-gray-200 dark:border-white/5 py-6 z-10 transition-colors duration-200">
      <nav className="space-y-2 px-3">

        {/* Inbox (Active State) */}
        <button
          onClick={() => router.push("/dashboard")}
          className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl border transition-all bg-blue-100 dark:bg-blue-600/10 hover:text-blue-600 border-blue-100 dark:border-blue-500/20 text-blue-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-white/5"
        >
          <svg
            className="w-5 h-5 shrink-0"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"
            />
          </svg>

          <span className="hidden lg:block">Inbox</span>
        </button>

        {/* Personalized AI */}
        <button
          onClick={() => router.push("/ai")}
          className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl border transition-all bg-blue-100 dark:bg-blue-600/10 hover:text-blue-600 border-blue-100 dark:border-blue-500/20 text-blue-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-white/5"
        >
          <svg
            className="w-5 h-5 shrink-0"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"
            />
          </svg>

          <span className="hidden lg:block">Personalized AI</span>
        </button>
      </nav>

      <nav className="space-y-2 px-3">

        {/* Logout */}
        <button
          type="button"
          onClick={handleLogout}
          className="w-full flex items-center gap-3 px-3 py-2.5 text-red-500 dark:text-red-400 hover:bg-red-500/10 hover:text-red-600 dark:hover:text-red-300 rounded-xl font-medium transition-colors border border-transparent cursor-pointer"
        >
          <svg
            className="w-5 h-5 shrink-0"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17 16l4-4m0 0l4-4m0 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
            />
          </svg>

          <span className="hidden lg:block text-left text-red-500 dark:text-red-400">
            Logout
          </span>
        </button>

      </nav>
    </aside>
  );
};

export default Sidebar;