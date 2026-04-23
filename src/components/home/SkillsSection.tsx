"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const Skills = () => {
  const container = useRef<HTMLDivElement>(null);

  const modules = [
    {
      code: "ENG_01",
      category: "Full_Stack_Engineering",
      description:
        "Building scalable web applications using MERN stack and Next.js with focus on clean architecture, API design, and performance.",
      skills: ["React", "Next.js", "Node.js", "Express.js", "MongoDB", "PostgreSQL"],
    },
    {
      code: "VIS_02",
      category: "Frontend_Experience",
      description:
        "Designing modern, responsive interfaces with smooth animations and high-quality user experience.",
      skills: ["Tailwind", "GSAP", "Framer", "Responsive", "UI/UX", "Figma"],
    },
    {
      code: "SYS_03",
      category: "System_Design",
      description:
        "Designing backend systems with secure authentication, REST APIs, and scalable architecture patterns.",
      skills: ["REST APIs", "JWT", "Systems", "Database", "Optimization", "MVC"],
    },
  ];

  useGSAP(
    () => {
      ScrollTrigger.create({
        trigger: ".left-panel",
        start: "top 20%",
        endTrigger: container.current,
        end: "bottom 80%",
        pin: true,
        pinSpacing: false,
      });

      const items = gsap.utils.toArray(".skill-block");
      items.forEach((item: any, i: number) => {
        ScrollTrigger.create({
          trigger: item,
          start: "top 40%",
          end: "bottom 40%",
          onToggle: (self) => {
            if (self.isActive) {
              gsap.to(`.nav-item-${i}`, { opacity: 1, x: 10, duration: 0.4 });
              gsap.to(`.nav-line-${i}`, { scaleY: 1, duration: 0.4 });
            } else {
              gsap.to(`.nav-item-${i}`, { opacity: 0.3, x: 0, duration: 0.4 });
              gsap.to(`.nav-line-${i}`, { scaleY: 0, duration: 0.4 });
            }
          },
        });
      });

      const pills = gsap.utils.toArray(".skill-pill");
      gsap.from(pills, {
        scrollTrigger: {
          trigger: ".skill-feed",
          toggleActions: "play none none reverse",
        },
        opacity: 0,
        y: 20,
        stagger: 0.05,
        duration: 0.6,
        ease: "power4.out",
      });
    },
    { scope: container }
  );

  return (
    <section
      ref={container}
      className="relative w-full bg-background dark:bg-background text-[#030305] dark:text-[#d6e4ff] py-16 md:py-48 px-6 md:px-20 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 lg:gap-24">
        
        <div className="left-panel md:block hidden lg:w-1/3 h-fit z-20">
  <div className="space-y-4 text-center lg:text-left">
    {/* 1. Mobile Status Badge */}
    <div className="inline-flex lg:hidden items-center gap-3 px-3 py-1 border border-primary/20 bg-primary/5 rounded-full mb-2">
      <span className="w-1 h-1 rounded-full bg-primary animate-pulse" />
      <h2 className="text-[8px] uppercase tracking-[0.4em] text-primary font-bold">
        02 — STACK_SYNC
      </h2>
    </div>

    {/* 2. Desktop-only Header (Hidden on Mobile) */}
    <h2 className="hidden lg:block text-[10px] uppercase tracking-[0.8em] text-primary font-black">
      02 — STACK_SYNC
    </h2>

    {/* 3. Main Title - Adjusted for Mobile Scale */}
    <h3 className="text-5xl md:text-5xl font-black tracking-tighter uppercase leading-[0.85] lg:leading-[0.9]">
      The <br /> 
      <span className="text-primary drop-shadow-[0_0_15px_rgba(var(--primary-rgb),0.3)]">
        CORE_INDEX
      </span>
    </h3>

    {/* 4. Mobile-only Progress Indicator (Subtle UI touch) */}
    <div className="flex lg:hidden items-center justify-center gap-1 opacity-30 pt-2">
      <div className="h-[1px] w-8 bg-primary" />
      <div className="text-[8px] font-mono tracking-widest">V.2.0.4</div>
      <div className="h-[1px] w-8 bg-primary" />
    </div>
  </div>

  {/* 5. Navigation (Stays desktop-only) */}
  <nav className="hidden lg:flex flex-col mt-12 border-l border-primary/10">
    {modules.map((m, i) => (
      <div key={m.code} className={`nav-item-${i} relative py-6 pl-8 opacity-30 transition-all duration-500`}>
        <div className={`nav-line-${i} absolute left-0 top-0 h-full w-[3px] bg-primary scale-y-0 origin-top`} />
        <span className="block text-[10px] font-mono mb-1">[{m.code}]</span>
        <span className="text-xl font-bold uppercase">{m.category}</span>
      </div>
    ))}
  </nav>
</div>

{/* for mobile view */}
<div className="lg:hidden">
  <div className="space-y-4 text-center">
    <h2 className="text-[9px] md:text-[10px] uppercase tracking-[0.5em] md:tracking-[0.8em] text-primary font-black">
      02 — STACK_SYNC
    </h2>
    <h3 className="text-4xl md:text-5xl font-black tracking-tighter uppercase leading-[0.9]">
      The <br /> <span className="text-primary">CORE_INDEX</span>
    </h3>
  </div>
</div>

        <div className="skill-feed lg:w-2/3 space-y-20 md:space-y-64">
          {modules.map((module) => (
            <div key={module.code} className="skill-block space-y-6 md:space-y-12">
              <div className="p-5 md:p-8 bg-black/[0.02] dark:bg-white/[0.02] border-l-2 md:border-l-4 border-primary relative overflow-hidden">
                <div className="lg:hidden flex items-center justify-between mb-4">
                  <span className="text-[9px] font-mono text-primary border border-primary/20 px-2 py-0.5 uppercase">
                    {module.code}
                  </span>
                  <div className="h-[1px] flex-grow mx-4 bg-primary/10" />
                </div>
                
                <h4 className="text-lg font-bold uppercase mb-3 lg:hidden tracking-tight leading-tight">
                  {module.category.replace(/_/g, " ")}
                </h4>
                
                <p className="text-base md:text-2xl font-light leading-relaxed italic opacity-70">
                  "{module.description}"
                </p>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-2 gap-2 md:gap-4">
                {module.skills.map((skill) => (
                  <div
                    key={skill}
                    className="skill-pill group flex items-center justify-between p-4 md:p-6 border border-primary/5 dark:border-white/5 bg-black/[0.01] dark:bg-white/[0.01] hover:border-primary transition-all duration-300"
                  >
                    <span className="text-[10px] md:text-sm font-bold tracking-widest uppercase truncate">
                      {skill}
                    </span>
                    <div className="w-1 h-1 rotate-45 bg-primary/30 group-hover:bg-primary transition-colors" />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute right-[-5%] bottom-[-5%] text-[35vw] font-black opacity-[0.02] pointer-events-none select-none leading-none">
        SYS
      </div>
    </section>
  );
};

export default Skills;