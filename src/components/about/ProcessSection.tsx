"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { 
  FiSearch, FiDatabase, FiCpu, FiLayout, 
  FiZap, FiShield, FiSend, FiActivity 
} from "react-icons/fi";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const buildSteps = [
  { 
    phase: "01", 
    title: "Neural_Mapping", 
    icon: <FiSearch />, 
    desc: "Deconstructing project requirements into logic-flow maps and identifying bottlenecks.", 
    tech: ["System Design", "User Flow"] 
  },
  { 
    phase: "02", 
    title: "Data_Modeling", 
    icon: <FiDatabase />, 
    desc: "Architecting relational foundations using Prisma and PostgreSQL for high-speed scaling.", 
    tech: ["Prisma", "PostgreSQL", "Supabase"] 
  },
  { 
    phase: "03", 
    title: "Logic_Synthesis", 
    icon: <FiCpu />, 
    desc: "Backend engine initialization. Building secure RESTful APIs and Node.js server logic.", 
    tech: ["Node.js", "Express", "Zod"] 
  },
  { 
    phase: "04", 
    title: "Interface_Assembly", 
    icon: <FiLayout />, 
    desc: "Frontend layer rendering. Crafting responsive Next.js 15 UIs with seamless interactions.", 
    tech: ["Next.js 15", "Tailwind", "GSAP"] 
  },
  { 
    phase: "05", 
    title: "AI_Augmentation", 
    icon: <FiZap />, 
    desc: "Injecting intelligence. Integrating Gemini Pro to enable autonomous system features.", 
    tech: ["Gemini Pro", "OpenAI", "LMMs"] 
  },
  { 
    phase: "06", 
    title: "Auth_Hardening", 
    icon: <FiShield />, 
    desc: "Protocol-level encryption. Implementing JWT rotation and ironclad validation layers.", 
    tech: ["Clerk", "Auth.js", "Security"] 
  },
  { 
    phase: "07", 
    title: "Global_Launch", 
    icon: <FiSend />, 
    desc: "Final sync. Deploying to Vercel/AWS with optimized CI/CD and real-time monitoring.", 
    tech: ["Vercel", "AWS", "CI/CD"] 
  }
];

