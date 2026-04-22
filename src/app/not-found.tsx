"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";

const Error404 = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Create a "pulse" error effect
      gsap.to(".error-core", {
        opacity: 0.3,
        duration: 0.2,
        repeat: -1,
        yoyo: true,
        repeatDelay: 2,
      });

      // Float the broken pieces
      gsap.to(".float-path", {
        y: -5,
        x: 2,
        rotation: 2,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        stagger: 0.2
      });

      // Slide in text elements
      gsap.from(".reveal", {
        opacity: 0,
        y: 20,
        duration: 0.8,
        stagger: 0.1,
        ease: "expo.out"
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      
      className="min-h-screen w-full flex flex-col items-center justify-center font-mono p-10 overflow-hidden  text-black dark:text-[#a8c1cf]  "
    >
      {/* BACKGROUND DECORATION */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none flex items-center justify-center text-[20vw] font-bold select-none">
        VOID
      </div>

      {/* CENTRAL BROKEN CORE */}
      <div className="relative mb-8">
        <svg viewBox="0 0 100 100" className="w-40 h-40 md:w-56 md:h-56">
          {/* Fragmented Outer Hex */}
          <path
            className="float-path"
            d="M50 5 L89 27.5 L89 45 M89 60 L89 72.5 L50 95 L11 72.5 L11 27.5 Z"
            fill="none"
            stroke="#a8c1cf"
            strokeWidth="0.5"
            opacity="0.3"
          />
          {/* Fragmented Middle Hex (The Error Color) */}
          <path
            className="error-core float-path"
            d="M50 20 L76 35 L76 50 M76 60 L76 65 L50 80 L24 65 L24 35 Z"
            fill="none"
            stroke="#00f2fe"
            strokeWidth="1"
          />
          {/* Inner Core "Disconnected" */}
          <circle cx="50" cy="55" r="2" fill="#00f2fe" className="float-path" />
        </svg>
      </div>

      {/* ERROR MESSAGE */}
      <div className="flex flex-col items-center text-center z-10">
        <h1 className="reveal text-[10px] tracking-[0.8em] uppercase text-[#00f2fe] font-bold mb-4">
          Error.Code(404)
        </h1>
        <p className="reveal text-[11px] md:text-xs tracking-widest leading-loose max-w-sm uppercase opacity-80 mb-10">
          The requested sector is <span className="text-[#00f2fe]">unreachable</span> or has been purged from the local architecture.
        </p>

        <div className="reveal">
          <Link 
            href="/"
            className="group relative px-10 py-3 border border-[#a8c1cf]/30 hover:border-[#00f2fe] transition-colors duration-500"
          >
            <span className="text-[9px] tracking-[0.4em] uppercase group-hover:text-[#00f2fe] transition-colors">
              Re-Route to Home
            </span>
            {/* Corner Accents on Button */}
            <div className="absolute -top-[1px] -left-[1px] w-1 h-1 bg-[#00f2fe] opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="absolute -bottom-[1px] -right-[1px] w-1 h-1 bg-[#00f2fe] opacity-0 group-hover:opacity-100 transition-opacity" />
          </Link>
        </div>
      </div>

      {/* BOTTOM DATA OVERLAY */}
      <div className="absolute bottom-10 w-full px-10 flex justify-between items-end">
        <div className="reveal hidden md:flex flex-col gap-1">
          <span className="text-[8px] opacity-40 uppercase">Trace_ID</span>
          <span className="text-[9px]">ERR-0x00F2FE-NULL</span>
        </div>
        
        <div className="reveal flex flex-col items-end gap-1">
          <span className="text-[8px] opacity-40 uppercase">System_State</span>
          <div className="flex gap-1">
             {[1, 1, 1, 0, 0].map((bit, i) => (
               <div key={i} className={`w-1.5 h-1.5 ${bit ? 'bg-[#00f2fe]' : 'bg-[#a8c1cf]/20'}`} />
             ))}
          </div>
        </div>
      </div>

      {/* CORNER DECORATIONS */}
      <div className="absolute top-10 left-10 w-4 h-4 border-t border-l border-[#a8c1cf]/10" />
      <div className="absolute bottom-10 right-10 w-4 h-4 border-b border-r border-[#a8c1cf]/10" />
    </div>
  );
};

export default Error404;