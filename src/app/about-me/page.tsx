"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const AboutPage = () => {
  const container = useRef<HTMLDivElement>(null);
  const maskRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline();

    // ENTRY IRIS REVEAL
    tl.fromTo(maskRef.current, 
      { clipPath: "circle(0% at 50% 50%)" },
      { clipPath: "circle(150% at 50% 50%)", duration: 2.2, ease: "expo.inOut" }
    )
    .from(".about-title", {
      opacity: 0,
      y: 100,
      skewY: 7,
      stagger: 0.1,
      duration: 1.2,
      ease: "power4.out"
    }, "-=1.2");

    const sections = gsap.utils.toArray(".reveal-section");
    sections.forEach((section: any) => {
      gsap.from(section, {
        scrollTrigger: {
          trigger: section,
          start: "top 85%",
        },
        opacity: 0,
        y: 40,
        duration: 1,
        ease: "power3.out"
      });
    });
  }, { scope: container });

  return (
    <main ref={container} className="relative min-h-screen bg-[#030305] overflow-x-hidden">
      <div ref={maskRef} className="relative min-h-screen bg-[#e0e7eb] dark:bg-[#030305] text-[#030305] dark:text-[#d6e4ff] pt-32 pb-40 px-8 md:px-20 transition-colors duration-1000">
        
        <div className="max-w-7xl mx-auto space-y-48">
          
          {/* SECTION 01: THE PROFILE */}
          <section className="flex flex-col lg:flex-row gap-16">
            <div className="lg:w-2/3 space-y-12">
              <div className="space-y-4">
                <h2 className="text-[10px] uppercase tracking-[0.8em] text-[#00c3fe] dark:text-[#00f2fe] font-black">01 // PROFILE_SUMMARY</h2>
                <h1 className="about-title text-6xl md:text-9xl font-black tracking-tighter uppercase leading-[0.85]">
                  Engineering <br /> <span className="text-[#00c3fe] dark:text-[#00f2fe]">Scalable Realities.</span>
                </h1>
              </div>
              
              <div className="space-y-8 max-w-2xl">
                <p className="about-title text-xl md:text-3xl font-light leading-snug tracking-tight italic">
                  "Turning complex problems into elegant, high-performance digital solutions."
                </p>
                <div className="h-[1px] w-24 bg-[#00c3fe] dark:bg-[#00f2fe]" />
                <p className="about-title text-sm md:text-lg opacity-70 leading-relaxed font-mono uppercase tracking-tight">
                  I am a B.Tech Computer Science student specializing in the MERN stack. My focus lies in the intersection of robust backend logic and fluid, professional UI/UX design. From participation in the Smart India Hackathon (SIH) to building large-scale e-commerce infrastructures, I treat every project as a mission-critical artifact.
                </p>
              </div>
            </div>

            <div className="lg:w-1/3 sidebar-box self-start sticky top-32">
              <div className="p-8 border border-[#030305]/10 dark:border-[#d6e4ff]/10 bg-[#00c3fe]/5 dark:bg-[#00f2fe]/[0.02] backdrop-blur-xl">
                 <h4 className="text-[10px] font-mono mb-8 opacity-40 tracking-widest uppercase">Engineer_Log //</h4>
                 <div className="space-y-6">
                    {[
                      { l: "Specialization", v: "MERN // Full-Stack" },
                      { l: "Academics", v: "B.Tech Computer Science" },
                      { l: "Key_Event", v: "SIH Participant" },
                      { l: "Core_Focus", v: "DSA & System Design" }
                    ].map(s => (
                      <div key={s.l}>
                        <p className="text-[9px] font-mono opacity-40 uppercase">{s.l}</p>
                        <p className="text-sm font-bold uppercase tracking-tight">{s.v}</p>
                      </div>
                    ))}
                 </div>
              </div>
            </div>
          </section>

          {/* SECTION 02: TECHNICAL DEPLOYMENTS */}
          <section className="reveal-section grid grid-cols-1 lg:grid-cols-2 gap-20">
            <div className="space-y-8">
              <h2 className="text-[10px] uppercase tracking-[0.8em] text-[#00c3fe] dark:text-[#00f2fe] font-black">02 // DEPLOYMENTS</h2>
              <h3 className="text-4xl md:text-6xl font-black uppercase tracking-tighter">Active <br /> Benchmarks.</h3>
            </div>
            <div className="grid grid-cols-1 gap-12">
               <div className="p-10 border border-[#030305]/10 dark:border-[#d6e4ff]/10 hover:border-[#00c3fe] transition-colors">
                  <h4 className="text-2xl font-black uppercase tracking-tighter mb-4">E-Commerce_Infrastructure</h4>
                  <p className="text-sm opacity-60 font-mono italic mb-6">"Deploying a high-traffic retail environment with seamless state management and optimized database queries."</p>
                  <div className="flex gap-4 text-[10px] font-mono opacity-40 uppercase tracking-widest">
                    <span>#MongoDB</span> <span>#NextJS</span> <span>#Redux</span>
                  </div>
               </div>
               <div className="p-10 border border-[#030305]/10 dark:border-[#d6e4ff]/10 hover:border-[#00c3fe] transition-colors">
                  <h4 className="text-2xl font-black uppercase tracking-tighter mb-4">AI_Snippet_Vault</h4>
                  <p className="text-sm opacity-60 font-mono italic mb-6">"Architecting an AI-powered repository for developers to store and retrieve mission-critical code patterns."</p>
                  <div className="flex gap-4 text-[10px] font-mono opacity-40 uppercase tracking-widest">
                    <span>#NodeJS</span> <span>#OpenAI</span> <span>#Tailwind</span>
                  </div>
               </div>
            </div>
          </section>

          {/* SECTION 03: PROCESS & PREPARATION */}
          <section className="reveal-section relative py-20 border-y border-[#030305]/10 dark:border-[#d6e4ff]/10">
            <div className="absolute top-0 right-0 p-8 text-[8px] font-mono opacity-20 uppercase tracking-[1em]">Logical_Foundations</div>
            <div className="max-w-4xl space-y-12">
              <h2 className="text-[10px] uppercase tracking-[0.8em] text-[#00c3fe] dark:text-[#00f2fe] font-black">03 // PREPARATION</h2>
              <p className="text-2xl md:text-5xl font-light tracking-tight leading-tight uppercase">
                Rigorously sharpening <span className="font-black text-[#00c3fe] dark:text-[#00f2fe]">Problem-Solving</span> skills through structured DSA and competitive logic.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8">
                 <div className="space-y-4">
                    <h5 className="text-xs font-bold uppercase tracking-widest">SIH Experience</h5>
                    <p className="text-sm opacity-50 font-mono italic leading-relaxed">"Gained high-pressure problem-solving expertise and collaborated in elite teams to build innovative solutions for real-world governance problems."</p>
                 </div>
                 <div className="space-y-4">
                    <h5 className="text-xs font-bold uppercase tracking-widest">Continuous Learning</h5>
                    <p className="text-sm opacity-50 font-mono italic leading-relaxed">"Exploring Next.js 15, GSAP physics, and ShadCN UI to stay at the cutting edge of modern interface engineering."</p>
                 </div>
              </div>
            </div>
          </section>

          {/* SECTION 04: STATUS STAMP */}
          <section className="reveal-section flex flex-col items-center text-center space-y-12">
             <div className="w-[1px] h-32 bg-gradient-to-b from-[#00c3fe] dark:from-[#00f2fe] to-transparent" />
             <div className="space-y-4">
                <p className="text-[10px] font-mono uppercase tracking-[0.8em] opacity-40">System_Awaiting_Input</p>
                <h3 className="text-4xl font-black uppercase tracking-tighter">Ready for <br /> Next Complexity.</h3>
             </div>
             <button className="px-12 py-4 border border-[#030305] dark:border-[#d6e4ff] text-[10px] font-mono uppercase tracking-[0.5em] hover:bg-[#00c3fe] dark:hover:bg-[#00f2fe] hover:text-[#030305] transition-all duration-500">
                Initiate_Collaboration
             </button>
          </section>

        </div>
      </div>

      <div className="fixed bottom-10 left-10 text-[15vw] font-black opacity-[0.02] dark:opacity-[0.01] pointer-events-none select-none -z-10 tracking-tighter uppercase leading-none">
        ANIKET
      </div>
    </main>
  );
};

export default AboutPage;