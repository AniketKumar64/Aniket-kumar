"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const Projects = () => {
  const container = useRef<HTMLDivElement>(null);

  const projects = [
    {
      year: "2024",
      title: "Vortex_Engine",
      category: "System Architecture",
      tech: ["Rust", "Wasm", "WebGPU"],
      id: "PRJ-001"
    },
    {
      year: "2023",
      title: "Neural_Link_UI",
      category: "Kinetic Interface",
      tech: ["Next.js", "GSAP", "Three.js"],
      id: "PRJ-002"
    },
    {
      year: "2023",
      title: "Cryo_Finance",
      category: "Full Stack",
      tech: ["Go", "PostgreSQL", "Redis"],
      id: "PRJ-003"
    }
  ];

  useGSAP(() => {
    const rows = gsap.utils.toArray(".project-row");

    rows.forEach((row: any) => {
      const title = row.querySelector("h4");
      const meta = row.querySelectorAll(".project-meta");
      const line = row.querySelector(".row-line");

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: row,
          start: "top 92%",
          toggleActions: "play none none reverse",
        },
      });

      tl.from(row, {
        opacity: 0,
        x: -40,
        skewX: -5,
        duration: 1,
        ease: "power3.out",
      })
      .from(line, {
        scaleX: 0,
        transformOrigin: "left",
        duration: 1.5,
        ease: "expo.inOut",
      }, "-=0.8")
      .from(title, {
        opacity: 0,
        letterSpacing: "0.8em",
        duration: 1.2,
        ease: "expo.out",
      }, "-=1")
      .from(meta, {
        opacity: 0,
        y: 15,
        stagger: 0.05,
        duration: 0.8,
        ease: "power2.out",
      }, "-=1");
    });
  }, { scope: container });

  return (
    <section 
      ref={container} 
      className="relative w-full bg-[#030305] text-[#d6e4ff] py-24 md:py-40 px-8 md:px-20 border-t border-[#d6e4ff]/10 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header Section */}
        <div className="mb-24 space-y-4">
          <h2 className="text-[10px] uppercase tracking-[0.8em] text-[#00f2fe] font-black">
            03 — SELECTED_WORKS
          </h2>
          <h3 className="text-4xl md:text-7xl font-light tracking-tighter uppercase">
            Digital <span className="font-black text-[#00f2fe] italic">Artifacts</span>
          </h3>
        </div>

        {/* Project List */}
        <div className="project-list flex flex-col">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="project-row group relative flex flex-col md:flex-row md:items-center justify-between py-12 cursor-pointer"
            >
              {/* Bottom Line for Row */}
              <div className="row-line absolute bottom-0 left-0 w-full h-[1px] bg-[#d6e4ff]/10 group-hover:bg-[#00f2fe]/40 transition-colors duration-500" />

              {/* ID & Year */}
              <div className="project-meta flex items-center gap-8 md:w-1/4">
                <span className="text-[10px] font-mono text-[#00f2fe] font-bold">
                  {project.id}
                </span>
                <span className="text-sm font-mono opacity-20 group-hover:opacity-100 transition-opacity">
                  [{project.year}]
                </span>
              </div>

              {/* Title & Category */}
              <div className="flex-1 mt-4 md:mt-0">
                <h4 className="text-3xl md:text-5xl font-black tracking-tighter uppercase transition-all duration-700 group-hover:text-[#00f2fe] group-hover:translate-x-6">
                  {project.title}
                </h4>
                <p className="project-meta text-[10px] font-mono uppercase tracking-[0.3em] opacity-40 mt-2 group-hover:opacity-100 transition-opacity">
                  // {project.category}
                </p>
              </div>

              {/* Tech Stack Tags */}
              <div className="project-meta flex flex-wrap gap-2 mt-6 md:mt-0 md:w-1/4 md:justify-end">
                {project.tech.map((t) => (
                  <span key={t} className="text-[9px] font-mono border border-[#d6e4ff]/10 px-3 py-1 rounded-full opacity-40 group-hover:border-[#00f2fe]/40 group-hover:text-[#00f2fe] transition-all">
                    {t}
                  </span>
                ))}
              </div>

              {/* Hover Image Preview (The "Ghost" Box) */}
              <div className="absolute right-[15%] top-1/2 -translate-y-1/2 w-64 h-40 bg-[#00f2fe]/5 opacity-0 group-hover:opacity-100 pointer-events-none transition-all duration-700 hidden lg:block scale-90 group-hover:scale-100 translate-x-10 group-hover:translate-x-0 overflow-hidden border border-[#00f2fe]/30 backdrop-blur-md">
                 {/* Visual Glitch Elements */}
                 <div className="absolute inset-0 bg-gradient-to-br from-[#00f2fe]/10 to-transparent z-10" />
                 <div className="absolute top-2 right-2 text-[8px] font-mono text-[#00f2fe] animate-pulse">LIVE_FEED ●</div>
                 <div className="absolute bottom-3 left-3 text-[9px] font-mono text-[#00f2fe] uppercase tracking-tighter z-20">
                    Source: {project.id}_RENDER
                 </div>
                 {/* Placeholder for noise/image */}
                 <div className="w-full h-full bg-[#00f2fe]/5 flex items-center justify-center">
                    <div className="w-full h-[1px] bg-[#00f2fe]/20 animate-scan" />
                 </div>
              </div>

              {/* Background Ghost Text */}
              <div className="absolute left-0 bottom-4 text-[10vw] font-black opacity-0 group-hover:opacity-[0.03] pointer-events-none transition-all duration-1000 select-none uppercase -z-10 tracking-widest group-hover:translate-x-20">
                {project.title}
              </div>
            </div>
          ))}
        </div>

        {/* Footer Button */}
        <div className="mt-32 flex justify-center">
          <button className="group relative px-16 py-5 border border-[#d6e4ff]/10 overflow-hidden transition-all duration-500 hover:border-[#00f2fe]/50">
            <span className="relative z-10 text-[11px] font-mono font-bold uppercase tracking-[0.6em] group-hover:text-[#030305] transition-colors duration-500">
              Access_All_Files
            </span>
            <div className="absolute inset-0 bg-[#00f2fe] -translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out" />
          </button>
        </div>
      </div>

      {/* Large Decorative Vertical Text */}
      <div className="absolute left-4 top-1/2 -translate-y-1/2 text-[10px] font-mono uppercase tracking-[1em] opacity-20 [writing-mode:vertical-rl] pointer-events-none">
        Archived_Protocols_2026
      </div>
    </section>
  );
};

export default Projects;