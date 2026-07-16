"use client";

import { useEffect, useState } from "react";
import Agent from "../components/Agent";

import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import Inbox from "../components/Inbox";

export default function DashboardPage() {
  const [events, setEvents] = useState<any[]>([]);
  const [showCompose, setShowCompose] = useState(false);

  const [activePage, setActivePage] = useState<"dashboard" | "ai">("dashboard");

  useEffect(() => {
  fetch("/api/calendar")
    .then((res) => res.json())
    .then((data) => {
      console.log("Calendar API response:", data);
      console.log("Is array?", Array.isArray(data));

      setEvents(data);
    });
}, []);

  return (
    <div className="h-screen flex flex-col bg-slate-50 dark:bg-[#030712] text-slate-900 dark:text-gray-100 font-sans antialiased overflow-hidden transition-colors duration-200">
      <Navbar />

      <div className="flex-1 flex overflow-hidden">
        <Sidebar
        />

        <main className="flex-1 grid grid-rows-[1fr_auto] lg:grid-rows-[1fr_240px] overflow-hidden">
          {/* FIX: Changed to a full-width container so Inbox can manage its own internal columns */}

          <div className="w-full overflow-hidden">
            <Inbox />
          </div>

          {/* Bottom Horizontal Calendar Section */}
          <section className="border-t border-gray-200 dark:border-white/5 bg-slate-100/60 dark:bg-[#070c18] p-6 overflow-y-auto transition-colors duration-200">
            <div className="flex items-center justify-between mb-5">
              <h2 className="text-2xl font-bold text-blue-500 dark:text-blue-400">
                Upcoming Tasks & Events
              </h2>
              <div className="flex items-center gap-3">
                <button className="text-lg font-semibold text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors cursor-pointer">
                  View Full Calendar
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {events.length === 0 ? (
                <div className="text-slate-400 dark:text-gray-500 text-sm">
                  No upcoming events
                </div>
              ) : (
                events.map((event) => (
                  <div
                    key={event.id}
                    className="border border-slate-200 dark:border-white/5 rounded-xl p-4 bg-white dark:bg-white/2 shadow-xs"
                  >
                    <p className="text-xs text-slate-400 dark:text-gray-500 mb-1">
                      {new Date(event.start).toLocaleString()}
                    </p>
                    <p className="font-semibold text-slate-900 dark:text-white">
                      {event.title}
                    </p>
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
