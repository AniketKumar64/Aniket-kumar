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
      year: "2026",
      title: "YantraAI",
      category: "AI System",
      tech: ["React", "PostgreSQL", "Gemini API", "Stripe"],
      id: "PRJ-001",
      live: "https://yantra-ai-527j.vercel.app/",
    },
    {
      year: "2026",
      title: "FineSet",
      category: "Full Stack E-Commerce",
      tech: ["Next.js", "Express", "MongoDB", "JWT"],
      id: "PRJ-002",
      live: "https://fineset-demo.vercel.app/",
    },
    {
      year: "2026",
      title: "Splyt",
      category: "Modern UI Interface",
      tech: ["React", "Tailwind", "GSAP"],
      id: "PRJ-003",
      live: "https://splyt-3hfu.vercel.app/",
    }
  ];

  useGSAP(() => {
    const rows = gsap.utils.toArray(".project-row");
    rows.forEach((row: any) => {
      const line = row.querySelector(".row-line");
      const elements = row.querySelectorAll(".anim-in");

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: row,
          start: "top 92%",
          toggleActions: "play none none reverse",
        },
      });

      tl.from(line, {
        scaleX: 0,
        transformOrigin: "left",
        duration: 1.5,
        ease: "expo.inOut",
      })
      .from(elements, {
        opacity: 0,
        y: 20,
        stagger: 0.1,
        duration: 1,
        ease: "power3.out",
      }, "-=1");
    });
  }, { scope: container });

  return (
    <section 
      ref={container} 
      className="relative w-full bg-[#030305] text-[#d6e4ff] py-24 md:py-40 px-8 md:px-20 border-t border-[#d6e4ff]/10 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header */}
        <div className="mb-24 space-y-4">
          <h2 className="text-[10px] uppercase tracking-[0.8em] text-primary font-black">
            03 — SELECTED_WORKS
          </h2>
          <h3 className="text-4xl md:text-7xl font-light tracking-tighter uppercase">
            Digital <span className="font-black text-primary italic">Artifacts</span>
          </h3>
        </div>
        

        {/* Project List */}
        <div className="flex flex-col">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="project-row group relative grid grid-cols-1 md:grid-cols-3 items-center py-12 md:py-16 cursor-pointer"
            >
              {/* Row Line */}
              <div className="row-line absolute bottom-0 left-0 w-full h-[1px] bg-[#d6e4ff]/10 group-hover:bg-primary/40 transition-colors duration-500" />

              {/* 1. Left Section: ID & Year */}
              <div className="anim-in flex items-center gap-8 order-2 md:order-1 mt-6 md:mt-0">
                <span className="text-[10px] font-mono text-primary font-bold">{project.id}</span>
                <span className="text-sm font-mono opacity-20 group-hover:opacity-100 transition-opacity">[{project.year}]</span>
              </div>

              {/* 2. Middle Section: Centered Title */}
              <div className="anim-in flex flex-col items-center justify-center order-1 md:order-2 text-center">
                <h4 className="text-4xl md:text-6xl font-black tracking-tighter uppercase transition-all duration-700 group-hover:text-primary group-hover:scale-110">
                  {project.title}
                </h4>
                <p className="text-[10px] font-mono uppercase tracking-[0.3em] opacity-40 mt-2 group-hover:opacity-100 transition-opacity">
                  // {project.category}
                </p>
              </div>

              {/* 3. Right Section: Tech Tags */}
              <div className="anim-in flex flex-wrap gap-2 order-3 md:justify-end mt-6 md:mt-0">
                {project.tech.map((t) => (
                  <span key={t} className="text-[9px] font-mono border border-[#d6e4ff]/10 px-3 py-1 rounded-full opacity-40 group-hover:border-primary/40 group-hover:text-primary transition-all">
                    {t}
                  </span>
                ))}
              </div>

              {/* Floating IFrame Preview - Centered vertically and appearing to the right of title */}
              <div className="absolute right-[10%] top-1/2 -translate-y-1/2 w-[320px] h-[200px] bg-black opacity-0 group-hover:opacity-100 pointer-events-none transition-all duration-700 hidden xl:block scale-75 group-hover:scale-100 translate-x-20 group-hover:translate-x-0 overflow-hidden border border-primary/30 backdrop-blur-md shadow-[0_0_50px_rgba(0,242,254,0.15)] z-50">
                 <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-20" />
                 <div className="w-full h-full relative z-10 grayscale group-hover:grayscale-0 transition-all duration-1000">
                    <iframe 
                        src={project.live}
                        className="w-[1280px] h-[800px] border-none origin-top-left scale-[0.25]"
                        scrolling="no"
                    />
                 </div>
                 <div className="absolute bottom-2 left-3 text-[8px] font-mono text-primary z-30 uppercase tracking-widest">
                    Live_Stream_Active
                 </div>
                 <div className="absolute inset-0 z-30 pointer-events-none animate-scan opacity-20 bg-gradient-to-b from-primary to-transparent h-[2px] w-full" />
              </div>

              {/* Large Background Text */}
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-[12vw] font-black opacity-0 group-hover:opacity-[0.03] pointer-events-none transition-all duration-1000 select-none uppercase -z-10 tracking-[0.2em]">
                {project.title}
              </div>
            </div>
          ))}
        </div>

        {/* Action Button */}
        <div className="mt-32 flex justify-center">
          <button className="group relative px-16 py-5 border border-[#d6e4ff]/10 overflow-hidden transition-all duration-500 hover:border-primary/50">
            <span className="relative z-10 text-[11px] font-mono font-bold uppercase tracking-[0.6em] group-hover:text-[#030305]">
              Access_All_Files
            </span>
            <div className="absolute inset-0 bg-primary -translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;