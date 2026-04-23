"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const AboutBio = () => {
  const triggerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // Select the paragraphs to animate
    const paragraphs = gsap.utils.toArray(".bio-step");

    // Main Timeline tied to the scroll position
    const mainTl = gsap.timeline({
      scrollTrigger: {
        trigger: triggerRef.current,
        start: "top top",      // Start as soon as the top of this component hits the top of the viewport
        end: "+=3500",         // Total scroll distance for the entire sequence (longer for two distinct phases)
        scrub: 1.5,            // Higher number adds more "smoothing" to the scroll sync
        pin: true,             // "Pins" the entire component in the viewport
        anticipatePin: 1,
      },
    });

    // --- PHASE 1: FULL SCREEN TAKEOVER ---
    mainTl.to(".takeover-bg", {
      opacity: 1,              // Fade in the dark background
      scale: 1,                // Remove any slight initial scale (optional, adds dynamism)
      filter: "blur(0px)",     // If you want to start blurred and clear up
      duration: 1.5,
      ease: "expo.out"         // Fast start, slow finish
    })
    .fromTo(".status-panel-takeover", {
      opacity: 0,
      x: 30
    }, {
      opacity: 0.5,            // Side panel appears partially
      x: 0,
      duration: 1,
      ease: "power2.out"
    }, "-=1");                  // Start shortly before the background finishes

    // --- PHASE 2: SEQUENTIAL TEXT REVEAL ---
    paragraphs.forEach((p: any, i) => {
      mainTl.fromTo(p, 
        { 
          opacity: 0, 
          y: 40,               // Slightly larger movement for more impact
          filter: "blur(15px)", // Strong blur to make it "decrypt"
          scale: 0.85 
        },
        { 
          opacity: 1, 
          y: 0, 
          filter: "blur(0px)",
          scale: 1, 
          duration: 2, 
          ease: "back.out(1.2)" // Slight "overshoot" for mechanical feel
        }
      )
      // Only fade out if it's NOT the last paragraph (the conclusion stays visible)
      if (i < paragraphs.length - 1) {
        mainTl.to(p, { 
          opacity: 0, 
          y: -40, 
          filter: "blur(15px)",
          duration: 1.5, 
          delay: 1             // Time the text stays "active" in the center
        });
      }
    });

  }, { scope: triggerRef });

  return (
    <div ref={triggerRef} className="relative w-full h-screen bg-[#030305] flex items-center justify-center overflow-hidden font-mono selection:bg-primary/30">
      

      <div className="takeover-bg absolute inset-0 bg-[#030305] opacity-0 backdrop-blur-3xl z-0 scale-105" />

      {/* CENTER HUD FRAME: This contains the text and appears AFTER the takeover */}
      <div className="relative z-10 w-[90%] max-w-5xl aspect-[21/9] border border-white/5 bg-white/[0.01] flex items-center justify-center p-12">
        {/* Corner Accents (reactive to HUD color) */}
        <div className="absolute top-0 left-0 w-5 h-5 border-t-2 border-l-2 border-primary" />
        <div className="absolute top-0 right-0 w-5 h-5 border-t-2 border-r-2 border-primary" />
        <div className="absolute bottom-0 left-0 w-5 h-5 border-b-2 border-l-2 border-primary" />
        <div className="absolute bottom-0 right-0 w-5 h-5 border-b-2 border-r-2 border-primary" />

        {/* The Animated Text Content (Centered absolute elements) */}
        <div className="relative w-full text-center">
          <div className="bio-step absolute inset-0 flex items-center justify-center opacity-0">
            <h2 className="text-xl md:text-4xl font-extralight text-slate-100 leading-tight">
              A FOUNDATION ENGINEERED FOR <span className="text-primary font-medium">ENDURANCE</span>. <br/>
              SCALABLE MERN ARCHITECTURES THAT NEVER FLINCH.
            </h2>
          </div>

          <div className="bio-step absolute inset-0 flex items-center justify-center opacity-0">
            <h2 className="text-xl md:text-4xl font-extralight text-slate-100 leading-tight">
              USER EXPERIENCE IS <span className="text-primary font-medium">THE ARCHITECTURE</span>. <br/>
              UI/UX IS THE LOGIC, NOT THE APPAREL.
            </h2>
          </div>

          <div className="bio-step absolute inset-0 flex items-center justify-center opacity-0">
            <h2 className="text-xl md:text-4xl font-extralight text-slate-100 leading-tight">
              SMART INDIA HACKATHON <span className="text-primary font-medium">VETERAN</span>. <br/>
              PRECISION PROBLEM-SOLVING UNDER MAXIMUM VELOCITY.
            </h2>
          </div>
        </div>
      </div>

      {/* RIGHT STATUS PANEL: Reactive element for context */}
      <div className="status-panel-takeover absolute right-12 top-1/2 -translate-y-1/2 space-y-8 opacity-0 hidden md:block z-20">
        <div className="text-right">
          <p className="text-[10px] text-primary/60 mb-1 tracking-[0.3em]">SESSION_ID</p>
          <p className="text-xs text-white">AKM.DEV_SESSION_01</p>
        </div>
        <div className="text-right">
          <p className="text-[10px] text-primary/60 mb-1 tracking-[0.3em]">REVEAL_STATUS</p>
          <p className="text-xs text-white">DECRYPT_ACTIVE</p>
        </div>
        <div className="h-32 w-[1px] bg-white/10 ml-auto overflow-hidden">
          <div className="w-full bg-primary h-full animate-progress-up" style={{ animationDuration: '3s' }} />
        </div>
      </div>
    </div>
  );
};

export default AboutBio;