const SplitArchitectTimeline = () => {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // Reveal modules on scroll
    gsap.from(".step-module", {
      opacity: 0,
      y: 60,
      stagger: 0.2,
      duration: 1.2,
      ease: "power4.out",
      scrollTrigger: {
        trigger: ".timeline-body",
        start: "top 85%",
      }
    });

    // Central spine growth animation
    gsap.from(".central-spine", {
      scaleY: 0,
      transformOrigin: "top",
      scrollTrigger: {
        trigger: ".timeline-body",
        start: "top 70%",
        end: "bottom 80%",
        scrub: 0.5,
      }
    });
  }, { scope: container });

  return (
    <section 
      ref={container} 
      className="relative bg-[#e0e7eb] dark:bg-[#030305] text-slate-800 dark:text-[#d6e4ff] z-10 max-w-7xl mx-auto px-6 py-20 transition-colors duration-500 overflow-hidden"
    >
      
      {/* --- HUD HEADER --- */}
      <div className="mb-48 flex flex-col items-center text-center">
        <div className="flex items-center gap-3 mb-6 bg-[#00f2fe]/10 dark:bg-[#00f2fe]/5 border border-[#00f2fe]/30 px-5 py-1.5 backdrop-blur-sm">
          <FiActivity className="text-[#00c2cc] dark:text-[#00f2fe] animate-pulse text-xs" />
          <span className="text-[#00c2cc] dark:text-[#00f2fe] text-[10px] font-mono tracking-[0.5em] uppercase font-bold">System_Build_v4.0</span>
        </div>
        <h2 className="text-5xl md:text-9xl font-black tracking-tighter uppercase text-slate-900 dark:text-white leading-none">
          THE_PROTO<span className="text-transparent" style={{ WebkitTextStroke: "2px #00f2fe" }}>COL.</span>
        </h2>
      </div>

      {/* --- TIMELINE BODY --- */}
      <div className="timeline-body relative">
        
        {/* Central Spine Line */}
        <div className="central-spine absolute left-1/2 -translate-x-1/2 top-0 w-[1px] h-full bg-gradient-to-b from-[#00f2fe] via-slate-400/30 dark:via-[#a8c1cf]/10 to-transparent z-0 hidden md:block" />

        <div className="space-y-40 md:space-y-32">
          {buildSteps.map((step, idx) => (
            <div 
              key={idx} 
              className="step-module relative flex flex-col md:flex-row items-center justify-between w-full"
            >
              
              {/* LEFT SIDE (Alternates between Phase ID and Content) */}
              <div className={`w-full md:w-[42%] flex ${idx % 2 === 0 ? 'md:justify-end' : 'md:justify-start md:order-last'}`}>
                <div className="flex items-center gap-8 group">
                   <span className="text-7xl md:text-9xl font-black  text-[#00f2fe] transition-all duration-500 font-mono tracking-tighter select-none">
                    {step.phase}
                   </span>
                   <div className="p-6 border border-slate-400/20 dark:border-[#a8c1cf]/10 bg-slate-400/5 dark:bg-[#a8c1cf]/[0.02] text-[#00c2cc] dark:text-[#00f2fe] text-4xl group-hover:border-[#00f2fe] group-hover:shadow-[0_0_20px_rgba(0,242,254,0.15)] transition-all duration-500">
                    {step.icon}
                   </div>
                </div>
              </div>

              {/* CENTER NODE (Desktop Only) */}
              <div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 hidden md:flex items-center justify-center z-10">
                <div className="w-2.5 h-2.5 bg-[#e0e7eb] dark:bg-[#030305] border-2 border-[#00f2fe] rounded-full group-hover:scale-150 transition-transform duration-300 shadow-[0_0_10px_#00f2fe]" />
              </div>

              {/* RIGHT SIDE (Alternates Content Position) */}
              <div className={`w-full md:w-[42%] mt-12 md:mt-0 ${idx % 2 === 0 ? 'md:text-left' : 'md:text-right'}`}>
                <div className={`hud-panel border-l-2 border-[#00f2fe] pl-6 md:border-none md:pl-0 flex flex-col ${idx % 2 === 0 ? 'items-start' : 'md:items-end'}`}>
                  <h3 className="text-3xl font-black text-slate-900 dark:text-white uppercase tracking-tighter mb-4 group-hover:text-[#00ccd6] dark:group-hover:text-[#00f2fe] transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-sm md:text-base font-mono leading-relaxed text-slate-600 dark:text-[#a8c1cf] opacity-80 mb-8 italic">
                    {`// ${step.desc}`}
                  </p>
                  
                  {/* Technology Metadata Tags */}
                  <div className={`flex flex-wrap gap-2 ${idx % 2 === 0 ? 'justify-start' : 'md:justify-end'}`}>
                    {step.tech.map((t) => (
                      <span 
                        key={t} 
                        className="text-[9px] font-bold bg-slate-400/10 dark:bg-[#a8c1cf]/5 border border-slate-400/20 dark:border-[#a8c1cf]/10 px-3 py-1 text-slate-500 dark:text-[#a8c1cf] uppercase tracking-[0.2em] hover:border-[#00f2fe]/40 transition-colors"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

            </div>
          ))}
        </div>
      </div>

      {/* --- FOOTER TERMINATOR --- */}
      <div className="mt-56 flex flex-col items-center">
        <div className="font-mono text-[10px] tracking-[0.8em] text-slate-400 dark:text-[#a8c1cf] opacity-40 uppercase mb-10">
          End_of_Sequence
        </div>
        <div className="flex gap-6">
           <div className="w-2 h-2 bg-[#00f2fe] animate-ping" />
           <div className="w-2 h-2 bg-[#00f2fe] opacity-40" />
           <div className="w-2 h-2 bg-[#00f2fe] opacity-10" />
        </div>
      </div>
    </section>
  );
};

export default SplitArchitectTimeline;