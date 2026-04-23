"use client";

import AboutContact from "@/components/about/ContactSection";
import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";

const projects = [
  {
    id: "01",
    title: "YANTRAAI",
    tag: "AI_SYSTEM",
    tech: "React • PostgreSQL • Gemini API • Stripe",
    image: "/projects/yantraai.jpg",
    github: "https://github.com/AniketKumar64/yantra-ai",
    live: "https://yantra-ai-527j.vercel.app/",
    description:
      "AI-powered website builder that generates full-stack applications from prompts with live code editing and a credit-based system.",
  },
  {
    id: "02",
    title: "FINESET",
    tag: "ECOM_ENGINE",
    tech: "Next.js • Express • MongoDB • JWT",
    image: "/projects/fineset.jpg",
    github: "https://github.com/AniketKumar64/FineSet",
    live: "https://fineset-demo.vercel.app/",
    description:
      "Full-stack e-commerce platform with secure authentication, refresh token rotation, and 15+ REST APIs.",
  },
  {
    id: "03",
    title: "SNAPPIN",
    tag: "REALTIME_UI",
    tech: "React • WebRTC • Tailwind",
    image: "/projects/snappin.jpg",
    github: "https://github.com/AniketKumar64", // fallback (no repo yet)
    live: "https://snappin-random-video-chat-0-1.vercel.app/",
    description:
      "Random video chat UI with real-time interaction design and smooth responsive experience.",
  },
  {
    id: "04",
    title: "SPLYT",
    tag: "MODERN_UI",
    tech: "React • Tailwind • GSAP",
    image: "/projects/splyt.jpg",
    github: "https://github.com/AniketKumar64",
    live: "https://splyt-3hfu.vercel.app/",
    description:
      "Modern web interface focused on layout precision, animations, and clean UI architecture.",
  },
  {
    id: "05",
       title: "PIXEL PULSE",
    tag: "INTERACTIVE_WEB",
    tech: "React • GSAP • Tailwind",
    image: "/projects/pixelpulse.jpg",
    github: "https://github.com/AniketKumar64",
    live: "https://pixel-pulse-two.vercel.app/",
    description:
      "Dynamic web experience showcasing advanced animations and interactive UI patterns.",
  
   
  },
  {
    id: "06",
    title: "GOLDEN HOUR",
    tag: "AESTHETIC_WEB",
    tech: "React • Tailwind • Animations",
    image: "/projects/goldenhour.jpg",
    github: "https://github.com/AniketKumar64",
    live: "https://golden-hour-pi.vercel.app/",
    description:
      "Visually rich aesthetic web app focused on smooth transitions and immersive UI.",
  },
  {
    id: "07",
  title: "JOB PREP",
    tag: "DASHBOARD_UI",
    tech: "React • Tailwind • Charts",
    image: "/projects/jobprep.jpg",
    github: "https://github.com/AniketKumar64",
    live: "https://job-prep-demo.vercel.app/",
    description:
      "Interactive dashboard UI for interview preparation with analytics-focused design.",},
];

