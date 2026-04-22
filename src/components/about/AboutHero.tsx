"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

 const AboutHero = () => {
  const container = useRef<HTMLDivElement>(null);
  const visualRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline({ defaults: { ease: "expo.out" } });

    // Entrance: A sophisticated slide-and-reveal
    tl.from(".reveal-panel", {
      height: 0,
      duration: 1.4,
      stagger: 0.1,
    })
    .from(".hero-title span", {
      y: 100,
      rotate: 5,
      opacity: 0,
      stagger: 0.1,
      duration: 1,
    }, "-=0.5")
    .from(".nav-link", {
      opacity: 0,
      x: -20,
      stagger: 0.1,
    }, "-=0.8");

    // Mouse Interaction: Subtle skew and image tilt
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const xPos = (clientX / window.innerWidth - 0.5) * 20;
      const yPos = (clientY / window.innerHeight - 0.5) * 20;

      gsap.to(visualRef.current, {
        rotateY: xPos,
        rotateX: -yPos,
        duration: 1,
        ease: "power2.out",
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, { scope: container });

  return (
    <section 
      ref={container} 
      className="relative h-screen w-full bg-[#050505] text-[#e0e0e0] overflow-hidden flex flex-col md:flex-row"
    >
      {/* LEFT: Structural Info */}
      <div className="relative w-full md:w-1/3 h-full border-r border-white/10 p-8 flex flex-col justify-between z-20 bg-[#050505]">
        <div>
          <div className="flex items-center gap-4 mb-12">
            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-black font-bold text-xs">
              AM
            </div>
            <span className="text-[10px] tracking-[0.5em] uppercase font-bold">2026 Edition</span>
          </div>
          
          <nav className="space-y-6">
            {['Strategy', 'Architecture', 'Interaction'].map((item, i) => (
              <div key={item} className="nav-link overflow-hidden group cursor-pointer">
                <span className="block text-xs text-gray-500 mb-1">0{i + 1}</span>
                <span className="text-xl font-light group-hover:pl-4 transition-all duration-500 block">
                  {item}
                </span>
              </div>
            ))}
          </nav>
        </div>

        <div className="nav-link">
          <p className="text-sm text-gray-400 max-w-[200px] leading-relaxed">
            Pioneering the intersection of <span className="text-white">human intent</span> and machine efficiency.
          </p>
        </div>
      </div>

      {/* CENTER/RIGHT: The Hero Visual */}
      <div className="relative flex-1 h-full flex items-center justify-center p-12">
        {/* Massive Vertical Text Background */}
        <h1 className="hero-title absolute left-0 bottom-0 text-[20vw] font-black leading-none opacity-5 select-none pointer-events-none uppercase">
          <span className="block">ANIKET</span>
        </h1>

        {/* Floating Visual Portal */}
        <div 
          ref={visualRef}
          className="reveal-panel relative w-full max-w-lg aspect-[4/5] bg-neutral-900 overflow-hidden border border-white/5 shadow-2xl"
          style={{ perspective: "1000px" }}
        >
          {/* This would be your featured project image or a generative video */}
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1635776062127-d379bfcba9f8?q=80&w=2532&auto=format&fit=crop')] bg-cover bg-center grayscale hover:grayscale-0 transition-all duration-700 scale-110 hover:scale-100" />
          
          {/* Overlay text on image */}
          <div className="absolute inset-0 flex flex-col justify-end p-8 bg-gradient-to-t from-black/80 to-transparent">
            <h2 className="hero-title text-4xl font-bold tracking-tighter">
              <span className="block italic font-serif">Mourya.</span>
            </h2>
          </div>
        </div>

        {/* Floating Tag */}
        <div className="absolute right-12 top-1/2 -rotate-90 origin-right">
          <span className="text-[10px] tracking-[1em] uppercase text-white/30 whitespace-nowrap">
            Scroll to explore work
          </span>
        </div>
      </div>

      {/* Aesthetic Border Accents */}
      <div className="absolute top-0 right-0 w-32 h-32 border-t border-r border-white/20 m-4" />
      <div className="absolute bottom-0 left-0 w-32 h-32 border-b border-l border-white/20 m-4 hidden md:block" />
    </section>
  );
};

export default AboutHero;