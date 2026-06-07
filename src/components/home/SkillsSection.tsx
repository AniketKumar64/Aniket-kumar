"use client";

import { useState, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface ModuleItem {
  code: string;
  category: string;
  description: string;
  skills: string[];
}

const Skills = () => {
  const container = useRef<HTMLDivElement>(null);
  const [activeTab, setActiveTab] = useState<number>(0);

  const modules: ModuleItem[] = [
    {
      code: "ENG_01",
      category: "Full Stack Engineering",
      description:
        "Building scalable web applications using MERN stack and Next.js with focus on clean architecture, API design, and performance.",
      skills: ["React", "Next.js", "Node.js", "Express.js", "MongoDB", "PostgreSQL"],
    },
    {
      code: "VIS_02",
      category: "Frontend Experience",
      description:
        "Designing modern, responsive interfaces with smooth animations and high-quality user experience.",
      skills: ["Tailwind", "GSAP", "Framer", "Responsive", "UI/UX", "Figma"],
    },
    {
      code: "SYS_03",
      category: "System Design",
      description:
        "Designing backend systems with secure authentication, REST APIs, and scalable architecture patterns.",
      skills: ["REST APIs", "JWT", "Systems", "Database", "Optimization", "MVC"],
    },
  ];

  useGSAP(
    () => {
      const items = gsap.utils.toArray(".skill-block");
      items.forEach((item: any, i: number) => {
        ScrollTrigger.create({
          trigger: item,
          start: "top 35%",
          end: "bottom 35%",
          onToggle: (self) => {
            if (self.isActive) {
              setActiveTab(i);
            }
          },
        });

        const headerElements = item.querySelectorAll(".module-header, .module-desc");
        gsap.fromTo(
          headerElements,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
              trigger: item,
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
          }
        );

        const cards = item.querySelectorAll(".skill-pill");
        gsap.fromTo(
          cards,
          { opacity: 0, y: 20, scale: 0.95 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.6,
            stagger: 0.05,
            ease: "back.out(1.2)",
            scrollTrigger: {
              trigger: item,
              start: "top 75%",
              toggleActions: "play none none reverse",
            },
          }
        );
      });
    },
    { scope: container }
  );

  return (
    <section
      ref={container}
      className="relative w-full bg-[#fcfcfd] text-[#09090b] py-24 md:py-44 px-6 md:px-16 overflow-hidden antialiased selection:bg-primary/20 selection:text-[#09090b]"
    >

      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 lg:gap-32 relative z-10">
        
        <div className="left-panel w-full lg:w-1/4 h-fit lg:sticky lg:top-24">
          <div className="space-y-6 text-left">
            <div className="inline-flex items-center gap-2 px-2.5 py-1 text-[10px] uppercase tracking-[0.3em] text-primary bg-primary/5 border border-primary/20 rounded-sm font-mono font-bold">
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
              SYS.INDEX // 02
            </div>

            <h3 className="text-4xl md:text-5xl font-black tracking-tight uppercase leading-none text-[#09090b]">
              THE <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-neutral-900 via-neutral-700 to-neutral-400">
                CORE_INDEX
              </span>
            </h3>

            <p className="text-xs font-mono text-neutral-400 tracking-wider hidden lg:block">
              [SYSTEM SPECIFICATION LAYER v2.0.4]
            </p>
          </div>

          <nav className="hidden lg:flex flex-col mt-16 space-y-1 relative">
            <div className="absolute left-0 top-0 bottom-0 w-[1px] bg-neutral-200" />
            {modules.map((m, i) => {
              const isActive = activeTab === i;
              return (
                <div
                  key={m.code}
                  className="relative py-4 pl-6 cursor-default transition-all duration-300 group"
                  style={{ opacity: isActive ? 1 : 0.25 }}
                >
                  <div 
                    className={`absolute left-0 top-1/2 -translate-y-1/2 h-6 w-[2px] bg-primary transition-transform duration-300 ease-out origin-left ${
                      isActive ? "scale-x-100" : "scale-x-0"
                    }`} 
                  />
                  
                  <span className="block text-[9px] font-mono text-primary/80 mb-0.5 font-bold tracking-widest">
                    //{m.code}
                  </span>
                  <span 
                    className="text-sm font-bold tracking-tight uppercase text-neutral-700 block transition-transform duration-300"
                    style={{ transform: isActive ? "translateX(8px)" : "translateX(0px)" }}
                  >
                    {m.category}
                  </span>
                </div>
              );
            })}
          </nav>
        </div>

        <div className="skill-feed w-full lg:w-3/4 space-y-24 md:space-y-24">
          {modules.map((module) => (
            <div key={module.code} className="skill-block space-y-8 relative">
              
              <div className="module-header flex items-center justify-between border-b border-neutral-200 pb-4">
                <div className="flex items-baseline gap-4">
                  <span className="text-xs font-mono text-primary font-bold bg-white px-2 py-0.5 border border-neutral-200 rounded-sm shadow-sm">
                    {module.code}
                  </span>
                  <h4 className="text-xl md:text-2xl font-black uppercase tracking-tight text-neutral-900">
                    {module.category}
                  </h4>
                </div>
                <span className="hidden sm:inline text-[10px] font-mono text-neutral-400 tracking-widest uppercase">
                  METRIC_OK //
                </span>
              </div>

              <div className="module-desc relative pl-6 border-l border-dashed border-neutral-300 max-w-3xl">
                <p className="text-base md:text-lg text-neutral-600 font-normal leading-relaxed">
                  {module.description}
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                {module.skills.map((skill) => (
                  <div
                    key={skill}
                    className="skill-pill group relative flex items-center justify-between p-4 bg-white border border-neutral-200/80 rounded-sm hover:border-neutral-400/80 shadow-xs hover:shadow-md transition-all duration-300 overflow-hidden cursor-default hover:-translate-y-0.5"
                  >
                    <div className="absolute top-0 right-0 w-1 bg-primary h-0 group-hover:h-full transition-all duration-300 ease-out" />
                    
                    <div className="flex flex-col gap-0.5">
                      <span className="text-[10px] font-mono text-neutral-400 tracking-tighter uppercase">
                        TECH_PRMT
                      </span>
                      <span className="text-sm font-bold tracking-wide uppercase text-neutral-800 group-hover:text-black transition-colors duration-200">
                        {skill}
                      </span>
                    </div>

                    <div className="w-1.5 h-1.5 bg-neutral-200 group-hover:bg-primary group-hover:scale-125 rounded-full transition-all duration-300 ease-out" />
                  </div>
                ))}
              </div>

            </div>
          ))}
        </div>

      </div>

      <div className="absolute left-4 bottom-4 text-[10vw] font-black opacity-[0.03] pointer-events-none select-none tracking-tighter font-mono leading-none text-neutral-900">
        INDEX_LAYER_02
      </div>
    </section>
  );
};

export default Skills;