"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SlSocialLinkedin } from "react-icons/sl";
import { SiGithub, SiLeetcode } from "react-icons/si";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export const About = () => {
  const container = useRef<HTMLDivElement>(null);

  const socials = [
    { icon: <SlSocialLinkedin />, href: "https://linkedin.com/in/AniketKumarMourya", label: "LINKEDIN" },
    { icon: <SiGithub />, href: "https://github.com/AniketKumar64", label: "GITHUB" },
    { icon: <SiLeetcode />, href: "https://leetcode.com/AniketKumar64", label: "LEETCODE" },
  ];

  useGSAP(() => {
    // Reveal text blocks on scroll
    const sections = gsap.utils.toArray(".about-reveal");
    
    sections.forEach((section: any) => {
      gsap.from(section, {
        scrollTrigger: {
          trigger: section,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
        y: 40,
        opacity: 0,
        duration: 1.2,
        ease: "power3.out",
      });
    });

    // Animate the "Signature" line with Cyan glow
    gsap.from(".about-line", {
      scrollTrigger: {
        trigger: ".about-line",
        start: "top 90%",
      },
      scaleX: 0,
      transformOrigin: "left",
      duration: 1.8,
      ease: "expo.inOut",
    });
    
  }, { scope: container });

  return (
    <section 
      ref={container} 
      className="relative w-full bg-[#030305] text-[#d6e4ff] py-24 md:py-40 px-8 md:px-20 border-t border-[#d6e4ff]/5 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header: Cold Tech Version */}
        <div className="about-reveal mb-20 flex flex-col md:flex-row justify-between items-baseline gap-4">
          <h2 className="text-[10px] uppercase tracking-[0.8em] text-[#00f2fe] font-bold">
            01 — LOG_PHILOSOPHY
          </h2>
          <div className="text-[10px] font-mono opacity-30 uppercase tracking-widest">
            Protocol: Digital Architecture // Noida_Core
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
          
          {/* Large Lead Paragraph */}
          <div className="lg:col-span-8 about-reveal">
            <h3 className="text-3xl md:text-5xl font-light leading-tight tracking-tight">
              I build systems where <span className="text-[#00f2fe] italic">computational precision</span> meets <span className="font-bold">human-centric design.</span> Digital luxury isn't a style; it's a performance benchmark.
            </h3>
            {/* The Scanner-style Line */}
            <div className="about-line h-[1px] w-full bg-gradient-to-r from-[#00f2fe] to-transparent my-12 opacity-50" />
          </div>

          {/* Secondary Details */}
          <div className="lg:col-span-4 space-y-12 about-reveal">
            <div className="space-y-4">
              <h4 className="text-[10px] uppercase tracking-widest text-[#00f2fe] font-bold">The Methodology</h4>
              <p className="text-sm leading-relaxed opacity-60 font-light">
                Code is structural engineering for the virtual world. I prioritize system integrity, low-latency motion, and bespoke interactions that feel as heavy and intentional as physical steel.
              </p>
            </div>

            <div className="space-y-4">
              <h4 className="text-[10px] uppercase tracking-widest text-[#00f2fe] font-bold">Core Stack</h4>
              <ul className="text-[11px] space-y-3 opacity-60 font-mono tracking-tighter">
                <li className="flex items-center gap-3">
                  <span className="w-1 h-1 bg-[#00f2fe] rotate-45" /> 
                  SYSTEM_ARCHITECTURE
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-1 h-1 bg-[#00f2fe] rotate-45" /> 
                  KINETIC_INTERFACES
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-1 h-1 bg-[#00f2fe] rotate-45" /> 
                  FULL_STACK_ENGINEERING
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-1 h-1 bg-[#00f2fe] rotate-45" /> 
                  UI_PHYSICS_SIMULATION
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Narrative & Identity */}
        <div className="mt-24 grid grid-cols-1 lg:grid-cols-12 gap-12 about-reveal items-center">
          <div className="hidden lg:block lg:col-span-4">
            <div className="relative aspect-[4/5] w-full bg-[#0a0a0c] border border-[#d6e4ff]/10 group overflow-hidden">
              {/* Animated scanning light effect */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#00f2fe]/5 to-transparent -translate-y-full group-hover:translate-y-full transition-transform duration-[2000ms] ease-in-out" />
              
              <div className="w-full h-full flex items-center justify-center">
                 <span className="text-[4vw] font-black opacity-1 tracking-tighter text-[#00f2fe]">Aniket kumar</span>
              </div>
              
              {/* Corner Accents */}
              <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-[#00f2fe]/40" />
              <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-[#00f2fe]/40" />
            </div>
          </div>

         <div ref={container} className="lg:col-span-7 lg:offset-1 space-y-8">
      <p className="text-lg md:text-xl font-light opacity-80 leading-relaxed tracking-tight">
        Operating from Noida, India, I collaborate with global partners to engineer interfaces 
        that refuse to settle for "standard." My work is a search for digital permanence in 
        an ephemeral medium.
      </p>
      
      <div className="flex flex-col md:flex-row md:items-center gap-8 pt-6 relative">
        {/* Animated Vertical Line */}
        <div className="brand-line absolute left-0 top-6 w-[1px] h-20 bg-[#00f2fe]/20" />
        
        {/* Identity Block */}
        <div className="brand-text flex flex-col pl-8">
          <span className="text-2xl font-bold tracking-tighter text-[#d6e4ff] uppercase">
            Aniket Kumar Mourya
          </span>
          <span className="text-[9px] uppercase tracking-[0.5em] text-[#00f2fe] font-mono mt-1">
            Creative Technologist // Lead_Engineer
          </span>
        </div>

        {/* Social Links Block */}
        <div className="flex items-center gap-4 pl-8 md:pl-0">
          {socials.map((link, i) => (
            <a
              key={i}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon group relative p-3 border border-[#d6e4ff]/10 bg-white/[0.02] hover:border-[#00f2fe]/50 transition-all duration-500"
            >
              <div className="relative z-10 text-white/40 group-hover:text-[#00f2fe] transition-colors duration-300">
                {link.icon}
              </div>
              
              {/* Background Glow on Hover */}
              <div className="absolute inset-0 bg-[#00f2fe]/5 opacity-0 group-hover:opacity-100 blur-sm transition-opacity" />
              
              {/* Tiny Label appearing on top */}
              <span className="absolute -top-6 left-1/2 -translate-x-1/2 text-[7px] font-mono text-[#00f2fe] opacity-0 group-hover:opacity-100 transition-all duration-300 tracking-widest">
                {link.label}
              </span>
            </a>
          ))}
        </div>
      </div>
    </div>
        </div>
      </div>

      {/* Background Accent: Glacial Typography */}
      <div className="absolute -right-10 -bottom-10 opacity-[0.03] pointer-events-none select-none text-[25vw] font-black leading-none text-[#00f2fe]">
        DATA
      </div>
      
      {/* Subtle Grid overlay to match the Hero */}
      <div className="absolute inset-0 bg-[url('https://raw.githubusercontent.com/thoughtspile/thoughtspile.github.io/master/assets/images/noise.png')] opacity-[0.02] pointer-events-none" />
    </section>
  );
};