"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import ThemeToggle from "./components/ThemeToggle";

export default function LandingPage() {
  const [isAnnual, setIsAnnual] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("opacity-100", "translate-y-0");
            entry.target.classList.remove("opacity-0", "translate-y-8");
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    document.querySelectorAll(".scroll-animate").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-[#030712] font-sans antialiased text-gray-800 dark:text-gray-100 selection:bg-blue-600 selection:text-white overflow-x-hidden transition-colors duration-300">
      
      {/* Top Header Navigation */}
      <header className="w-full border-b border-gray-200/80 dark:border-white/5 fixed top-0 z-50 px-6 py-4 flex items-center justify-between backdrop-blur-md bg-white/80 dark:bg-[#030712]/80 transition-colors duration-300">
        <div className="flex items-center gap-2 cursor-pointer">
          <div className="w-7 h-7 bg-blue-600 rounded-md flex items-center justify-center shadow-md">
            <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </div>
          <span className="text-lg font-bold text-gray-900 dark:text-white tracking-tight">Chronos</span>
        </div>

        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600 dark:text-gray-400">
          <a href="#features" className="hover:text-blue-600 dark:hover:text-blue-500 transition-colors">Product</a>
          <a href="#" className="hover:text-blue-600 dark:hover:text-blue-500 transition-colors">Solutions</a>
          <a href="#pricing" className="hover:text-blue-600 dark:hover:text-blue-500 transition-colors">Pricing</a>
        </nav>

        <div className="flex items-center gap-4">
          <ThemeToggle />
          <Link href="/login" className="text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">
            Sign in
          </Link>
          <Link href="/login" className="bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold px-4 py-2 rounded-md shadow-lg shadow-blue-600/10 dark:shadow-blue-600/20 transition-all duration-200">
            Get Started
          </Link>
        </div>
      </header>

      {/* --- HERO SECTION --- */}
      <section className="pt-32 pb-24 md:pt-40 md:pb-36 text-center px-4 relative overflow-hidden bg-radial from-gray-50 to-white dark:from-transparent dark:to-transparent">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-150 h-150 bg-linear-to-tr from-blue-500/10 to-indigo-500/5 dark:from-blue-600/20 dark:to-indigo-600/10 rounded-full blur-[120px] dark:blur-[140px] pointer-events-none transition-all duration-300"></div>

        <div className="max-w-4xl mx-auto relative z-10">
          <div className="inline-flex items-center gap-2 bg-gray-100 hover:bg-gray-200/70 dark:bg-white/5 dark:hover:bg-white/10 border border-gray-200 dark:border-white/10 text-gray-700 dark:text-gray-300 text-xs font-medium px-4 py-1.5 rounded-full mb-8 cursor-pointer transition-all">
            <span>Ensure to show Chronos 2.0</span>
            <span className="text-blue-600 dark:text-blue-400">➔</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-extrabold text-gray-900 dark:text-white tracking-tight mb-6 leading-[1.15]">
            One Tool For Doing it <br /> All Together
          </h1>

          <p className="text-gray-600 dark:text-gray-400 text-base sm:text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
            Chronos enables you to achieve clarity and significant results on a large scale by linking tasks and workflows to the overarching objectives of the company.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <Link href="/login" className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white font-medium text-sm px-6 py-3 rounded-lg shadow-lg shadow-blue-600/30 transition-all">
              Get Started
            </Link>
            <button className="w-full sm:w-auto bg-gray-50 hover:bg-gray-100 dark:bg-white/5 dark:hover:bg-white/10 text-gray-900 dark:text-white border border-gray-200 dark:border-white/10 font-medium text-sm px-6 py-3 rounded-lg transition-all">
              How It Works
            </button>
          </div>

          <div className="rounded-xl overflow-hidden p-2 border border-gray-200 dark:border-transparent shadow-xl dark:shadow-none bg-white dark:bg-transparent transition-all duration-300">
            <img src="/image.jpeg" alt="Profile" className="w-full h-full object-cover rounded-lg" />
          </div>
        </div>
      </section>

      {/* --- FEATURES SECTION --- */}
      <section id="features" className="bg-gray-50 dark:bg-[#060b18] py-24 px-6 md:px-10 border-t border-b border-gray-200 dark:border-white/5 relative transition-colors duration-300">
        <div className="max-w-6xl mx-auto">
          
          <div className="scroll-animate opacity-0 translate-y-8 transition-all duration-700 ease-out mb-16 max-w-2xl">
            <span className="text-xs font-bold tracking-wider text-blue-600 dark:text-blue-400 uppercase bg-blue-50 dark:bg-white/5 px-3 py-1 rounded-md border border-blue-100 dark:border-white/5">
              ⚡ Key Features
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mt-4 mb-4">
              Increase Productivity and Save Time
            </h2>
            <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base leading-relaxed">
              Supercharge productivity. Streamline work by doing it, and seeing it, in one place.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "Improve Collaboration",
                desc: "Boost teamwork and efficiency with our tools for dynamic collaboration. Communicate clearly and share documents in real-time.",
                lightBg: "bg-purple-50", lightText: "text-purple-600", darkBg: "dark:bg-purple-500/10", darkText: "dark:text-purple-400"
              },
              {
                title: "Enhance Visibility",
                desc: "Keep track of your projects and tasks with real-time updates. Our dashboard provides a comprehensive view of progress.",
                lightBg: "bg-blue-50", lightText: "text-blue-600", darkBg: "dark:bg-blue-500/10", darkText: "dark:text-blue-400"
              },
              {
                title: "Automate Work",
                desc: "Streamline your workflow by automating repetitive tasks. Our intelligent routines help you configure pipelines instantly.",
                lightBg: "bg-orange-50", lightText: "text-orange-600", darkBg: "dark:bg-orange-500/10", darkText: "dark:text-orange-400"
              }
            ].map((feature, idx) => (
              <div 
                key={idx} 
                className="scroll-animate opacity-0 translate-y-8 transition-all duration-700 ease-out bg-white dark:bg-white/2 border border-gray-200/70 dark:border-white/5 p-6 rounded-2xl shadow-xs dark:shadow-inner hover:shadow-md dark:hover:bg-white/4 hover:border-gray-300 dark:hover:border-white/10 transition-all group"
                style={{ transitionDelay: `${idx * 150}ms` }}
              >
                <div className={`w-10 h-10 ${feature.lightBg} ${feature.darkBg} ${feature.lightText} ${feature.darkText} rounded-lg flex items-center justify-center mb-6 font-bold group-hover:scale-105 transition-transform`}>
                  ⚡
                </div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3">{feature.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- PRICING SECTION --- */}
      <section id="pricing" className="bg-white dark:bg-[#030712] py-24 px-6 md:px-10 relative transition-colors duration-300">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <div className="scroll-animate opacity-0 translate-y-8 transition-all duration-700 ease-out max-w-xl">
              <span className="text-xs font-bold tracking-wider text-blue-600 dark:text-blue-400 uppercase bg-blue-50 dark:bg-white/5 px-3 py-1 rounded-md border border-blue-100 dark:border-white/5">
                💳 Pricing
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mt-4">
                Simple and Flexible Pricing
              </h2>
            </div>

            <div className="scroll-animate opacity-0 translate-y-8 transition-all duration-700 ease-out bg-gray-100 dark:bg-white/5 p-1 rounded-lg border border-gray-200 dark:border-white/5 self-start flex items-center gap-1">
              <button 
                onClick={() => setIsAnnual(false)} 
                className={`text-xs font-semibold px-3 py-1.5 rounded-md transition-all ${!isAnnual ? 'bg-blue-600 text-white shadow-md' : 'text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white'}`}
              >
                Monthly
              </button>
              <button 
                onClick={() => setIsAnnual(true)} 
                className={`text-xs font-semibold px-3 py-1.5 rounded-md transition-all ${isAnnual ? 'bg-blue-600 text-white shadow-md' : 'text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white'}`}
              >
                Annually
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
            {/* Personal Card */}
            <div className="scroll-animate opacity-0 translate-y-8 transition-all duration-700 ease-out bg-gray-50/50 dark:bg-white/1 border border-gray-200 dark:border-white/5 rounded-2xl p-8 flex flex-col justify-between relative backdrop-blur-md shadow-xs">
              <div>
                <p className="text-xs font-bold text-blue-500 dark:text-blue-400 uppercase tracking-wide mb-2">Personal</p>
                <div className="flex items-baseline gap-1 text-gray-900 dark:text-white mb-4">
                  <span className="text-4xl font-bold">${isAnnual ? "19" : "24"}</span>
                  <span className="text-xs text-gray-500 dark:text-gray-400 font-medium">/ per month</span>
                </div>
                <p className="text-gray-600 dark:text-gray-400 text-xs leading-relaxed mb-8 border-b border-gray-200 dark:border-white/5 pb-6">
                  For individuals and small teams seeking to manage tasks seamlessly.
                </p>
                <p className="text-gray-900 dark:text-white text-xs font-bold uppercase tracking-wider mb-4">This Plan Includes</p>
                <ul className="space-y-3 mb-8 text-xs text-gray-600 dark:text-gray-400">
                  <li className="flex items-center gap-2">✔ Unlimited workspaces</li>
                  <li className="flex items-center gap-2">✔ Bulk handling</li>
                  <li className="flex items-center gap-2">✔ AI Integration</li>
                </ul>
              </div>
              <Link href="/login" className="w-full text-center bg-white dark:bg-white/5 hover:bg-gray-50 dark:hover:bg-white/10 text-gray-900 dark:text-white text-xs font-semibold py-3 rounded-xl border border-gray-200 dark:border-white/10 transition-all shadow-xs">
                Get Started
              </Link>
            </div>

            {/* Pro Card */}
            <div className="scroll-animate opacity-0 translate-y-8 transition-all duration-700 ease-out bg-white dark:bg-[#080f21] rounded-2xl p-8 flex flex-col justify-between shadow-xl dark:shadow-2xl shadow-blue-600/5 dark:shadow-blue-500/5 border-2 border-blue-600 dark:border-blue-500/30 relative transform md:-translate-y-2 z-10 transition-all">
              <span className="absolute -top-3 right-6 bg-blue-600 text-white text-[10px] font-extrabold px-2.5 py-1 rounded-full shadow-md tracking-wider uppercase">
                Most Popular
              </span>
              <div>
                <p className="text-xs font-bold text-blue-500 dark:text-blue-400 uppercase tracking-wide mb-2">Pro</p>
                <div className="flex items-baseline gap-1 text-gray-900 dark:text-white mb-4">
                  <span className="text-4xl font-extrabold">${isAnnual ? "29" : "39"}</span>
                  <span className="text-xs text-gray-500 dark:text-gray-400 font-medium">/ per month</span>
                </div>
                <p className="text-gray-600 dark:text-gray-400 text-xs leading-relaxed mb-8 border-b border-gray-200 dark:border-white/5 pb-6">
                  For growing teams that need to robustly track complex project timelines.
                </p>
                <p className="text-gray-900 dark:text-white text-xs font-bold uppercase tracking-wider mb-4">Everything in Personal, Plus</p>
                <ul className="space-y-3 mb-8 text-xs text-gray-700 dark:text-gray-200">
                  <li className="flex items-center gap-2 text-blue-600 dark:text-blue-400 font-medium">✔ Email sequences</li>
                  <li className="flex items-center gap-2 text-blue-600 dark:text-blue-400 font-medium">✔ Send from multiple domains</li>
                  <li className="flex items-center gap-2 text-blue-600 dark:text-blue-400 font-medium">✔ Connect multiple accounts</li>
                </ul>
              </div>
              <Link href="/login" className="w-full text-center bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold py-3 rounded-xl shadow-lg shadow-blue-600/10 dark:shadow-blue-600/20 transition-all">
                Get Started
              </Link>
            </div>

            {/* Beyond Limits Card */}
            <div className="scroll-animate opacity-0 translate-y-8 transition-all duration-700 ease-out bg-gray-50/50 dark:bg-white/1 border border-gray-200 dark:border-white/5 rounded-2xl p-8 flex flex-col justify-between relative backdrop-blur-md shadow-xs">
              <div>
                <p className="text-xs font-bold text-purple-600 dark:text-purple-400 uppercase tracking-wide mb-2">Beyond Limits</p>
                <div className="flex items-baseline gap-1 text-gray-900 dark:text-white mb-4">
                  <span className="text-3xl font-bold">Custom Plan</span>
                </div>
                <p className="text-gray-600 dark:text-gray-400 text-xs leading-relaxed mb-8 border-b border-gray-200 dark:border-white/5 pb-6">
                  For corporations that need to manage a robust portfolio of cross-departmental operations.
                </p>
                <p className="text-gray-900 dark:text-white text-xs font-bold uppercase tracking-wider mb-4">Everything in Pro, Plus</p>
                <ul className="space-y-3 mb-8 text-xs text-gray-600 dark:text-gray-400">
                  <li className="flex items-center gap-2">✔ White-glove onboarding</li>
                  <li className="flex items-center gap-2">✔ Custom billing pipelines</li>
                  <li className="flex items-center gap-2">✔ Dedicated 24/7 support</li>
                </ul>
              </div>
              <Link href="/login" className="w-full text-center bg-white dark:bg-white/5 hover:bg-gray-50 dark:hover:bg-white/10 text-gray-900 dark:text-white text-xs font-semibold py-3 rounded-xl border border-gray-200 dark:border-white/10 transition-all shadow-xs">
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* --- SITE FOOTER --- */}
      <footer className="bg-gray-50 dark:bg-[#030712] border-t border-gray-200/80 dark:border-white/5 py-12 px-6 md:px-10 mt-auto transition-colors duration-300">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-8 mb-12">
          <div className="md:col-span-2">
            <span className="text-lg font-bold text-gray-900 dark:text-white tracking-tight block mb-3">Chronos</span>
            <p className="text-gray-600 dark:text-gray-400 text-xs leading-relaxed max-w-xs">
              The ultimate workspace for elite teams. Plan, track, and execute with precision.
            </p>
          </div>
          {["Company", "Product", "Legal", "Social"].map((column, i) => (
            <div key={i}>
              <h4 className="text-xs font-bold text-gray-900 dark:text-white tracking-wider uppercase mb-4">{column}</h4>
              <ul className="space-y-2 text-xs text-gray-600 dark:text-gray-400">
                <li><a href="#" className="hover:text-blue-600 dark:hover:text-blue-500 transition-colors">About</a></li>
                <li><a href="#" className="hover:text-blue-600 dark:hover:text-blue-500 transition-colors">Features</a></li>
                <li><a href="#" className="hover:text-blue-600 dark:hover:text-blue-500 transition-colors">Privacy</a></li>
                <li><a href="#" className="hover:text-blue-600 dark:hover:text-blue-500 transition-colors">Twitter</a></li>
              </ul>
            </div>
          ))}
        </div>
        <div className="max-w-6xl mx-auto border-t border-gray-200 dark:border-white/5 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-gray-500 font-medium">
          <p>© {new Date().getFullYear()} Chronos Inc. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-gray-900 dark:hover:text-gray-300 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-gray-900 dark:hover:text-gray-300 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-gray-900 dark:hover:text-gray-300 transition-colors">Cookies</a>
          </div>
        </div>
      </footer>
    </div>
  );
}