"use client";

import  { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// import AboutProjectSection from "@/components/about/AboutProjectSection";
import ProcessSection from "@/components/about/ProcessSection";
import ContactSection from "@/components/about/ContactSection";
import AboutSkills from "@/components/about/AboutSkills";
import AboutBio from "@/components/about/AboutBio";


if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const AboutPage = () => {
  const container = useRef<HTMLDivElement>(null);





  return (
    <main ref={container} className="relative min-h-screen bg-[#e0e7eb] dark:bg-[#030305] text-slate-800 dark:text-[#d6e4ff] font-mono selection:bg-[#00f2fe] selection:text-[#030305] overflow-x-hidden transition-colors duration-300">
      
      {/* --- BLUEPRINT BACKGROUND --- */}
      <div className="fixed inset-0 pointer-events-none z-0 opacity-20 dark:opacity-10">
        <svg className="w-full h-full">
          <path 
            className="blueprint-path" 
            d="M 100,0 V 400 Q 100,500 200,500 H 800 Q 900,500 900,600 V 2000" 
            fill="none" 
            stroke="#00f2fe" 
            strokeWidth="0.5" 
          />
        </svg>
      </div>

      <div className="relative z-10 w-screen mx-auto px-6 md:px-20 py-20">
        
        {/* --- HEADER --- */}
        <header className="min-h-[80vh] flex flex-col justify-center">
          <div className="hud-panel flex items-center gap-4 mb-6">
            <span className="text-[#00c2cc] dark:text-[#00f2fe] text-xs font-bold tracking-[0.6em]">DECODING_IDENTITY.v4</span>
            <div className="h-[1px] w-12 bg-slate-400/30 dark:bg-[#a8c1cf]/20" />
          </div>
          
          <h1 className="hud-panel text-5xl md:text-[8rem] font-black tracking-tighter leading-[0.85] uppercase text-slate-900 dark:text-white">
            ANIKET KUMAR<br />
            <span className="text-transparent" style={{ WebkitTextStroke: "2px #00f2fe" }}>MOURYA.</span>
          </h1>

          <div className="hud-panel mt-12 grid grid-cols-1 md:grid-cols-2 gap-12 border-l border-[#00f2fe] pl-8">
            <p className="text-lg md:text-2xl font-light leading-relaxed max-w-xl opacity-90 italic text-slate-700 dark:text-[#d6e4ff]">
              "I am a passionate full-stack developer specializing in the <span className="text-slate-900 dark:text-white font-bold">MERN stack</span>, currently bridging the gap between Computer Science and Design."
            </p>
                        <div className="hud-reveal relative group">
              <div className="absolute inset-0 bg-[#00f2fe]/5 rounded-sm blur-xl group-hover:bg-[#00f2fe]/10 transition-all duration-700" />
              <div className="relative bg-white/5 dark:bg-black/20 backdrop-blur-md border border-[#00f2fe]/20 p-6 rounded-sm overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#00f2fe] to-transparent opacity-30 animate-scan-slow" />
                
                <div className="flex justify-between items-center mb-6">
                  <div className="flex gap-1.5 items-center">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#00f2fe] animate-pulse" />
                    <span className="text-[8px] tracking-[0.3em] text-[#00f2fe] uppercase font-bold">System_Live</span>
                  </div>
                  <span className="text-[8px] opacity-40 font-mono">NODE_AKM_04</span>
                </div>

                <div className="flex flex-col gap-4 text-[10px] md:text-xs uppercase tracking-[0.2em]">
                  <div className="flex justify-between items-end border-b border-[#00f2fe]/10 pb-2">
                    <span className="opacity-50">Status</span>
                    <span className="text-[#00c2cc] dark:text-[#00f2fe] font-bold">Active_Dev</span>
                  </div>
                  <div className="flex justify-between items-end border-b border-[#00f2fe]/10 pb-2">
                    <span className="opacity-50">Core</span>
                    <span className="text-slate-900 dark:text-white">Full-Stack Engineering</span>
                  </div>
                  <div className="flex justify-between items-end">
                    <span className="opacity-50">Focus</span>
                    <span className="text-slate-900 dark:text-white">UI/UX & Performance</span>
                  </div>
                </div>
              </div></div>
          </div>
        </header>
 </div>
        {/* --- BIO SECTION --- */}
      
        <AboutBio/>
        <AboutSkills/>
        {/* <AboutProjectSection/> */}
        <ProcessSection/>
        <ContactSection/>

        {/* --- FOOTER --- */}
        <footer className="hud-panel flex flex-col md:flex-row justify-between items-end border-t border-slate-400/20 dark:border-[#a8c1cf]/10 pt-16 opacity-60 text-slate-600 dark:text-[#a8c1cf]">
            <div className="text-[9px] tracking-[0.5em] uppercase">Engineered_By_Me // 2026</div>
            <div className="text-right text-[10px] tracking-widest font-bold text-slate-900 dark:text-white uppercase">
              {new Date().toISOString().split('T')[0]} // AKM_TERMINAL
            </div>
        </footer>
     
    </main>
  );
};

export default AboutPage;