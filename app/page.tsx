"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function LandingPage() {
  const [isAnnual, setIsAnnual] = useState(false);

  // Native Intersection Observer for scroll animations
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
    <div className="min-h-screen flex flex-col bg-[#030712] font-sans antialiased text-gray-100 selection:bg-blue-600 selection:text-white overflow-x-hidden">
      
      {/* Top Header Navigation (Dark Overhaul) */}
      <header className="w-full border-b border-white/5 fixed top-0 z-50 px-6 py-4 flex items-center justify-between backdrop-blur-md bg-[#030712]/80">
        <div className="flex items-center gap-2 cursor-pointer">
          <div className="w-7 h-7 bg-blue-600 rounded-md flex items-center justify-center shadow-md">
            <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <span className="text-lg font-bold text-white tracking-tight">Chronos</span>
        </div>

        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-400">
          <a href="#features" className="hover:text-blue-500 transition-colors">Product</a>
          <a href="#" className="hover:text-blue-500 transition-colors">Solutions</a>
          <a href="#" className="hover:text-blue-500 transition-colors">Resources</a>
          <a href="#pricing" className="hover:text-blue-500 transition-colors">Pricing</a>
        </nav>

        <div className="flex items-center gap-4">
          <Link href="/login" className="text-sm font-medium text-gray-400 hover:text-white transition-colors">
            Sign in
          </Link>
          <Link href="/login" className="bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold px-4 py-2 rounded-md shadow-lg shadow-blue-600/20 transition-all duration-200">
            Get Started
          </Link>
        </div>
      </header>

      {/* --- HERO SECTION --- */}
      <section className="pt-32 pb-24 md:pt-40 md:pb-36 text-center px-4 relative overflow-hidden">
        {/* Abstract Glowing Background Layers */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-blue-600/20 to-indigo-600/10 rounded-full blur-[140px] pointer-events-none"></div>

        <div className="max-w-4xl mx-auto relative z-10">
          {/* Badge indicator */}
          <div className="inline-flex items-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 text-gray-300 text-xs font-medium px-4 py-1.5 rounded-full mb-8 cursor-pointer transition-all">
            <span>Ensure to show Chronos 2.0</span>
            <span className="text-blue-400">➔</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight mb-6 leading-[1.15]">
            One Tool For Doing it <br /> All Together
          </h1>

          <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
            Chronos enables you to achieve clarity and significant results on a large scale by linking tasks and workflows to the overarching objectives of the company.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <Link href="/login" className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white font-medium text-sm px-6 py-3 rounded-lg shadow-lg shadow-blue-600/30 transition-all">
              Get Started
            </Link>
            <button className="w-full sm:w-auto bg-white/5 hover:bg-white/10 text-white border border-white/10 font-medium text-sm px-6 py-3 rounded-lg transition-all">
              How It Works
            </button>
          </div>

          {/* Tablet Showcase Container */}
          <div className="scroll-animate opacity-0 translate-y-8 transition-all duration-1000 ease-out max-w-4xl mx-auto rounded-2xl bg-gradient-to-b from-white/10 to-transparent p-2 border border-white/10 shadow-2xl shadow-blue-950/50">
            <div className="bg-[#070c18] aspect-[16/10] rounded-xl border border-white/5 overflow-hidden p-4 relative flex flex-col">
              
              {/* Tablet Header Mock */}
              <div className="flex items-center justify-between border-b border-white/5 pb-3 mb-4">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 bg-blue-600 rounded-md flex items-center justify-center text-[10px] font-bold text-white">C</div>
                  <span className="text-xs font-medium text-gray-400">CHRONOS WORKSPACE</span>
                </div>
                <div className="w-20 h-4 bg-white/5 rounded-full"></div>
              </div>

              {/* Tablet Body Layout */}
              <div className="flex-1 grid grid-cols-[160px_1fr] gap-4 text-left">
                {/* Profile Card Mockup */}
                <div className="bg-white/[0.02] border border-white/5 rounded-xl p-3 flex flex-col items-center justify-center text-center">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-orange-400 to-amber-500 mb-2 border border-white/10 shadow-md"></div>
                  <p className="text-xs font-bold text-white">GIRGIS MAS.</p>
                  <p className="text-[10px] text-gray-500">Director of Operations</p>
                </div>

                {/* Timeline Visual Mockup */}
                <div className="space-y-2 flex flex-col justify-between py-1">
                  {[
                    { w: "w-[85%]", color: "bg-blue-500/80" },
                    { w: "w-[60%]", color: "bg-cyan-500/80" },
                    { w: "w-[75%]", color: "bg-indigo-500/80" },
                    { w: "w-[45%]", color: "bg-purple-500/80" }
                  ].map((item, idx) => (
                    <div key={idx} className="h-6 bg-white/[0.02] border border-white/5 rounded-md flex items-center px-2">
                      <div className={`h-2.5 rounded-full ${item.color} ${item.w} shadow-sm shadow-blue-500/20`}></div>
                    </div>
                  ))}
                  {/* Area Chart Wave Line */}
                  <div className="h-12 w-full bg-gradient-to-t from-blue-500/10 to-transparent rounded-lg border-t border-blue-500/30 mt-2 relative overflow-hidden">
                    <svg className="absolute bottom-0 w-full h-8 text-blue-500/40" viewBox="0 0 100 100" preserveAspectRatio="none">
                      <path d="M0,50 Q25,20 50,70 T100,30 L100,100 L0,100 Z" fill="currentColor"></path>
                    </svg>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* --- FEATURES SECTION (Dark Shift) --- */}
      <section id="features" className="bg-[#060b18] py-24 px-6 md:px-10 border-t border-b border-white/5 relative">
        <div className="max-w-6xl mx-auto">
          
          <div className="scroll-animate opacity-0 translate-y-8 transition-all duration-700 ease-out mb-16 max-w-2xl">
            <span className="text-xs font-bold tracking-wider text-blue-400 uppercase bg-white/5 px-3 py-1 rounded-md border border-white/5">
              ⚡ Key Features
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mt-4 mb-4">
              Increase Productivity and Save Time
            </h2>
            <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
              Supercharge productivity. Streamline work by doing it, and seeing it, in one place.
            </p>
          </div>

          {/* Features Grids */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "Improve Collaboration",
                desc: "Boost teamwork and efficiency with our tools for dynamic collaboration. Communicate clearly and share documents in real-time.",
                bg: "bg-purple-500/10", text: "text-purple-400"
              },
              {
                title: "Enhance Visibility",
                desc: "Keep track of your projects and tasks with real-time updates. Our dashboard provides a comprehensive view of progress.",
                bg: "bg-blue-500/10", text: "text-blue-400"
              },
              {
                title: "Automate Work",
                desc: "Streamline your workflow by automating repetitive tasks. Our intelligent routines help you configure pipelines instantly.",
                bg: "bg-orange-500/10", text: "text-orange-400"
              }
            ].map((feature, idx) => (
              <div 
                key={idx} 
                className="scroll-animate opacity-0 translate-y-8 transition-all duration-700 ease-out bg-white/[0.02] border border-white/5 p-6 rounded-2xl shadow-inner hover:bg-white/[0.04] hover:border-white/10 transition-all group"
                style={{ transitionDelay: `${idx * 150}ms` }}
              >
                <div className={`w-10 h-10 ${feature.bg} ${feature.text} rounded-lg flex items-center justify-center mb-6 font-bold group-hover:scale-105 transition-transform`}>
                  ⚡
                </div>
                <h3 className="text-lg font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* --- PRICING SECTION --- */}
      <section id="pricing" className="bg-[#030712] py-24 px-6 md:px-10 relative">
        <div className="max-w-6xl mx-auto">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <div className="scroll-animate opacity-0 translate-y-8 transition-all duration-700 ease-out max-w-xl">
              <span className="text-xs font-bold tracking-wider text-blue-400 uppercase bg-white/5 px-3 py-1 rounded-md border border-white/5">
                💳 Pricing
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mt-4">
                Simple and Flexible Pricing
              </h2>
            </div>

            {/* Switcher */}
            <div className="scroll-animate opacity-0 translate-y-8 transition-all duration-700 ease-out bg-white/5 p-1 rounded-lg border border-white/5 self-start flex items-center gap-1">
              <button 
                onClick={() => setIsAnnual(false)} 
                className={`text-xs font-semibold px-3 py-1.5 rounded-md transition-all ${!isAnnual ? 'bg-blue-600 text-white shadow-md' : 'text-gray-400 hover:text-white'}`}
              >
                Monthly
              </button>
              <button 
                onClick={() => setIsAnnual(true)} 
                className={`text-xs font-semibold px-3 py-1.5 rounded-md transition-all ${isAnnual ? 'bg-blue-600 text-white shadow-md' : 'text-gray-400 hover:text-white'}`}
              >
                Annually
              </button>
            </div>
          </div>

          {/* Pricing Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
            
            {/* Card 1: Personal */}
            <div className="scroll-animate opacity-0 translate-y-8 transition-all duration-700 ease-out bg-white/[0.01] border border-white/5 rounded-2xl p-8 flex flex-col justify-between relative backdrop-blur-md">
              <div>
                <p className="text-xs font-bold text-blue-400 uppercase tracking-wide mb-2">Personal</p>
                <div className="flex items-baseline gap-1 text-white mb-4">
                  <span className="text-4xl font-bold">${isAnnual ? "19" : "24"}</span>
                  <span className="text-xs text-gray-400 font-medium">/ per month</span>
                </div>
                <p className="text-gray-400 text-xs leading-relaxed mb-8 border-b border-white/5 pb-6">
                  For individuals and small teams seeking to manage tasks seamlessly.
                </p>
                
                <p className="text-white text-xs font-bold uppercase tracking-wider mb-4">This Plan Includes</p>
                <ul className="space-y-3 mb-8 text-xs text-gray-400">
                  <li className="flex items-center gap-2">✔ Unlimited workspaces</li>
                  <li className="flex items-center gap-2">✔ Bulk handling</li>
                  <li className="flex items-center gap-2">✔ AI Integration</li>
                </ul>
              </div>
              <Link href="/login" className="w-full text-center bg-white/5 hover:bg-white/10 text-white text-xs font-semibold py-3 rounded-xl border border-white/10 transition-all">
                Get Started
              </Link>
            </div>

            {/* Card 2: Pro (Premium Deep Obsidian Highlight) */}
            <div className="scroll-animate opacity-0 translate-y-8 transition-all duration-700 ease-out bg-[#080f21] rounded-2xl p-8 flex flex-col justify-between shadow-2xl shadow-blue-500/5 border border-blue-500/30 relative transform md:-translate-y-2 z-10">
              <span className="absolute -top-3 right-6 bg-blue-600 text-white text-[10px] font-extrabold px-2.5 py-1 rounded-full shadow-md tracking-wider uppercase">
                Most Popular
              </span>
              <div>
                <p className="text-xs font-bold text-blue-400 uppercase tracking-wide mb-2">Pro</p>
                <div className="flex items-baseline gap-1 text-white mb-4">
                  <span className="text-4xl font-extrabold">${isAnnual ? "29" : "39"}</span>
                  <span className="text-xs text-gray-400 font-medium">/ per month</span>
                </div>
                <p className="text-gray-400 text-xs leading-relaxed mb-8 border-b border-white/5 pb-6">
                  For growing teams that need to robustly track complex project timelines.
                </p>
                
                <p className="text-white text-xs font-bold uppercase tracking-wider mb-4">Everything in Personal, Plus</p>
                <ul className="space-y-3 mb-8 text-xs text-gray-200">
                  <li className="flex items-center gap-2 text-blue-400 font-medium">✔ Email sequences</li>
                  <li className="flex items-center gap-2 text-blue-400 font-medium">✔ Send from multiple domains</li>
                  <li className="flex items-center gap-2 text-blue-400 font-medium">✔ Connect multiple accounts</li>
                </ul>
              </div>
              <Link href="/login" className="w-full text-center bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold py-3 rounded-xl shadow-lg shadow-blue-600/20 transition-all">
                Get Started
              </Link>
            </div>

            {/* Card 3: Beyond Limits */}
            <div className="scroll-animate opacity-0 translate-y-8 transition-all duration-700 ease-out bg-white/[0.01] border border-white/5 rounded-2xl p-8 flex flex-col justify-between relative backdrop-blur-md">
              <div>
                <p className="text-xs font-bold text-purple-400 uppercase tracking-wide mb-2">Beyond Limits</p>
                <div className="flex items-baseline gap-1 text-white mb-4">
                  <span className="text-3xl font-bold">Custom Plan</span>
                </div>
                <p className="text-gray-400 text-xs leading-relaxed mb-8 border-b border-white/5 pb-6">
                  For corporations that need to manage a robust portfolio of cross-departmental operations.
                </p>
                
                <p className="text-white text-xs font-bold uppercase tracking-wider mb-4">Everything in Pro, Plus</p>
                <ul className="space-y-3 mb-8 text-xs text-gray-400">
                  <li className="flex items-center gap-2">✔ White-glove onboarding</li>
                  <li className="flex items-center gap-2">✔ Custom billing pipelines</li>
                  <li className="flex items-center gap-2">✔ Dedicated 24/7 support</li>
                </ul>
              </div>
              <Link href="/login" className="w-full text-center bg-white/5 hover:bg-white/10 text-white text-xs font-semibold py-3 rounded-xl border border-white/10 transition-all">
                Get Started
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* --- SITE FOOTER (Dark-Clean Alignment) --- */}
      <footer className="bg-[#030712] border-t border-white/5 py-12 px-6 md:px-10 mt-auto">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-8 mb-12">
          
          <div className="md:col-span-2">
            <span className="text-lg font-bold text-white tracking-tight block mb-3">Chronos</span>
            <p className="text-gray-400 text-xs leading-relaxed max-w-xs">
              The ultimate workspace for elite teams. Plan, track, and execute with precision.
            </p>
          </div>

          {["Company", "Product", "Legal", "Social"].map((column, i) => (
            <div key={i}>
              <h4 className="text-xs font-bold text-white tracking-wider uppercase mb-4">{column}</h4>
              <ul className="space-y-2 text-xs text-gray-400">
                <li><a href="#" className="hover:text-blue-500 transition-colors">About</a></li>
                <li><a href="#" className="hover:text-blue-500 transition-colors">Features</a></li>
                <li><a href="#" className="hover:text-blue-500 transition-colors">Privacy</a></li>
                <li><a href="#" className="hover:text-blue-500 transition-colors">Twitter</a></li>
              </ul>
            </div>
          ))}
        </div>

        <div className="max-w-6xl mx-auto border-t border-white/5 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-gray-500 font-medium">
          <p>© {new Date().getFullYear()} Chronos Inc. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-gray-300">Privacy Policy</a>
            <a href="#" className="hover:text-gray-300">Terms of Service</a>
            <a href="#" className="hover:text-gray-300">Cookies</a>
          </div>
        </div>
      </footer>

    </div>
  );
}