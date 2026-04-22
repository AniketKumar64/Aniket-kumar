"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";

interface LoadingProps {
  onComplete?: () => void;
}

const Loading: React.FC<LoadingProps> = ({ onComplete }) => {
  const loaderRef = useRef<HTMLDivElement | null>(null);
const percentRef = useRef<HTMLHeadingElement | null>(null);
  useEffect(() => {
    if (!loaderRef.current) return;

    const tl = gsap.timeline({
      onComplete: () => onComplete?.(),
    });

    tl.set(".log-line", { opacity: 0, x: -10 });

    tl.to(".log-line", {
      opacity: 1,
      x: 0,
      duration: 0.3,
      stagger: 0.4,
      ease: "none",
    })
    .to({}, {
      duration: 3.5,
      ease: "power1.inOut",
      onUpdate: function (this: gsap.core.Tween) {
        const progress = Math.round(this.progress() * 100 );
        if (percentRef.current) {
          percentRef.current.textContent = progress.toString().padStart(3, '0');
        }
      },
    }, "<")
    .to(".loader-inner", {
      scaleY: 0.005,
      duration: 0.4,
      ease: "expo.inOut"
    })
    .to(".loader-inner", {
      scaleX: 0,
      duration: 0.3,
      ease: "expo.inOut"
    })
    .set(loaderRef.current, { display: "none" });

    return () => { tl.kill(); };
  }, [onComplete]);

  return (
    <div
      ref={loaderRef}
      className="fixed inset-0 z-[9999] bg-black flex items-center justify-center font-mono overflow-hidden p-6"
    >
      <div className="loader-inner w-full h-full flex flex-col justify-between border border-zinc-900 p-4 md:p-8">
        
        {/* TOP BAR: SYSTEM INFO */}
        <div className="flex justify-between text-[10px] text-zinc-600 border-b border-zinc-900 pb-4">
          <div className="flex gap-4">
            <span>USER: ANIKET_KUMAR</span>
            <span>HOST: FREELANCE_OS_V1</span>
          </div>
          <div className="hidden md:block">
            <span>UPTIME: 99.9%</span>
          </div>
        </div>

        {/* MIDDLE: LOGS + PERCENTAGE */}
        <div className="flex flex-col md:flex-row justify-between items-center flex-grow py-12">
          
          {/* Left Side: Technical Logs (Texting) */}
          <div className="flex flex-col gap-1 w-full md:w-1/3">
            {[
              "FETCH_MODULES_SUCCESS",
              "INIT_MERN_ARCHITECTURE",
              "ESTABLISHING_TLS_HANDSHAKE",
              "MOUNTING_NEXTJS_ROUTER",
              "COMPILING_FREELANCE_ASSETS",
              "SHAKING_DEPENDENCY_TREES",
              "OPTIMIZING_CORE_WEB_VITALS",
              "SYSTEM_STABLE_LOAD_COMPLETE"
            ].map((text, i) => (
              <div key={i} className="log-line flex gap-2 text-[9px] md:text-[11px]">
                <span className="text-zinc-700">[{i+1}]</span>
                <span className="text-zinc-400">{text}</span>
              </div>
            ))}
          </div>

          {/* Center: The Hero Percentage */}
          <div className="relative">
            <h1 ref={percentRef} 
              className="text-[12rem] md:text-[12rem] font-bold text-white tracking-tighter tabular-nums leading-none"
            >
              000
            </h1>
          </div>

          {/* Right Side: Decorative Bit-Stream */}
          <div className="hidden md:flex flex-col text-[10px] text-zinc-800 text-right w-1/3">
            <span>0x45 0x21 0x99</span>
            <span>0x12 0x77 0xAA</span>
            <span>0xBB 0xCC 0xDD</span>
            <span>0xEE 0xFF 0x00</span>
          </div>
        </div>

        {/* BOTTOM BAR: CTA / STATUS */}
        <div className="flex justify-between items-end border-t border-zinc-900 pt-4">
          <div className="flex flex-col">
            <span className="text-zinc-600 text-[10px]">CURRENT_TASK</span>
            <span className="text-white text-xs tracking-widest uppercase">Initializing_Portfolio</span>
          </div>
          <div className="text-right">
            <span className="text-zinc-600 text-[10px]">SECURITY_STATUS</span>
            <span className="text-emerald-500 text-xs block">ENCRYPTED</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loading;