export default function ProjectPage() {

  return (
    <div
      className={`min-h-screen w-full font-mono transition-colors duration-700 ease-in-out selection:bg-primary selection:text-background 
        dark:bg-background dark:text-primary/80 bg-background text-black transition-all duration-1000
      }`}
    >
  
     <header className="h-[100vh] flex flex-col items-center justify-center relative overflow-hidden bg-black text-white">
  <div className="absolute inset-0 z-0 opacity-20">
    <div className="absolute inset-0 bg-[repeating-linear-gradient(0deg,transparent,transparent_2px,rgba(255,255,255,0.05)_2px,rgba(255,255,255,0.05)_4px)]" />
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1)_0%,transparent_50%)]" />
  </div>

  <div className="relative z-10 flex flex-col items-center">
    {/* 2. Top Tag with "Mono" aesthetic */}
    <div className="mb-4 flex items-center gap-4 overflow-hidden">
      <span className="h-[1px] w-12 bg-primary/50"></span>
      <p className="text-[10px] font-mono tracking-[0.5em] uppercase text-primary/80">
        Archival_Record_v2.0
      </p>
      <span className="h-[1px] w-12 bg-primary/50"></span>
    </div>

    {/* 3. The Main Text: Layered & Outlined */}
    <div className="relative group cursor-none">
      {/* Ghost Layer (The Depth) */}
      <h1 className="absolute inset-0 text-6xl md:text-[12rem] font-black tracking-tighter leading-none text-transparent stroke-white/10 stroke-1 select-none translate-x-2 translate-y-2 group-hover:translate-x-4 group-hover:translate-y-4 transition-transform duration-500" 
          style={{ WebkitTextStroke: '1px rgba(255,255,255,0.1)' }}>
        PROJECTS
      </h1>

      {/* Main Layer */}
      <h1 className="relative text-6xl md:text-[12rem] font-black tracking-tighter leading-none bg-clip-text text-transparent bg-gradient-to-b from-white via-white to-gray-500 transition-all duration-700 group-hover:tracking-[-0.02em]">
        PROJECTS<span className="text-primary drop-shadow-[0_0_15px_rgba(var(--primary-rgb),0.5)]">.</span>
      </h1>
    </div>

    {/* 4. Subtitle with "Glitch" hover effect */}
    <div className="mt-6 relative overflow-hidden group">
      <p className="text-xs md:text-sm font-light tracking-[1.2em] uppercase opacity-50 group-hover:opacity-100 transition-all duration-300">
        System_Deployments_Index
      </p>
      <div className="absolute bottom-0 left-0 w-0 h-[1px] bg-primary group-hover:w-full transition-all duration-700" />
    </div>
  </div>


  <div className="absolute bottom-10 left-10 hidden md:block font-mono text-[10px] opacity-30">
    [ 34.0522° N, 118.2437° W ]<br />
    LATENCY: 14MS
  </div>
  <div className="absolute bottom-10 right-10 hidden md:block font-mono text-[10px] opacity-30 text-right">
    BUILD_LOG_094<br />
    STATUS: STABLE
  </div>
  <div className="max-w-md mx-auto pt-8">
      <p className="text-xs md:text-sm font-light text-white/40 tracking-[0.2em] leading-relaxed uppercase">
        Curating high-performance <span className="text-white/80">architectural deployments</span> and visual experiences.
      </p>
    </div>


  {/* 4. Bottom Navigation Hint */}
  <div className="absolute bottom-12 flex flex-col items-center gap-4 opacity-30 hover:opacity-100 transition-opacity duration-500">
    <div className="w-[1px] h-20 bg-gradient-to-b from-primary to-transparent" />
    <span className="text-[9px] font-mono tracking-[0.4em] rotate-90 translate-y-8">SCROLL</span>
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
                <span className="text-primary text-xs font-bold tracking-widest">[{p.id}]</span>
                <div className={`h-[1px] flex-grow opacity-10 bg-secondary dark:bg-[#1a1a1b]`} />
              </div>

              <h2 className="text-4xl md:text-7xl font-bold tracking-tighter mb-6 uppercase transition-colors group-hover:text-primary">
                {p.title}
              </h2>

              <div className="flex flex-wrap items-center gap-4 mb-8">
                <span className="px-3 py-1 border border-current text-[9px] uppercase tracking-widest">
                  {p.tech}
                </span>
                <span className="px-3 py-1 bg-primary text-background text-[9px] font-bold uppercase tracking-widest">
                  Active
                </span>

                <div className="flex items-center gap-4 ml-2 text-xl opacity-40 group-hover:opacity-100 transition-opacity">
                  <a href={p.github} className="hover:text-primary transition-colors"><FaGithub /></a>
                  <a href={p.live} className="hover:text-primary transition-colors"><FiExternalLink /></a>
                </div>
              </div>

              <p className="text-sm opacity-60 leading-relaxed max-w-sm mb-10">
                {p.description}
              </p>

              <a
                href={p.live}
                className="inline-flex items-center gap-6 group/btn"
              >
                <div className="w-10 h-10 border border-current flex items-center justify-center transition-all group-hover/btn:border-primary group-hover/btn:bg-primary">
                  <div className="w-1.5 h-1.5 bg-primary group-hover/btn:bg-background" />
                </div>
                <span className="text-[10px] tracking-[0.5em] uppercase font-bold group-hover/btn:text-primary">
                  Init_Module
                </span>
              </a>
            </div>

            {/* VISUAL COLUMN */}
            <div className="w-full md:w-[65%] aspect-square relative group/visual overflow-hidden">
              {/* Frame Border */}
              <div className="absolute inset-0 border border-current opacity-10 transition-opacity group-hover/visual:opacity-30" />
              
              <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
                {p.image ? (
                  <iframe
                    src={p.live}
                    title={p.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover/visual:scale-105"
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
                       <div className="w-1 h-1 bg-primary animate-pulse shadow-[0_0_8px_#00f2fe]" />
                    </div>
                  </div>
                )}
              </div>

              {/* HUD Overlay Tags */}
              <div className={`absolute bottom-6 p-2 backdrop-blur-sm bg-black/20 text-[9px] ${i % 2 !== 0 ? "left-6" : "right-6 text-right"}`}>
                <div className="opacity-40 uppercase tracking-tighter">Sector_Tag</div>
                <div className="text-primary font-bold">{p.tag}</div>
              </div>
            </div>
          </div>
        ))}
      </main>
<AboutContact/>
      {/* HUD FOOTER */}
      <footer className={`p-10 border-t transition-colors duration-700 border-secondary/10 dark:border-[#1a1a1b]/10 flex justify-between items-center text-[10px] opacity-50 tracking-widest`}>
        <div className="flex gap-8">
          <span>© 2026 // FREELANCE_OS</span>
          <span className="hidden md:inline">ENCRYPTION: AES_256</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
          <span>STATUS_STABLE</span>
        </div>
      </footer>
    </div>
  );
}