"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { FaCode, FaGithub, FaLinkedin } from "react-icons/fa";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export const Hero = () => {
  const container = useRef<HTMLDivElement>(null);
  const scannerRef = useRef<HTMLDivElement>(null);
  const socials = [
  {
    name: "LINKEDIN",
    url: "https://linkedin.com/in/AniketKumarMourya",
    icon: FaLinkedin,
  },
  {
    name: "GITHUB",
    url: "https://github.com/AniketKumar64",
    icon: FaGithub,
  },
  {
    name: "LEETCODE",
    url: "https://leetcode.com/AniketKumar64",
    icon: FaCode, // closest generic icon
  },
];

  useGSAP(() => {
    const tl = gsap.timeline({ defaults: { ease: "expo.out" } });

    // 1. Structural Reveal
    tl.from(".grid-line", { scaleX: 0, stagger: 0.2, duration: 1.8 })
      .from(".ghost-text", { opacity: 0, scale: 0.8, duration: 2 }, "-=1.5")
      .from(".scanner", { 
        [window.innerWidth < 768 ? "scaleX" : "scaleY"]: 0, 
        duration: 1.8, 
        ease: "power4.inOut" 
      }, "-=1.2")
      .from(".reveal-item", { 
        y: 60, 
        opacity: 0, 
        stagger: 0.1, 
        duration: 1.5 
      }, "-=1");

    gsap.to(".scanner", {
      scrollTrigger: {
        trigger: container.current,
        start: "top top",
        end: "bottom top",
        scrub: 1,
      },
      width: "100%",
      height: "100%",
      right: 0,
      bottom: 0,
      backgroundColor: "#00c3fe",
      ease: "none",
    });

    // 3. Parallax (Desktop Only)
    const xMain = gsap.quickSetter(".parallax-item", "x", "px");
    const yMain = gsap.quickSetter(".parallax-item", "y", "px");
    
    const handleMouseMove = (e: MouseEvent) => {
      if (window.innerWidth < 768) return;
      const xPos = (e.clientX - window.innerWidth / 2) * 0.03;
      const yPos = (e.clientY - window.innerHeight / 2) * 0.03;
      xMain(xPos);
      yMain(yPos);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, { scope: container });

  return (
    <section 
      ref={container} 
      className="relative h-[180vh] md:h-[200vh] w-full bg-background dark:bg-background text-black dark:text-[#d6e4ff] overflow-visible transition-colors duration-1000"
    >
      <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col">
        
        {/* GHOST LAYER: Centered */}
        <div className="ghost-text absolute inset-0 flex items-center justify-center pointer-events-none z-0 select-none">
          <h2 className="text-[50vw] md:text-[35vw] font-black opacity-[0.03] dark:opacity-[0.05] whitespace-nowrap">
            KING
          </h2>
        </div>

        {/* GRID LINES */}
        <div className="absolute inset-0 flex flex-col justify-between p-10 md:p-20 pointer-events-none z-10">
          <div className="grid-line w-full h-[1px] bg-[#a8c1cf]/20 dark:bg-[#203a4a] origin-left" />
          <div className="grid-line hidden md:block w-full h-[1px] bg-[#a8c1cf]/20 dark:bg-[#203a4a] origin-left" />
          <div className="grid-line w-full h-[1px] bg-[#a8c1cf]/20 dark:bg-[#203a4a] origin-left" />
        </div>

        {/* MAIN CONTENT */}
        <div className="relative z-20 flex flex-col h-full w-full p-8 md:p-20">
          
          {/* MOBILE: Centered Stack | DESKTOP: Top-Left Alignment */}
          <div className="parallax-item flex-1 flex flex-col items-center justify-center md:items-start md:justify-start text-center md:text-left">
              <div className="reveal-item flex items-center gap-4 mt-6 md:mt-4 justify-center md:justify-start">
              <span className="w-10 md:w-12 h-[1px] bg-primary" />
              <span className="text-[9px] md:text-[10px] font-mono tracking-[0.3em] uppercase opacity-60">
                full stack developer
              </span>
              <span className="hidden md:block w-10 md:w-12 h-[1px] bg-primary" />
            </div>
            <h1 className="reveal-item text-[16vw] md:text-[10vw] font-black leading-none uppercase tracking-tighter">
              Aniket <br className="md:hidden" /> Kumar
            </h1>
            <div className="reveal-item flex items-center gap-4 mt-6 md:mt-4 justify-center md:justify-start">
              <span className="w-10 md:w-12 h-[1px] bg-primary" />
              <span className="text-[9px] md:text-[10px] font-mono tracking-[0.3em] uppercase opacity-60">
                Creative Technologist
              </span>
              <span className="hidden md:block w-10 md:w-12 h-[1px] bg-primary" />
            </div>
          </div>

          {/* MOBILE: Centered Stack | DESKTOP: Bottom-Right Alignment */}
          <div className="parallax-item flex-1 flex flex-col items-center justify-center md:items-end md:justify-end text-center md:text-right">
            <div className="reveal-item max-w-[280px] md:max-w-sm mb-6 md:mb-8 order-2 md:order-1">
              <p className="text-[10px] font-bold uppercase tracking-widest leading-relaxed opacity-60">
                Merging technical architecture with <br className="hidden md:block" /> 
                <span className="text-primary">high-performance motion</span>.
              </p>
            </div>
            <h1 className="reveal-item text-[18vw] md:text-[18vw] font-black leading-none uppercase tracking-tighter order-1 md:order-2 mb-4 md:mb-0">
              Mourya
            </h1>
          </div>
        </div>

        {/* SCANNER: Horizontal Dock (Mobile) / Vertical Bar (Desktop) */}
        <div 
          ref={scannerRef}
          className="scanner absolute 
                     bottom-0 right-0 h-[8vh] w-full              /* Mobile */
                     md:top-0 md:right-[12%] md:w-[10vw] md:h-full /* Desktop */
                     z-30 backdrop-blur-xl bg-primary/10 
                     border-t md:border-t-0 md:border-x border-primary/30
                     flex items-center justify-center overflow-hidden"
        >
          <div className="flex md:rotate-90 items-center gap-6 whitespace-nowrap">
            <span className="text-primary text-[8px] md:text-[9px] font-mono tracking-[1em] font-black uppercase">
              System_Active
            </span>
            <div className="w-1 h-1 bg-primary rounded-full animate-ping" />
            <span className="text-primary/30 text-[8px] md:text-[9px] font-mono tracking-[0.5em] uppercase">
              v2.0.26
            </span>
          </div>
        </div>

        {/* CENTERED SOCIALS FOR MOBILE */}
         <div className="absolute bottom-24 left-0 w-full md:w-auto md:top-1/2 md:left-10 md:-translate-y-1/2 flex justify-center md:flex-col gap-6 z-40">
      {socials.map((social) => {
        const Icon = social.icon;

        return (
          <a
            key={social.name}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-3"
          >
            {/* Icon */}
            <Icon className="text-lg text-white transition-all duration-300 group-hover:text-primary group-hover:scale-110" />

            {/* Text */}
            <span className="text-[10px] font-black tracking-widest text-white transition-colors duration-300 group-hover:text-primary">
              {social.name}
            </span>

            {/* underline animation */}
            <span className="absolute left-0 -bottom-1 w-0 h-[1px] bg-primary transition-all duration-300 group-hover:w-full"></span>
          </a>
        );
      })}
    </div>

      </div>

      {/* POST-PROCESSING */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/noise.png')] z-[1000]" />
    </section>
  );
};