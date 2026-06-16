"use client";

import { useEffect, useState } from "react";
import { Email } from "@/types/email";

export default function DashboardPage() {
  const [emails, setEmails] = useState<Email[]>([]);
  const [selectedEmail, setSelectedEmail] = useState<Email | null>(null);

  const [events, setEvents] = useState<any[]>([]);

  const registeredEmail = "user@example.com";
  const avatarInitial = registeredEmail.split("@")[0].charAt(0).toUpperCase();

  useEffect(() => {
    async function loadEmails() {
      const res = await fetch("/api/emails");
      const data = await res.json();

      setEmails(data);

      if (data.length > 0) {
        setSelectedEmail(data[0]);
      }
    }

    loadEmails();
  }, []);

  useEffect(() => {
    fetch("/api/calendar")
      .then((res) => res.json())
      .then((data) => {
        setEvents(data.items || []);
      });
  }, []);

  return (
    <div className="h-screen flex flex-col bg-[#030712] text-gray-100 font-sans antialiased overflow-hidden">
      {/* Obsidian Navbar */}
      <header className="h-16 bg-[#030712]/80 backdrop-blur-md border-b border-white/5 flex items-center justify-between px-6 shadow-sm z-20">
        <div className="flex items-center gap-3">
          {/* Logo */}
          <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center shadow-md shadow-blue-600/20">
            <svg
              className="w-5 h-5 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
          <h1 className="text-xl font-bold tracking-tight text-white">
            Chronos
          </h1>
        </div>

        <div className="flex items-center gap-4">
          <button className="text-gray-400 hover:text-white transition-colors">
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
                d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
              />
            </svg>
          </button>

          {/* Avatar (Obsidian style glow) */}
          <div className="h-10 w-10 rounded-full bg-linear-to-tr from-blue-600 to-indigo-600 border border-white/10 shadow-lg shadow-blue-500/20 flex items-center justify-center text-white font-semibold cursor-pointer">
            {avatarInitial}D
          </div>
        </div>
      </header>

      {/* Main Content Body Layout */}
      <div className="flex-1 flex overflow-hidden">
        {/* Obsidian Sidebar */}
        <aside className="hidden md:flex flex-col justify-between w-20 lg:w-60 bg-[#060b18] border-r border-white/5 py-6 z-10">
          <nav className="space-y-2 px-3">
            {/* Inbox (Active State) */}
            <a
              href="#"
              className="flex items-center gap-3 px-3 py-2.5 bg-blue-600/10 text-blue-400 rounded-xl font-medium border border-blue-500/20 transition-all"
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
            </a>

            {/* Important */}
            <a
              href="#"
              className="flex items-center gap-3 px-3 py-2.5 text-gray-400 hover:bg-white/5 hover:text-white rounded-xl font-medium transition-colors border border-transparent"
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
                  d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                />
              </svg>
              <span className="hidden lg:block">Important</span>
            </a>
          </nav>

          <nav className="space-y-2 px-3">
            {/* Settings */}
            <a
              href="#"
              className="flex items-center gap-3 px-3 py-2.5 text-gray-400 hover:bg-white/5 hover:text-white rounded-xl font-medium transition-colors border border-transparent"
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
                  d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              <span className="hidden lg:block">Settings</span>
            </a>

            {/* Logout */}
            <button className="w-full flex items-center gap-3 px-3 py-2.5 text-red-400 hover:bg-red-500/10 hover:text-red-300 rounded-xl font-medium transition-colors border border-transparent">
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
                  d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                />
              </svg>
              <span className="hidden lg:block text-left">Logout</span>
            </button>
          </nav>
        </aside>

        {/* Workspace Panels */}
        <main className="flex-1 grid grid-rows-[1fr_auto] lg:grid-rows-[1fr_240px] overflow-hidden">
          {/* Top Panel Collection */}
          <div className="grid grid-cols-1 lg:grid-cols-[350px_1fr_420px] overflow-hidden">
            {/* Inbox Panel */}
            <section className="border-r border-white/5 bg-[#070c18] p-4 overflow-y-auto">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-lg font-bold text-white">Inbox</h2>
                <span className="bg-blue-500/10 text-blue-300 border border-blue-500/20 text-xs px-2.5 py-1 rounded-full font-semibold">
                  {emails.filter((e) => e.unread).length} New
                </span>
              </div>

              <div className="space-y-3">
                {emails.map((email) => (
                  <div
                    key={email.id}
                    onClick={() => setSelectedEmail(email)}
                    className={`cursor-pointer rounded-xl border p-4 transition-all hover:bg-white/4
                    ${
                      selectedEmail?.id === email.id
                        ? "border-blue-500/40 bg-blue-600/5 shadow-md shadow-blue-950/40"
                        : "border-white/5 bg-white/1"
                    }`}
                  >
                    <div className="flex justify-between items-start">
                      <p className="font-semibold text-sm text-gray-200 truncate max-w-45">
                        {email.from.split("<")[0].trim()}
                      </p>
                      <span className="text-xs text-gray-500">
                        {new Date(email.date).toLocaleDateString()}
                      </span>
                    </div>

                    <p className="font-medium text-gray-300 mt-2 truncate">
                      {email.subject}
                    </p>
                    <p className="text-sm text-gray-500 mt-1 truncate">
                      {email.snippet}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* Email Detailed Reader */}
            <section className="bg-[#080d1a] border-r border-white/5 p-6 overflow-y-auto">
              {selectedEmail ? (
                <>
                  <div className="mb-6 pb-6 border-b border-white/5">
                    <h2 className="text-2xl font-bold text-white tracking-tight">
                      {selectedEmail.subject}
                    </h2>
                    <p className="text-gray-400 mt-3 text-sm">
                      From: {selectedEmail.from}
                    </p>
                    <p className="text-xs text-gray-600 mt-1.5">
                      {new Date(selectedEmail.date).toLocaleString()}
                    </p>
                  </div>

                  <div className="rounded-xl border border-white/5 bg-white/1 p-5">
                    <p className="text-gray-300 leading-relaxed text-sm tracking-wide">
                      {selectedEmail.snippet}
                    </p>
                  </div>
                </>
              ) : (
                <div className="h-full flex items-center justify-center text-gray-600 font-medium">
                  Select an email
                </div>
              )}
            </section>

            {/* Obsidian AI Assistant Panel */}
            <section className="bg-[#060b18] flex flex-col border-l border-white/5">
              {/* Agent Header */}
              <div className="p-5 border-b border-white/5 bg-[#080d1a]/60 backdrop-blur-sm">
                <h2 className="text-lg font-bold text-white flex items-center gap-2.5">
                  <div className="w-7 h-7 bg-blue-600/20 text-blue-400 border border-blue-500/30 rounded-lg flex items-center justify-center">
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      />
                    </svg>
                  </div>
                  AI Assistant
                </h2>
              </div>

              {/* Chat Stream Area */}
              <div className="flex-1 p-5 overflow-y-auto space-y-5">
                {/* User Message */}
                <div className="flex justify-end">
                  <div className="bg-blue-600 text-white rounded-2xl rounded-tr-sm px-4 py-2.5 max-w-[85%] shadow-md shadow-blue-950/20 text-sm">
                    Schedule a meeting with Sarah tomorrow at 5 PM.
                  </div>
                </div>

                {/* AI Message with Glassmorphism Timeline Widget */}
                <div className="flex justify-start">
                  <div className="bg-[#0c1329] border border-white/5 text-gray-200 rounded-2xl rounded-tl-sm px-4 py-3 max-w-[85%] shadow-md text-sm">
                    <p className="mb-3 text-xs tracking-wide">
                      I've scheduled the meeting with Sarah.
                    </p>

                    {/* Embedded Calendar Widget */}
                    <div className="bg-white/3 border border-white/5 rounded-xl p-3 flex items-center gap-3">
                      <div className="bg-blue-600/20 text-blue-400 border border-blue-500/30 p-2 rounded-lg">
                        <svg
                          className="w-4 h-4"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                          />
                        </svg>
                      </div>
                      <div>
                        <p className="text-xs font-bold text-white">
                          Tomorrow, 5:00 PM
                        </p>
                        <p className="text-[11px] text-gray-400">
                          Sync with Sarah
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Input Prompt Panel */}
              <div className="p-4 bg-[#080d1a]/60 backdrop-blur-sm border-t border-white/5">
                <div className="relative">
                  <textarea
                    placeholder="Ask me to send emails, schedule..."
                    className="w-full bg-[#030712] border border-white/10 text-white rounded-xl py-3 pl-4 pr-12 text-sm placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent resize-none transition-all shadow-inner"
                    rows={2}
                  />
                  <button className="absolute right-2 bottom-2 p-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors shadow-md">
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </section>
          </div>

          {/* Bottom Horizontal Calendar Section */}
          <section className="border-t border-white/5 bg-[#070c18] p-6 overflow-y-auto">
            <div className="flex items-center justify-between mb-5">
              <h2 className="text-base font-bold text-white">Upcoming Today</h2>
              <button className="text-xs font-semibold text-blue-400 hover:text-blue-300 transition-colors">
                View Full Calendar
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {events.length === 0 ? (
                <div className="text-gray-500 text-sm">No upcoming events</div>
              ) : (
                events.map((event) => (
                  <div
                    key={event.id}
                    className="border border-white/5 rounded-xl p-4 bg-white/2"
                  >
                    <p className="text-xs text-gray-500 mb-1">
                      {new Date(event.start).toLocaleString()}
                    </p>

                    <p className="font-semibold text-white">{event.title}</p>
                  </div>
                ))
              )}
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
