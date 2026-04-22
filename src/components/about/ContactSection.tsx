"use client";

import React from "react";
import { FiMail, FiLinkedin, FiGithub, FiArrowUpRight, FiCpu, FiActivity } from "react-icons/fi";

const AboutContact = () => {
  const links = [
    { 
      id: "01", 
      title: "GITHUB", 
      value: "aniketkumar", 
      url: "https://github.com/Aniketkumar64", 
      icon: <FiGithub />,
      tag: "SOURCE_CONTROL"
    },
    { 
      id: "02", 
      title: "LINKEDIN", 
      value: "in/aniketkumarmourya", 
      url: "https://linkedin.com/in/AniketKumarMourya", 
      icon: <FiLinkedin />,
      tag: "NET_PROTOCOL"
    },
    { 
      id: "03", 
      title: "EMAIL", 
      value: "kumaraniket20805@gmail.com", 
      url: "mailto:kumaraniket20805@gmail.com", 
      icon: <FiMail />,
      tag: "SMTP_SYNC"
    },
  ];

  return (
    <footer className="relative bg-[#e0e7eb] dark:bg-[#030305] text-slate-800 dark:text-[#d6e4ff] pt-40 pb-12 px-6 md:px-20 font-sans overflow-hidden transition-colors duration-300">
      
      {/* --- BACKGROUND GLITCH TEXT --- */}
      <div className="absolute top-0 right-0 text-[25vw] font-black text-slate-400/5 dark:text-white/[0.01] select-none pointer-events-none leading-none translate-x-1/4">
        LINK
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* --- HEADER --- */}
        <div className="mb-24 flex flex-col md:flex-row md:items-end justify-between border-b border-slate-400/20 dark:border-white/5 pb-12 gap-6">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <FiActivity className="text-[#00c2cc] dark:text-[#00f2fe] animate-pulse" />
              <span className="text-[10px] font-mono tracking-[0.5em] uppercase opacity-60">Terminal_Handshake_v4</span>
            </div>
            <h2 className="text-5xl md:text-8xl font-black uppercase tracking-tighter text-slate-900 dark:text-white">
              CONNECT<span className="text-slate-400 dark:text-white/20">.</span>
            </h2>
          </div>
          <div className="text-left md:text-right font-mono text-[9px] opacity-40 uppercase tracking-widest leading-loose">
            {`Status: Listening_For_Signals`}<br/>
            {`Port: 2026_Active`}
          </div>
        </div>

        {/* --- INTERACTIVE LINKS --- */}
        <div className="flex flex-col">
          {links.map((link) => (
            <a
              key={link.id}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex flex-col md:flex-row  md:items-center md:justify-between py-12 border-b border-slate-400/20 dark:border-white/5 transition-all duration-500 overflow-hidden"
            >
              {/* Hover Background Flash - Responsive to theme */}
              <div className="absolute inset-0 bg-slate-900 dark:bg-white scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-bottom" />

              <div className="relative z-10 flex items-center gap-8 text-slate-900 dark:text-white group-hover:text-white dark:group-hover:text-black transition-colors duration-500">
                <span className="font-mono text-xs opacity-30">[{link.id}]</span>
                <h3 className="text-5xl md:text-8xl font-black tracking-tighter uppercase">
                  {link.title}
                </h3>
              </div>

              <div className="hidden relative z-10 mt-6 md:mt-0 md:flex items-center gap-10 text-slate-700 dark:text-[#d6e4ff] group-hover:text-white dark:group-hover:text-black transition-colors duration-500">
                <div className="hidden md:block text-right font-mono">
                  <span className="block text-[9px] tracking-widest opacity-50 uppercase mb-1">{link.tag}</span>
                  <span className="block text-sm font-bold uppercase">{link.value}</span>
                </div>
                <div className="p-4 border border-slate-400/30 dark:border-white/10 group-hover:border-white/40 dark:group-hover:border-black/20 text-2xl">
                  {link.icon}
                </div>
                <FiArrowUpRight className="text-4xl opacity-0 group-hover:opacity-100 transition-all -translate-x-4 group-hover:translate-x-0" />
              </div>
            </a>
          ))}
        </div>

        {/* --- SYSTEM FOOTER --- */}
        <div className="mt-40 flex flex-col md:flex-row justify-between items-start md:items-end gap-12 border-t border-slate-400/10 dark:border-white/5 pt-12">
          
          <div className="space-y-6">
            <div className="flex items-center gap-4 text-[#00c2cc] dark:text-[#00f2fe]">
              <FiCpu className="animate-spin-slow" style={{ animationDuration: '6s' }} />
              <span className="font-mono text-[10px] tracking-[0.4em] font-bold uppercase">System_Architect_Registered</span>
            </div>
            <p className="text-[11px] font-black uppercase tracking-[0.3em] opacity-60">
              Aniket Kumar Mourya &copy; 2026 — All Rights Reserved
            </p>
          </div>

          <div className="flex gap-12 font-mono text-[9px] uppercase tracking-widest opacity-40">
            <div className="flex flex-col gap-2">
              <span>Latency: 24ms</span>
              <span>Uptime: 99.99%</span>
            </div>
            <div className="flex flex-col gap-2 text-right">
              <span>Environment: Production</span>
              <span>Build: v4.2.0</span>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default AboutContact;