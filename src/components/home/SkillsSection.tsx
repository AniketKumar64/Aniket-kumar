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
    skills: [
      "React",
      "Next.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "PostgreSQL"
    ]
  },
  {
    code: "VIS_02",
    category: "Frontend_Experience",
    description:
      "Designing modern, responsive interfaces with smooth animations and high-quality user experience.",
    skills: [
      "Tailwind CSS",
      "GSAP",
      "Framer Motion",
      "Responsive Design",
      "UI/UX Design",
      "Figma"
    ]
  },
  {
    code: "SYS_03",
    category: "System_Design_&_APIs",
    description:
      "Designing backend systems with secure authentication, REST APIs, and scalable architecture patterns.",
    skills: [
      "REST APIs",
      "JWT Authentication",
      "System Design",
      "Database Design",
      "API Optimization",
      "MVC Architecture"
    ]
  }
];

  useGSAP(() => {
    // 1. Create a "Pinned" effect for the left panel on Desktop
    ScrollTrigger.create({
      trigger: ".left-panel",
      start: "top 20%",
      endTrigger: container.current,
      end: "bottom 80%",
      pin: true,
      pinSpacing: false,
      onRefresh: (self) => self.pin && self.pin.classList.add("pinned"),
    });

    // 2. Active State Swapping on Scroll
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
      trigger: ".skill-feed", // Triggered when the feed container hits the top
      toggleActions: "play none none reverse",
    },
    // Start State: Blurred, stretched, and transparent
    opacity: 0,
    x: -40,
    scaleX: 1.5,        // Stretch effect to simulate high-speed entry
    filter: "blur(12px)", 
    skewX: -10,        // Technical tilt
    
    // Animation Logic
    stagger: {
      each: 0.04,      // Rapid succession
      from: "start",
      grid: "auto",    // Respects the grid layout for the stagger order
    },
    duration: 0.8,
    ease: "expo.out",  // Sharp, professional deceleration
    
    // Extra Polish: Subtle chromatic aberration feel on enter
    onStart: () => {
      gsap.to(pills, {
        color: "#00f2fe",
        duration: 0.2,
        stagger: 0.04,
        yoyo: true,
        repeat: 1,
      });
    },
    clearProps: "all" // Ensures hover states work after animation
  });

  // Animate the "READY" dots inside the pills separately
  gsap.from(".skill-pill div", {
    scrollTrigger: {
      trigger: ".skill-feed",
      start: "top top",
    },
    scale: 0,
    opacity: 0,
    backgroundColor: "#00f2fe",
    delay: 0.5,
    stagger: 0.04,
    duration: 0.6,
    ease: "back.out(2)",
  });
  }, { scope: container });

  return (
    <section 
      ref={container} 
      className="relative w-full bg-background dark:bg-background text-[#030305] dark:text-[#d6e4ff] py-24 md:py-48 px-8 md:px-20 transition-colors duration-1000 overflow-visible"
    >
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 lg:gap-24">
        
        {/* LEFT: FIXED NAVIGATION (Sticky on scroll) */}
        <div className="left-panel lg:w-1/3 h-fit space-y-12 z-20">
          <div className="space-y-4">
            <h2 className="text-[10px] uppercase tracking-[0.8em] text-primary dark:text-primary font-black">
              02 — STACK_SYNC
            </h2>
            <h3 className="text-5xl font-black tracking-tighter uppercase leading-none">
              The <br /> <span className="text-primary dark:text-primary">Arsenal</span>
            </h3>
          </div>

          <nav className="hidden lg:flex flex-col border-l border-[#030305]/10 dark:border-[#d6e4ff]/10">
            {modules.map((m, i) => (
              <div
                key={m.code}
                className={`nav-item-${i} relative py-6 pl-8 opacity-30 transition-all duration-500`}
              >
                <div className={`nav-line-${i} absolute left-0 top-0 h-full w-[3px] bg-primary dark:bg-primary scale-y-0 origin-top`} />
                <span className="block text-[10px] font-mono mb-1">[{m.code}]</span>
                <span className="text-xl font-bold uppercase tracking-tight">{m.category}</span>
              </div>
            ))}
          </nav>
        </div>

        {/* RIGHT: SCROLLABLE BLOCKS */}
        <div className="skill-feed lg:w-2/3 space-y-32 md:space-y-64">
          {modules.map((module, i) => (
            <div key={module.code} className="skill-block space-y-12">
              <div className="p-8 bg-[#030305]/5 dark:bg-[#d6e4ff]/5 border-l-4 border-primary dark:border-primary">
                <span className="lg:hidden text-[10px] font-mono text-primary dark:text-primary mb-2 block">[{module.code}]</span>
                <h4 className="text-2xl font-bold uppercase mb-4 lg:hidden">{module.category}</h4>
                <p className="text-lg md:text-2xl font-light leading-relaxed italic opacity-80 tracking-tight">
                  "{module.description}"
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {module.skills.map((skill) => (
                  <div 
                    key={skill} 
                    className="skill-pill group flex items-center justify-between p-6 border border-[#030305]/10 dark:border-[#d6e4ff]/10 hover:border-primary dark:hover:border-primary bg-transparent hover:bg-primary/5 transition-all duration-300"
                  >
                    <span className="text-sm font-bold tracking-widest uppercase">{skill}</span>
                    <div className="w-1.5 h-1.5 rotate-45 border border-primary dark:border-primary group-hover:bg-primary dark:group-hover:bg-primary transition-all" />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* BACKGROUND DECOR */}
      <div className="absolute right-0 bottom-0 text-[30vw] font-black opacity-[0.03] pointer-events-none select-none text-[#030305] dark:text-[#d6e4ff]">
        SYSTEM
      </div>
    </section>
  );
};

export default Skills;