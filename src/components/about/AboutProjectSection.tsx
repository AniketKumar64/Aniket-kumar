"use client";

import React, { useRef } from "react";
import { FiGithub, FiExternalLink, FiActivity, FiArrowRight } from "react-icons/fi";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const projects = [
  {
    id: "SEC_01",
    year: "2026",
    title: "YantraAI",
    category: "NEURAL_INTERFACE",
    tags: ["Next.js", "Gemini Pro", "Prisma"],
    description: "An AI-powered website builder that autonomously generates functional websites from natural language prompts.",
    link: "#",
    github: "#"
  },
  {
    id: "SEC_02",
    year: "2026",
    title: "FineSet",
    category: "ENGINE_V3",
    tags: ["MERN Stack", "Redux", "Stripe"],
    description: "Full-stack e-commerce platform with secure checkout workflow and real-time inventory tracking.",
    link: "#",
    github: "#"
  },
  {
    id: "SEC_03",
    year: "2025",
    title: "Job Prep AI",
    category: "LMM_MODEL",
    tags: ["Next.js 15", "Gemini API", "Tailwind"],
    description: "AI-driven interview prep platform with real-time feedback loops and sentiment analysis.",
    link: "#",
    github: "#"
  },
  {
    id: "SEC_04",
    year: "2025",
    title: "Pixel Pulse",
    category: "RENDER_CORE",
    tags: ["Framer Motion", "React", "GSAP"],
    description: "Creative portfolio engine focusing on high-performance motion design and micro-interactions.",
    link: "#",
    github: "#"
  }
];

const ProjectTimeline = () => {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.from(".data-module", {
      opacity: 0,
      y: 40,
      stagger: 0.15,
      duration: 1,
      ease: "expo.out",
      scrollTrigger: {
        trigger: ".grid-system",
        start: "top 80%",
      }
    });
  }, { scope: container });

  return (
    <section ref={container} className="relative py-24 font-mono overflow-hidden">
      
      {/* HEADER */}
      <div className="max-w-7xl mx-auto px-6 mb-20">
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-slate-400/20 dark:border-white/10 pb-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00f2fe] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00f2fe]"></span>
              </span>
              <span className="text-[#00c2cc] dark:text-[#00f2fe] text-[10px] tracking-[0.4em] font-bold">PROJECT_REGISTRY_v.04</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter uppercase text-slate-900 dark:text-white">
              Data_Archives<span className="text-transparent" style={{ WebkitTextStroke: "1px #00f2fe" }}>.ZIP</span>
            </h2>
          </div>
          <div className="mt-6 md:mt-0 text-[10px] text-slate-400 dark:text-[#a8c1cf]/40 leading-relaxed uppercase">
            [ ARCHIVE_LOADED ]<br />
            [ CLASSIFICATION: TOP_SECRET ]
          </div>
        </div>
      </div>

      {/* GRID SYSTEM */}
      <div className="max-w-7xl mx-auto px-6 grid-system relative">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 pb-40">
          {projects.map((project, index) => {
            const colSpan = index === 0 ? "md:col-span-8" : index === 1 ? "md:col-span-4" : "md:col-span-6";
            return (
              <div 
                key={index} 
                className={`data-module ${colSpan} relative group overflow-hidden border border-slate-400/20 dark:border-white/10 bg-white/50 dark:bg-white/[0.01] p-6 md:p-10 transition-all duration-500 hover:border-[#00f2fe]/50`}
              >
                <div className="absolute top-0 right-0 p-4 opacity-[0.03] dark:opacity-[0.07] pointer-events-none group-hover:opacity-10 transition-opacity">
                  <FiActivity size={120} />
                </div>

                <div className="flex justify-between items-start mb-12 relative z-10">
                  <div className="space-y-1">
                    <div className="text-[#00f2fe] text-[10px] font-bold tracking-widest">{project.id}</div>
                    <div className="text-slate-400 dark:text-[#a8c1cf] text-[9px] opacity-60">REL_DATE: {project.year}</div>
                  </div>
                  <div className="flex gap-2">
                    <a href={project.github} className="p-2 border border-slate-400/10 dark:border-white/5 text-slate-400 hover:text-[#00f2fe] transition-colors"><FiGithub size={16} /></a>
                    <a href={project.link} className="p-2 border border-slate-400/10 dark:border-white/5 text-slate-400 hover:text-[#00f2fe] transition-colors"><FiExternalLink size={16} /></a>
                  </div>
                </div>

                <div className="mb-12 relative z-10">
                  <span className="text-[9px] px-2 py-0.5 bg-slate-400/10 dark:bg-white/5 text-slate-500 dark:text-[#8aa0b3] font-bold mb-2 inline-block border-l border-[#00f2fe]">{project.category}</span>
                  <h3 className="text-2xl md:text-4xl font-black text-slate-900 dark:text-white tracking-tighter uppercase mb-4 group-hover:translate-x-2 transition-transform duration-500">{project.title}</h3>
                  <p className="text-sm text-slate-600 dark:text-[#a8c1cf] max-w-xl leading-relaxed italic">{`> ${project.description}`}</p>
                </div>

                <div className="flex flex-wrap gap-4 border-t border-slate-400/10 dark:border-white/5 pt-6 relative z-10">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-[10px] text-slate-400 dark:text-[#00f2fe]/60 font-bold uppercase tracking-tighter">#{tag}</span>
                  ))}
                </div>
                <div className="absolute bottom-0 left-0 w-1 h-0 bg-[#00f2fe] group-hover:h-8 transition-all duration-300 origin-bottom" />
              </div>
            );
          })}
        </div>

        {/* --- BLUR FADE OVERLAY --- */}
        <div className="absolute bottom-0 left-0 w-full h-[350px] bg-gradient-to-t from-[#e0e7eb] via-[#e0e7eb]/80 to-transparent dark:from-[#030305] dark:via-[#030305]/80 pointer-events-none z-20 backdrop-blur-[2px]" />

        {/* --- SHOW ALL BUTTON --- */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-30">
          <Link href="/projects" className="group flex flex-col items-center gap-4 outline-none">
            <div className="px-8 py-4 bg-slate-900 dark:bg-white text-white dark:text-black font-bold text-[11px] tracking-[0.4em] uppercase transition-all duration-300 group-hover:bg-[#00f2fe] dark:group-hover:bg-[#00f2fe] group-hover:text-black group-hover:shadow-[0_0_30px_rgba(0,242,254,0.3)] flex items-center gap-3">
              ACCESS_FULL_ARCHIVE
              <FiArrowRight className="transition-transform group-hover:translate-x-1" />
            </div>
            <div className="text-[9px] text-[#00c2cc] animate-pulse tracking-widest font-bold">
              [ STATUS: 12_MORE_ENTRIES_FOUND ]
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProjectTimeline;