import React, { useEffect, useState } from "react";
import { Email } from "@/types/email";

const Inbox = () => {
  const [emails, setEmails] = useState<Email[]>([]);
  const [selectedEmail, setSelectedEmail] = useState<Email | null>(null);

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
  return (
    <div className="flex h-full overflow-hidden">
      <section className="border-r border-gray-200 dark:border-white/5 bg-slate-100/60 dark:bg-[#070c18] p-4 overflow-y-auto transition-colors duration-200 width-[1/2]">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-lg font-bold text-slate-900 dark:text-blue-400">
            Inbox
          </h2>
          <span className="bg-blue-500/10 text-blue-600 dark:text-blue-300 border border-blue-500/20 text-xs px-2.5 py-1 rounded-full font-semibold">
            {emails.filter((e) => e.unread).length} New
          </span>
        </div>

        <div className="space-y-3">
          {emails.map((email) => (
            <div
              key={email.id}
              onClick={() => setSelectedEmail(email)}
              className={`cursor-pointer rounded-xl border p-4 transition-all hover:bg-slate-200/50
                    ${
                      selectedEmail?.id === email.id
                        ? "border-blue-500/40 bg-blue-900 dark:bg-blue-600/5 shadow-xs"
                        : "border-slate-200 dark:border-white/5 bg-blue-900 dark:bg-blue-900"
                    }`}
            >
              <div className="flex justify-between items-start">
                <p className="font-semibold text-sm text-slate-800 dark:text-gray-200 truncate max-w-45">
                  {email.from.split("<")[0].trim()}
                </p>
                <span className="text-xs text-slate-400 dark:text-gray-500">
                  {new Date(email.date).toLocaleDateString()}
                </span>
              </div>
              <p className="font-medium text-slate-900 dark:text-gray-300 mt-2 truncate">
                {email.subject}
              </p>
              <p className="text-sm text-slate-500 dark:text-gray-500 mt-1 truncate">
                {email.snippet}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-balck dark:bg-black border-r border-slate-200 dark:border-white/5 p-6 overflow-y-auto transition-colors duration-200">
        {selectedEmail ? (
          <>
            <div className="mb-6 pb-6 border-b border-slate-200 dark:border-white/5">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white tracking-tight">
                {selectedEmail.subject}
              </h2>
              <p className="text-slate-600 dark:text-gray-400 mt-3 text-sm">
                From: {selectedEmail.from}
              </p>
              <p className="text-xs text-slate-400 dark:text-gray-600 mt-1.5">
                {new Date(selectedEmail.date).toLocaleString()}
              </p>
            </div>
            <div className="rounded-xl border border-slate-200 dark:border-white/5 bg-slate-50 dark:bg-white/1 p-5">
              <p className="text-slate-700 dark:text-gray-300 leading-relaxed text-sm tracking-wide">
                {selectedEmail.snippet}
              </p>
            </div>
          </>
        ) : (
          <div className="h-full flex items-center justify-center text-slate-400 dark:text-gray-600 font-medium">
            Select an email
          </div>
        )}
      </section>
    </div>
  );
};

export default Inbox;
