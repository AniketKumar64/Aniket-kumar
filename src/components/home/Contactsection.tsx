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

const ContactSection = () => {
  const container = useRef<HTMLDivElement>(null);
   const socials = [
      { icon: <SlSocialLinkedin />, href: "https://linkedin.com/in/AniketKumarMourya", label: "LINKEDIN" },
      { icon: <SiGithub />, href: "https://github.com/AniketKumar64", label: "GITHUB" },
      { icon: <SiLeetcode />, href: "https://leetcode.com/AniketKumar64", label: "LEETCODE" },
    ];

  useGSAP(() => {
    // Reveal technical lines and content
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container.current,
        start: "top 70%",
      },
    });

    tl.from(".contact-line", { scaleX: 0, transformOrigin: "left", duration: 1.5, ease: "expo.inOut" })
      .from(".contact-reveal", { 
        y: 40, 
        opacity: 0, 
        stagger: 0.1, 
        duration: 1, 
        ease: "power3.out" 
      }, "-=0.8");

    // Magnetic effect logic for the "Initiate" button
    const handleMouseMove = (e: MouseEvent) => {
      const target = (e.target as HTMLElement).closest(".magnetic-area");
      if (target) {
        const btn = target.querySelector(".magnetic-btn");
        const bounds = target.getBoundingClientRect();
        const x = e.clientX - (bounds.left + bounds.width / 2);
        const y = e.clientY - (bounds.top + bounds.height / 2);
        gsap.to(btn, {
          x: x * 0.4,
          y: y * 0.4,
          duration: 0.6,
          ease: "power2.out",
        });
      }
    };

    const handleMouseLeave = () => {
      gsap.to(".magnetic-btn", { x: 0, y: 0, duration: 0.8, ease: "elastic.out(1, 0.3)" });
    };

    window.addEventListener("mousemove", handleMouseMove);
    container.current?.addEventListener("mouseleave", handleMouseLeave);
    
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, { scope: container });

  return (
    <section 
      ref={container} 
      className="relative w-full bg-[#e0e7eb] dark:bg-[#030305] text-[#030305] dark:text-[#d6e4ff] py-24 md:py-48 px-8 md:px-20 border-t border-[#030305]/10 dark:border-[#d6e4ff]/10 transition-colors duration-1000 overflow-hidden"
    >
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#00c3fe_1px,transparent_1px)] [background-size:40px_40px] opacity-[0.03] dark:opacity-[0.05]" />

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-start gap-20">
          
          {/* LEFT: STATUS & METADATA */}
          <div className="lg:w-1/3 space-y-12">
            <div className="space-y-4">
              <h2 className="contact-reveal text-[10px] uppercase tracking-[0.8em] text-[#00c3fe] dark:text-[#00f2fe] font-black">
                04 — TRANSMISSION
              </h2>
              <h3 className="contact-reveal text-5xl font-black tracking-tighter uppercase leading-none">
                Start the <br /> <span className="text-[#00c3fe] dark:text-[#00f2fe]">Dialogue</span>
              </h3>
            </div>

            <div className="contact-reveal space-y-8 pt-8">
              <div className="flex items-center gap-4">
                 <div className="w-2 h-2 bg-[#00c3fe] dark:bg-[#00f2fe] animate-pulse" />
                 <span className="text-[10px] font-mono tracking-widest uppercase opacity-60">Status: Accepting Proposals</span>
              </div>
              <p className="text-sm md:text-base font-light opacity-60 leading-relaxed border-l border-[#00c3fe]/30 pl-6">
                Currently open for architectural consulting, high-performance UI/UX development, and strategic digital partnerships worldwide.
              </p>
            </div>
          </div>

          {/* RIGHT: INTERACTION ZONE */}
          <div className="lg:w-2/3 w-full space-y-20">
            <div className="contact-line h-[1px] w-full bg-[#030305]/10 dark:bg-[#d6e4ff]/10" />
            
            <div className="contact-reveal group relative">
              <span className="absolute -top-8 left-0 text-[10px] font-mono opacity-30 uppercase tracking-[0.4em]">Direct_Path //</span>
              <a 
                href="mailto:kumaraniket20805@aniket.com" 
                className="block text-[2vw] md:text-[2vw] font-black tracking-tighter uppercase leading-none transition-all duration-500 hover:text-[#00c3fe] dark:hover:text-[#00f2fe] hover:translate-x-4"
              >
                kumaraniket20805@<span className="text-[#00c3fe] dark:text-[#00f2fe]">gmail.com</span>
              </a>
            </div>

               <div className="flex items-center gap-4 pl-8 md:pl-0">
          {socials.map((link, i) => (
            <a
              key={i}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon group relative p-3 border border-[#d6e4ff]/10 bg-white/[0.02] hover:border-[#00f2fe]/50 transition-all duration-500"
            >
              <div className="relative z-10 flex items-center justify-center gap-4 text-white/40 group-hover:text-[#00f2fe] transition-colors duration-300">
                {link.icon} {link.label}
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

              {/* GEOGRAPHIC DATA */}
              <div className="space-y-2">
                <h4 className="text-[10px] uppercase tracking-widest text-[#00c3fe] dark:text-[#00f2fe] font-bold">Base_Loc</h4>
                <p className="text-[11px] font-mono uppercase tracking-widest opacity-60">
                  Noida, IND // 28.5355° N, 77.3910° E <br />
                  Global Ops: GMT +5:30
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM: MAGNETIC BUTTON AREA */}
        <div className="mt-32 flex flex-col md:flex-row justify-between items-center gap-12 border-t border-[#030305]/10 dark:border-[#d6e4ff]/10 pt-16">
          <div className="text-left">
            <div className="text-2xl font-black tracking-tighter">ANIKET KUMAR MOURYA.</div>
            <p className="text-[9px] font-mono uppercase tracking-[0.6em] opacity-40 mt-2">© 2026 Independent Protocol</p>
          </div>

          <div className="magnetic-area flex items-center justify-center w-48 h-48">
            <button className="magnetic-btn group relative flex items-center justify-center w-32 h-32 rounded-full border border-[#00c3fe] dark:border-[#00f2fe] overflow-hidden transition-colors duration-500 hover:bg-[#00c3fe] dark:hover:bg-[#00f2fe]">
              <a href="mailto:kumaraniket20805@aniket.com" className="relative z-10 text-[10px] font-black uppercase tracking-widest group-hover:text-[#030305] transition-colors">Initiate</a>
              <div className="absolute inset-0 bg-[#00c3fe] dark:bg-[#00f2fe] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-expo" />
            </button>
          </div>
        </div>
     

      {/* BACKGROUND WATERMARK */}
      <div className="absolute -right-10 -bottom-20 text-[25vw] font-black opacity-[0.02] pointer-events-none select-none text-[#00c3fe] dark:text-[#00f2fe] tracking-tighter">
        CONNECT
      </div>
    </section>
  );
};

export default ContactSection;