"use client";

import React, { useEffect, useRef, useState } from "react";

export default function Agent() {
  const [prompt, setPrompt] = useState("");
  const [loading, setLoading] = useState(false);
  const [messages, setMessages] = useState<
    { role: "user" | "assistant"; text: string }[]
  >([
    {
      role: "assistant",
      text: `👋 Welcome to Chronos AI I can help you:\n• Read & summarize Gmail • Send emails • Schedule meetings\n• Manage your Google Calendar\nType a request below or choose one of the suggested actions.`,
    },
  ]);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const handleSend = async () => {
    if (!prompt.trim()) return;
    const currentPrompt = prompt;

    setPrompt("");
    setLoading(true);

    setMessages((prev) => [
      ...prev,
      {
        role: "user",
        text: currentPrompt,
      },
    ]);

    try {
      const res = await fetch("/api/agent", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: currentPrompt,
        }),
      });

      const data = await res.json();

      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          text: data.message || "Done!",
        },
      ]);
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          text: "Something went wrong. Please check your connection.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [messages]);

  return (
    <section className="w-full h-full flex flex-col bg-white dark:bg-[#030712] overflow-hidden transition-colors duration-200">
      
      {/* Scrollable Chat Area */}
      <div className="flex-1 overflow-y-auto px-6 md:px-16 pt-14 pb-6">
        <div className="max-w-4xl mx-auto space-y-5">
          
          {/* Header Block */}
          <div className="">
            <h1 className="text-2xl font-bold text-blue-500 dark:text-white tracking-tight">
              Chronos AI Assistant
            </h1>
            <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
              Connected to Gmail & Google Calendar
            </p>
          </div>

          {/* Action Choice Pills */}
          <div className="flex flex-wrap gap-2.5">
            {[
              "Summarize my unread emails",
              "Schedule a meeting tomorrow at 5 PM",
              "Send an email to Rahul",
            ].map((item) => (
              <button
                key={item}
                onClick={() => setPrompt(item)}
                className="px-4 py-2 rounded-full text-xs md:text-sm font-medium bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-700 dark:text-gray-300 hover:bg-slate-50 dark:hover:bg-white/10 transition-all cursor-pointer shadow-xs"
              >
                {item}
              </button>
            ))}
          </div>

          {/* Messages Container */}
          <div className="space-y-6 pt-2">
            {messages.map((message, index) => {
              const isUser = message.role === "user";
              return (
                <div key={index} className="flex flex-col w-full">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 dark:text-gray-500 mb-2 block">
                    {isUser ? "You" : "Chronos"}
                  </span>

                  <div
                    className={`text-sm leading-relaxed whitespace-pre-wrap p-5 rounded-xl border
                    ${
                      isUser
                        ? "max-w-xl ml-auto bg-blue-600 border-blue-700 text-white"
                        : "w-full bg-slate-50/60 dark:bg-[#070c18] border-slate-200/60 dark:border-white/5 text-slate-800 dark:text-gray-200"
                    }`}
                  >
                    {message.text}
                  </div>
                </div>
              );
            })}

            {/* Bouncing Animation Loading State */}
            {loading && (
              <div className="flex flex-col w-full">
                <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 dark:text-gray-500 mb-2 block">
                  Chronos
                </span>
                <div className="inline-flex self-start bg-slate-50/60 dark:bg-[#070c18] border border-slate-200/60 dark:border-white/5 rounded-xl px-5 py-4 shadow-xs">
                  <div className="flex gap-1 items-center h-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-500 dark:bg-blue-400 animate-bounce" />
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-500 dark:bg-blue-400 animate-bounce [animation-delay:150ms]" />
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-500 dark:bg-blue-400 animate-bounce [animation-delay:300ms]" />
                  </div>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

        </div>
      </div>

      {/* Persistent Bottom Input Section */}
      <div className="bg-white dark:bg-[#030712] border-t border-slate-100 dark:border-white/5 px-6 md:px-16 py-5">
        <div className="max-w-4xl mx-auto flex flex-col w-full">
          
          {/* Inline Flex Input Bar (Fixes Button Shifting Issues) */}
          <div className="w-full flex items-center justify-between border border-slate-200 dark:border-white/10 rounded-xl bg-white dark:bg-[#070c18] p-1.5 shadow-xs focus-within:ring-2 focus-within:ring-blue-500/20 focus-within:border-blue-500/60 transition-all">
            <input
              type="text"
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  e.preventDefault();
                  handleSend();
                }
              }}
              placeholder="Ask me to send emails, schedule..."
              className="flex-1 bg-transparent text-slate-900 dark:text-white py-3 px-3 text-sm placeholder-slate-400 dark:placeholder-gray-500 focus:outline-none"
            />
            
            <button
              onClick={handleSend}
              disabled={loading || !prompt.trim()}
              className="p-2.5 bg-blue-600 disabled:bg-slate-100 dark:disabled:bg-white/5 text-white disabled:text-slate-400 dark:disabled:text-gray-600 rounded-lg hover:bg-blue-700 transition-colors cursor-pointer flex items-center justify-center shrink-0"
            >
              <svg
                className="w-4 h-4 transform rotate-45 -translate-x-0.5 translate-y-0.5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2.5}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
              </svg>
            </button>
          </div>
        </div>
      </div>
      
    </section>
  );
}