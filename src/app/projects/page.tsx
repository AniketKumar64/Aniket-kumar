"use client";

import React, { useState } from "react";
import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";

const projects = [
  {
    id: "01",
    title: "NEURAL_INTERFACE",
    tag: "NODE_ALPHA",
    tech: "MERN",
    image: null, // Replace with "/your-image.jpg"
    github: "#",
    live: "#",
  },
  {
    id: "02",
    title: "CRYPT_OS_V2",
    tag: "NODE_BETA",
    tech: "NEXTJS",
    image: null,
    github: "#",
    live: "#",
  },
  {
    id: "03",
    title: "HEX_PROTO_LABS",
    tag: "NODE_GAMMA",
    tech: "THREEJS",
    image: null,
    github: "#",
    live: "#",
  },
];

export default function ProjectPage() {

  return (
    <div
      className={`min-h-screen w-full font-mono transition-colors duration-700 ease-in-out selection:bg-[#00f2fe] selection:text-[#030305] 
        dark:bg-[#030305] dark:text-[#a8c1cf] bg-[#f0f2f5] text-[#1a1a1b]
      }`}
    >
  
      {/* HERO SECTION */}
      <header className="h-screen flex flex-col items-center justify-center relative overflow-hidden">
        {/* Decorative Background Hexagon */}
        <div className="absolute inset-0 flex items-center justify-center opacity-[0.05] pointer-events-none">
          <svg viewBox="0 0 100 100" className="w-[80vw] h-[80vw] animate-[spin_60s_linear_infinite]">
            <path
              d="M50 5 L90 27.5 L90 72.5 L50 95 L10 72.5 L10 27.5 Z"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.2"
            />
          </svg>
        </div>

        <div className="z-10 text-center px-4">
          <h1 className="text-6xl md:text-[10rem] font-black tracking-tighter leading-none transition-transform duration-1000 hover:scale-[1.02]">
            PROJECTS<span className="text-[#00f2fe]">.</span>
          </h1>
          <p className="mt-8 text-[10px] md:text-xs tracking-[1em] uppercase opacity-40">
            System_Deployments_Index
          </p>
        </div>
      </header>

      {/* PROJECT FEED */}
      <main className="max-w-7xl mx-auto px-6 pb-40 space-y-64 md:space-y-96">
        {projects.map((p, i) => (
          <div
            key={p.id}
            className={`group flex flex-col md:flex-row items-center min-h-screen justify-between gap-12 md:gap-20 ${
              i % 2 !== 0 ? "md:flex-row-reverse" : ""
            }`}
          >
            {/* CONTENT COLUMN */}
            <div className="w-full md:w-1/2 transition-all duration-700 transform group-hover:-translate-y-2">
              <div className="flex items-center gap-4 mb-6">
                <span className="text-[#00f2fe] text-xs font-bold tracking-widest">[{p.id}]</span>
                <div className={`h-[1px] flex-grow opacity-10 bg-[#a8c1cf] dark:bg-[#1a1a1b]`} />
              </div>

              <h2 className="text-4xl md:text-7xl font-bold tracking-tighter mb-6 uppercase transition-colors group-hover:text-[#00f2fe]">
                {p.title}
              </h2>

              <div className="flex flex-wrap items-center gap-4 mb-8">
                <span className="px-3 py-1 border border-current text-[9px] uppercase tracking-widest">
                  {p.tech}
                </span>
                <span className="px-3 py-1 bg-[#00f2fe] text-[#030305] text-[9px] font-bold uppercase tracking-widest">
                  Active
                </span>

                <div className="flex items-center gap-4 ml-2 text-xl opacity-40 group-hover:opacity-100 transition-opacity">
                  <a href={p.github} className="hover:text-[#00f2fe] transition-colors"><FaGithub /></a>
                  <a href={p.live} className="hover:text-[#00f2fe] transition-colors"><FiExternalLink /></a>
                </div>
              </div>

              <p className="text-sm opacity-60 leading-relaxed max-w-sm mb-10">
                Architectural deconstruction of modular system components. Optimized for low-latency data flow.
              </p>

              <a
                href={p.live}
                className="inline-flex items-center gap-6 group/btn"
              >
                <div className="w-10 h-10 border border-current flex items-center justify-center transition-all group-hover/btn:border-[#00f2fe] group-hover/btn:bg-[#00f2fe]">
                  <div className="w-1.5 h-1.5 bg-[#00f2fe] group-hover/btn:bg-[#030305]" />
                </div>
                <span className="text-[10px] tracking-[0.5em] uppercase font-bold group-hover/btn:text-[#00f2fe]">
                  Init_Module
                </span>
              </a>
            </div>

            {/* VISUAL COLUMN */}
            <div className="w-full md:w-[45%] aspect-square relative group/visual overflow-hidden">
              {/* Frame Border */}
              <div className="absolute inset-0 border border-current opacity-10 transition-opacity group-hover/visual:opacity-30" />
              
              <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
                {p.image ? (
                  <img
                    src={p.image}
                    alt={p.title}
                    className="w-full h-full object-cover opacity-40 grayscale group-hover/visual:grayscale-0 group-hover/visual:opacity-100 transition-all duration-1000 scale-110 group-hover/visual:scale-100"
                  />
                ) : (
                  <div className="relative">
                    <svg viewBox="0 0 100 100" className="w-48 h-48 transition-transform duration-700 group-hover/visual:rotate-90">
                      <path
                        d="M50 5 L90 27.5 L90 72.5 L50 95 L10 72.5 L10 27.5 Z"
                        fill="none"
                        stroke={"#00f2fe"}
                        strokeWidth="0.5"
                        className="opacity-40"
                      />
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center">
                       <div className="w-1 h-1 bg-[#00f2fe] animate-pulse shadow-[0_0_8px_#00f2fe]" />
                    </div>
                  </div>
                )}
              </div>

              {/* HUD Overlay Tags */}
              <div className={`absolute bottom-6 p-2 backdrop-blur-sm bg-black/20 text-[9px] ${i % 2 !== 0 ? "left-6" : "right-6 text-right"}`}>
                <div className="opacity-40 uppercase tracking-tighter">Sector_Tag</div>
                <div className="text-[#00f2fe] font-bold">{p.tag}</div>
              </div>
            </div>
          </div>
        ))}
      </main>

      {/* HUD FOOTER */}
      <footer className={`p-10 border-t transition-colors duration-700 border-[#a8c1cf]/10 dark:border-[#1a1a1b]/10 flex justify-between items-center text-[10px] opacity-50 tracking-widest`}>
        <div className="flex gap-8">
          <span>© 2026 // FREELANCE_OS</span>
          <span className="hidden md:inline">ENCRYPTION: AES_256</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-[#00f2fe] animate-pulse" />
          <span>STATUS_STABLE</span>
        </div>
      </footer>
    </div>
  );
}