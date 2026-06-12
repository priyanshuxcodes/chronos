export default function DashboardPage() {
  return (
    <div className="h-screen flex flex-col bg-gray-50 text-gray-900 font-sans">
      {/* Navbar */}
      <header className="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-6 shadow-sm z-20">
        <div className="flex items-center gap-2">
          {/* Logo Placeholder */}
          <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center shadow-inner">
            <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h1 className="text-xl font-bold tracking-tight text-gray-900">
            Chronos
          </h1>
        </div>

        <div className="flex items-center gap-4">
          <button className="text-gray-400 hover:text-gray-600 transition-colors">
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
            </svg>
          </button>
          {/* Avatar */}
          <div className="h-10 w-10 rounded-full bg-linear-to-tr from-indigo-500 to-purple-500 border-2 border-white shadow-sm flex items-center justify-center text-white font-semibold cursor-pointer">
            JD
          </div>
        </div>
      </header>

      {/* Main Body Layout */}
      <div className="flex-1 flex overflow-hidden">
        
        {/* Sidebar */}
        <aside className="hidden md:flex flex-col justify-between w-20 lg:w-60 bg-white border-r border-gray-200 py-6 z-10">
          <nav className="space-y-2 px-3">
            {/* Inbox (Active State) */}
            <a href="#" className="flex items-center gap-3 px-3 py-2.5 bg-indigo-50 text-indigo-700 rounded-xl font-medium transition-colors">
              <svg className="w-5 h-5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
              </svg>
              <span className="hidden lg:block">Inbox</span>
            </a>

            {/* Important */}
            <a href="#" className="flex items-center gap-3 px-3 py-2.5 text-gray-600 hover:bg-gray-50 hover:text-gray-900 rounded-xl font-medium transition-colors">
              <svg className="w-5 h-5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
              </svg>
              <span className="hidden lg:block">Important</span>
            </a>
          </nav>

          <nav className="space-y-2 px-3">
            {/* Settings */}
            <a href="#" className="flex items-center gap-3 px-3 py-2.5 text-gray-600 hover:bg-gray-50 hover:text-gray-900 rounded-xl font-medium transition-colors">
              <svg className="w-5 h-5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span className="hidden lg:block">Settings</span>
            </a>

            {/* Logout */}
            <button className="w-full flex items-center gap-3 px-3 py-2.5 text-red-600 hover:bg-red-50 hover:text-red-700 rounded-xl font-medium transition-colors">
              <svg className="w-5 h-5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
              </svg>
              <span className="hidden lg:block text-left">Logout</span>
            </button>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 grid grid-rows-[1fr_auto] lg:grid-rows-[1fr_280px] overflow-hidden">
          
          {/* Top Section */}
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_400px] overflow-hidden">
            
            {/* Emails */}
            <section className="border-r border-gray-200 bg-white p-6 overflow-y-auto">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-lg font-bold text-gray-800">Inbox</h2>
                <span className="bg-indigo-100 text-indigo-700 text-xs font-semibold px-2.5 py-0.5 rounded-full">5 New</span>
              </div>

              <div className="space-y-3">
                {[
                  { sender: "Sarah Jenkins", subject: "Project Update", time: "10:30 AM", unread: true },
                  { sender: "Design Team", subject: "Figma assets ready", time: "09:15 AM", unread: true },
                  { sender: "Client Support", subject: "Ticket #4041 resolved", time: "Yesterday", unread: false },
                  { sender: "Vercel", subject: "Deployment Successful", time: "Yesterday", unread: false },
                  { sender: "AWS Billing", subject: "Monthly Invoice", time: "Oct 12", unread: false },
                ].map((email, idx) => (
                  <div
                    key={idx}
                    className={`group relative border rounded-xl p-4 cursor-pointer transition-all duration-200 hover:shadow-md hover:border-indigo-200 ${email.unread ? 'bg-indigo-50/30 border-indigo-100' : 'bg-white border-gray-100'}`}
                  >
                    {email.unread && (
                      <span className="absolute top-5 left-3 w-2 h-2 bg-indigo-500 rounded-full"></span>
                    )}
                    <div className={`flex justify-between items-center mb-1 ${email.unread ? 'pl-4' : ''}`}>
                      <p className={`text-sm font-semibold ${email.unread ? 'text-gray-900' : 'text-gray-700'}`}>
                        {email.sender}
                      </p>
                      <span className="text-xs text-gray-400 font-medium">{email.time}</span>
                    </div>
                    <p className={`font-medium mb-1 ${email.unread ? 'pl-4 text-gray-800' : 'text-gray-800'}`}>
                      {email.subject}
                    </p>
                    <p className={`text-sm text-gray-500 truncate ${email.unread ? 'pl-4' : ''}`}>
                      Hey, just wanted to give you a quick update on the...
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* AI Agent */}
            <section className="bg-gray-50 flex flex-col border-l border-gray-200 shadow-[-4px_0_15px_-3px_rgba(0,0,0,0.02)]">
              <div className="p-5 border-b border-gray-200 bg-white">
                <h2 className="text-lg font-bold text-gray-800 flex items-center gap-2">
                  <svg className="w-5 h-5 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  AI Assistant
                </h2>
              </div>

              <div className="flex-1 p-5 overflow-y-auto space-y-4">
                {/* User Message */}
                <div className="flex justify-end">
                  <div className="bg-indigo-600 text-white rounded-2xl rounded-tr-sm px-4 py-2.5 max-w-[85%] shadow-sm text-sm">
                    Schedule a meeting with Sarah tomorrow at 5 PM.
                  </div>
                </div>

                {/* AI Message */}
                <div className="flex justify-start">
                  <div className="bg-white border border-gray-200 text-gray-800 rounded-2xl rounded-tl-sm px-4 py-2.5 max-w-[85%] shadow-sm text-sm">
                    <p className="mb-2">I've scheduled the meeting with Sarah.</p>
                    <div className="bg-gray-50 border border-gray-100 rounded-lg p-3 flex items-center gap-3">
                      <div className="bg-indigo-100 text-indigo-600 p-2 rounded-md">
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-xs font-bold">Tomorrow, 5:00 PM</p>
                        <p className="text-xs text-gray-500">Sync with Sarah</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-4 bg-white border-t border-gray-200">
                <div className="relative">
                  <textarea
                    placeholder="Ask me to send emails, schedule..."
                    className="w-full bg-gray-50 border border-gray-300 rounded-xl py-3 pl-4 pr-12 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent resize-none transition-all"
                    rows={2}
                  />
                  <button className="absolute right-2 bottom-2 p-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors shadow-sm">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </button>
                </div>
              </div>
            </section>
          </div>

          {/* Calendar */}
          <section className="border-t border-gray-200 bg-white p-6 overflow-y-auto">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-bold text-gray-800">Upcoming Today</h2>
              <button className="text-sm font-medium text-indigo-600 hover:text-indigo-800">View Full Calendar</button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { time: "09:00 AM", title: "Daily Standup", color: "border-blue-500" },
                { time: "11:00 AM", title: "Design Review", color: "border-purple-500" },
                { time: "02:00 PM", title: "Client Call", color: "border-green-500" },
                { time: "05:00 PM", title: "Sync with Sarah", color: "border-indigo-500" },
              ].map((event, idx) => (
                <div
                  key={idx}
                  className={`border border-gray-200 border-l-4 rounded-xl p-4 hover:shadow-md transition-shadow cursor-pointer bg-white ${event.color}`}
                >
                  <p className="text-xs font-semibold text-gray-500 mb-1">{event.time}</p>
                  <p className="font-bold text-gray-800">{event.title}</p>
                </div>
              ))}
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}