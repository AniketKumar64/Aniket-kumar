"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export const Hero = () => {
  const container = useRef<HTMLDivElement>(null);
  const scannerRef = useRef<HTMLDivElement>(null);
  
  const socials = [
    {
      name: "LINKEDIN",
      url: "https://www.linkedin.com/in/aniketkumar64",
      icon: FaLinkedin,
    },
    {
      name: "GITHUB",
      url: "https://github.com/AniketKumar64",
      icon: FaGithub,
    },
  ];

  useGSAP(() => {
    const isMobile = window.innerWidth < 768;
    const tl = gsap.timeline({ defaults: { ease: "expo.out" } });

    tl.from(".grid-line", { scaleX: 0, stagger: 0.2, duration: 1.8 })
      .from(".hud-element", { opacity: 0, y: -10, duration: 1, stagger: 0.1 }, "-=1.5")
      .from(".ghost-text", { 
        opacity: 0, 
        scale: isMobile ? 1.1 : 0.8, 
        y: isMobile ? -20 : 0, 
        duration: 2 
      }, "-=1.5")
      .from(".scanner", { 
        [isMobile ? "scaleX" : "scaleY"]: 0, 
        duration: 1.8, 
        ease: "power4.inOut" 
      }, "-=1.2")
      .from(".reveal-item", { 
        y: isMobile ? 40 : 60, 
        opacity: 0, 
        stagger: 0.1, 
        duration: 1.5 
      }, "-=1");

    if (isMobile) {
      gsap.to(".ghost-text h2", {
        scrollTrigger: {
          trigger: container.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
        scale: 0.85,
        letterSpacing: "0.05em",
        opacity: 0.12,
        ease: "none"
      });

      gsap.to(".hud-element", {
        scrollTrigger: {
          trigger: container.current,
          start: "top top",
          end: "15% top",
          scrub: true,
        },
        opacity: 0,
        y: -15,
        ease: "none"
      });
    }

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
        
        {/* MOBILE EXTRA: HUD Layer Corners to Frame the Screen */}
        <div className="absolute inset-x-6 top-6 bottom-16 md:hidden pointer-events-none z-30 border border-neutral-400/5 select-none">
          <div className="hud-element absolute top-0 left-0 w-3 h-3 border-t border-l border-primary/40" />
          <div className="hud-element absolute top-0 right-0 w-3 h-3 border-t border-r border-primary/40" />
          <div className="hud-element absolute bottom-0 left-0 w-3 h-3 border-b border-l border-primary/40" />
          <div className="hud-element absolute bottom-0 right-0 w-3 h-3 border-b border-r border-primary/40" />
          
          {/* Vertical Dynamic Metrics Sidebar Line */}
          <div className="hud-element absolute left-0 top-12 bottom-12 w-[1px] bg-gradient-to-b from-transparent via-neutral-300/20 dark:via-neutral-700/20 to-transparent" />
          <div className="hud-element absolute right-0 top-12 bottom-12 w-[1px] bg-gradient-to-b from-transparent via-neutral-300/20 dark:via-neutral-700/20 to-transparent" />
        </div>

        {/* GHOST LAYER */}
        <div className="ghost-text absolute inset-0 flex items-center justify-center pointer-events-none z-0 select-none transition-transform duration-300">
          <h2 className="text-[42vw] md:text-[35vw] font-black opacity-[0.04] dark:opacity-[0.06] whitespace-nowrap tracking-tighter transition-all">
            KING
          </h2>
        </div>

        {/* GRID LINES */}
        <div className="absolute inset-0 flex flex-col justify-between p-8 md:p-24 pointer-events-none z-10">
          <div className="grid-line w-full h-[1px] bg-[#a8c1cf]/20 dark:bg-[#203a4a] origin-left" />
          <div className="grid-line hidden md:block w-full h-[1px] bg-[#a8c1cf]/20 dark:bg-[#203a4a] origin-left" />
          <div className="grid-line w-full h-[1px] bg-[#a8c1cf]/20 dark:bg-[#203a4a] origin-left" />
        </div>

        {/* MAIN CONTENT CONTAINER */}
        <div className="relative z-20 flex flex-col justify-between h-full w-full p-8 pt-20 pb-36 md:p-20">
          
          {/* TOP BLOCK */}
          <div className="parallax-item flex flex-col items-center justify-center md:items-start md:justify-start text-center md:text-left mt-4 md:mt-0">
            <div className="reveal-item flex items-center gap-3 mb-4 justify-center md:justify-start">
              <span className="w-8 md:w-12 h-[1px] bg-primary" />
              <span className="text-[8px] md:text-[10px] font-mono tracking-[0.3em] uppercase opacity-60">
                full stack developer // dev.01
              </span>
              <span className="hidden md:block w-10 md:w-12 h-[1px] bg-primary" />
            </div>
            
            <h1 className="reveal-item text-[22vw] md:text-[10vw] font-black leading-[0.95] uppercase tracking-tighter">
              Aniket Kumar
            </h1>
            
            <div className="reveal-item flex items-center gap-3 mt-4 justify-center md:justify-start md:hidden">
              <span className="w-6 h-[1px] bg-primary" />
              <span className="text-[8px] font-mono tracking-[0.3em] uppercase opacity-40">
                Creative Technologist
              </span>
            </div>
          </div>

          {/* MOBILE EXTRA MIDDLE: Micro Technical Metadata Matrix */}
          <div className="hud-element md:hidden flex justify-between w-full border-y border-neutral-400/10 py-3 font-mono text-[7px] tracking-widest uppercase opacity-40 select-none">
            <span>SYS_STAT // NORMAL</span>
            <span>LOC // DEL_NCR</span>
            <span>ENV // PROD_V2</span>
          </div>

          {/* BOTTOM BLOCK */}
          <div className="parallax-item flex flex-col items-center justify-center md:items-end md:justify-end text-center md:text-right mb-4 md:mb-0">
            <div className="reveal-item max-w-[260px] md:max-w-sm mb-5 md:mb-8 order-2 md:order-1">
              <p className="text-[9px] md:text-[10px] font-bold uppercase tracking-widest leading-relaxed opacity-60">
                Merging technical architecture with <br className="hidden md:block" /> 
                <span className="text-primary">high-performance motion</span>.
              </p>
            </div>
            <h1 className="reveal-item text-[22vw] md:text-[18vw] font-black leading-[0.9] uppercase tracking-tighter order-1 md:order-2 mb-10 md:mb-0">
              Mourya
            </h1>
          </div>
        </div>

        {/* BOTTOM UTILITY STATUS SCANNER */}
        <div 
          ref={scannerRef}
          className="scanner absolute 
                     bottom-14 right-0 h-[6vh] w-full
                     md:top-0 md:right-[12%] md:w-[10vw] md:h-full
                     z-30 backdrop-blur-xl bg-primary/5 
                     border-y md:border-y-0 md:border-x border-primary/20
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

        {/* SOCIAL DOCK BAR */}
        <div className="absolute bottom-4 left-0 w-full md:w-auto md:top-1/2 md:left-10 md:-translate-y-1/2 flex justify-center md:flex-col gap-8 md:gap-6 z-40 bg-background/40 md:bg-transparent backdrop-blur-md md:backdrop-blur-none py-3 md:py-0 border-t border-white/5 md:border-none">
          {socials.map((social) => {
            const Icon = social.icon;
            return (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex items-center gap-2.5"
              >
                <Icon className="text-base md:text-lg text-black dark:text-white transition-all duration-300 group-hover:text-primary group-hover:scale-110" />
                <span className="text-[9px] md:text-[10px] font-black tracking-widest text-black dark:text-white transition-colors duration-300 group-hover:text-primary">
                  {social.name}
                </span>
                <span className="absolute left-0 -bottom-1 w-0 h-[1px] bg-primary transition-all duration-300 group-hover:w-full hidden md:block" />
              </a>
            );
          })}
        </div>

      </div>

      <div className="fixed inset-0 pointer-events-none opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/noise.png')] z-[1000]" />
    </section>
  );
};
