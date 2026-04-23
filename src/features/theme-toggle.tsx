"use client";

import { useTheme } from "next-themes";
import { useRef, useEffect, useState } from "react";
import { HiOutlineSun, HiOutlineMoon } from "react-icons/hi";
import gsap from "gsap";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const scanRef = useRef<HTMLDivElement>(null);

  useEffect(() => setMounted(true), []);

  const handleToggle = () => {
    const newTheme = theme === "dark" ? "light" : "dark";

    const tl = gsap.timeline({
      onComplete: () => setTheme(newTheme),
    });

    // The "Wipe" effect: Beam travels from left to right
    tl.to(scanRef.current, {
      x: "200%", 
      duration: 0.5,
      ease: "power2.inOut",
    })
    .set(scanRef.current, { x: "0%" }); // Reset for next time

    // Mechanical Icon Snap
    gsap.fromTo(".theme-icon", 
      { rotation: 0, scale: 0.5, opacity: 0 },
      { rotation: 360, scale: 1, opacity: 1, duration: 0.6, ease: "back.out(1.5)" }
    );
  };

  if (!mounted) return null;

  return (
    <div className="fixed top-8 right-8  mix-blend-difference z-[10000]">
    <button
      onClick={handleToggle}
      className="group flex items-center gap-3 px-5 py-2.5 
       bg-white/10 backdrop-blur-lg 
        border border-white/20 
       
        rounded-full overflow-hidden transition-all duration-500 hover:scale-105 active:scale-95 shadow-xl"
    >
      <div 
        ref={scanRef}
        className="absolute top-0 -left-full w-full h-full 
          bg-gradient-to-r from-transparent via-[#00f2fe]/40 to-transparent 
          pointer-events-none z-0"
      />

  
      <div className="theme-icon relative z-10 text-lg text-[#030305] dark:text-[#00f2fe]">
        {theme === "dark" ? <HiOutlineSun /> : <HiOutlineMoon />}
      </div>

    
      <span className="relative z-10 text-[10px] font-bold uppercase tracking-[0.2em] text-[#030305] dark:text-[#d6e4ff]">
        {theme === "dark" ? "Light_Mode" : "Dark_Mode"}
      </span>

      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-[#00f2fe] opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-[0_0_10px_#00f2fe]" />
    </button>
  </div>
  );
}