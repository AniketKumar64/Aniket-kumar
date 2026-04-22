"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";

interface LoadingProps {
  onComplete?: () => void;
}

const Loading: React.FC<LoadingProps> = ({ onComplete }) => {
  const loaderRef = useRef<HTMLDivElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!loaderRef.current) return;

    const tl = gsap.timeline({
      onComplete: () => onComplete?.(),
    });

    // 1. Initial State
    tl.set(".honey-hex", { scale: 0, opacity: 0, transformOrigin: "50% 50%" });
    tl.set(".log-item", { opacity: 0, x: -5 });

    // 2. The 3-Second Sequence
    tl.to(".log-item", {
      opacity: 1,
      x: 0,
      duration: 0.4,
      stagger: 0.05,
      ease: "power2.out"
    })
    .to(".honey-hex", {
      opacity: 1,
      scale: 1,
      duration: 0.6,
      stagger: {
        amount: 0.5,
        grid: "auto",
        from: "center"
      },
      ease: "elastic.out(1, 0.5)"
    }, "-=0.2")
    .to(".honey-hex", {
      fill: "#00f2fe",
      duration: 0.4,
      stagger: { amount: 0.3, from: "edges" }
    }, "-=0.3")
    // Keep visible for a moment
    .to({}, { duration: 0.8 }) 
    // 3. Exit Animation (fast collapse)
    .to(".loader-inner", {
      scaleY: 0,
      opacity: 0,
      duration: 0.5,
      ease: "expo.inOut"
    })
    .set(loaderRef.current, { display: "none" });

    return () => { tl.kill(); };
  }, [onComplete]);

  // Helper to generate honeycomb grid positions
  const hexGrid = [
    { r: 0, c: 0 }, 
    { r: -1, c: 0.5 }, { r: -1, c: -0.5 },
    { r: 0, c: 1 }, { r: 0, c: -1 },
    { r: 1, c: 0.5 }, { r: 1, c: -0.5 }
  ];

  return (
    <div
      ref={loaderRef}
      style={{ backgroundColor: "#030305" }}
      className="fixed inset-0 z-[9999] flex items-center justify-center font-mono overflow-hidden"
    >
      <div className="loader-inner w-full h-full flex flex-col justify-between p-6 md:p-12">
        
        {/* TOP STATUS */}
        <div className="flex justify-between items-start">
          <div className="flex flex-col gap-1">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-[#00f2fe] animate-pulse" />
              <span style={{ color: "#a8c1cf" }} className="text-[10px] tracking-widest uppercase">System_Active</span>
            </div>
            <span style={{ color: "#00f2fe" }} className="text-[9px]">ID: 00-AF-92-X1</span>
          </div>
          <div className="text-right text-[10px]" style={{ color: "#a8c1cf" }}>
            [ EST_RUNTIME: 3.0s ]
          </div>
        </div>

        {/* CENTER CONTENT: HONEYCOMB */}
        <div className="relative flex-grow flex items-center justify-center">
          <svg viewBox="0 0 100 100" className="w-48 h-48 md:w-64 md:h-64">
            <defs>
              <filter id="glow">
                <feGaussianBlur stdDeviation="1.5" result="coloredBlur"/>
                <feMerge>
                  <feMergeNode in="coloredBlur"/><feMergeNode in="SourceGraphic"/>
                </feMerge>
              </filter>
            </defs>
            <g transform="translate(50, 50)" filter="url(#glow)">
              {hexGrid.map((pos, i) => (
                <path
                  key={i}
                  className="honey-hex"
                  d="M0 -10 L8.66 -5 L8.66 5 L0 10 L-8.66 5 L-8.66 -5 Z"
                  fill="transparent"
                  stroke="#00f2fe"
                  strokeWidth="0.5"
                  style={{
                    transform: `translate(${pos.c * 20}px, ${pos.r * 18}px)`
                  }}
                />
              ))}
            </g>
          </svg>
        </div>

        {/* BOTTOM: LOGS & METADATA */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-end border-t border-[#a8c1cf]/10 pt-6">
          <div className="flex flex-col gap-1">
            {["SEC_BOOT_SEQUENCE", "DYNA_ALLOC_MEM", "VIRTUAL_DOM_SYNC"].map((txt, i) => (
              <div key={i} className="log-item flex gap-3 text-[10px]">
                <span style={{ color: "#00f2fe" }}>0{i+1}</span>
                <span style={{ color: "#a8c1cf" }}>{txt}</span>
              </div>
            ))}
          </div>

          <div className="flex flex-col items-center">
            <div className="w-full h-[1px] bg-[#a8c1cf]/10 relative overflow-hidden">
               <div className="absolute inset-0 bg-[#00f2fe] origin-left animate-progress" 
                    style={{ animation: 'progress 3s linear forwards' }} />
            </div>
            <span className="text-[9px] mt-2" style={{ color: "#a8c1cf" }}>CORE_STABILITY: 100%</span>
          </div>

          <div className="text-right">
            <span className="block text-[10px] mb-1" style={{ color: "#a8c1cf" }}>AUTH_TOKEN</span>
            <span style={{ color: "#00f2fe" }} className="text-xs break-all">
              f2fe-a8c1cf-030305
            </span>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes progress {
          0% { transform: scaleX(0); }
          100% { transform: scaleX(1); }
        }
      `}</style>
    </div>
  );
};

export default Loading;