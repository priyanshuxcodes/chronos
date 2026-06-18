"use client";

import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Agent from "../components/Agent";

export default function AIPage() {
  return (
    <div className="h-screen flex flex-col bg-slate-50 dark:bg-[#030712]">

      {/* Top Navbar */}
      <Navbar />

      {/* Sidebar + AI */}
      <div className="flex flex-1 overflow-hidden">

        <Sidebar />

        <main className="flex-1 overflow-hidden">
          <Agent />
        </main>

      </div>
    </div>
  );
}