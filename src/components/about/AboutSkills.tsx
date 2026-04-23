"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// IMPORTANT: register ONLY ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

import {
  SiReact, SiNextdotjs, SiNodedotjs, SiExpress, SiMongodb,
  SiPostgresql, SiPrisma, SiSupabase, SiFirebase,
  SiTailwindcss, SiFramer, SiFigma,
  SiJavascript, SiTypescript, SiCplusplus,
  SiGit, SiGithub, SiDocker,
  SiVercel, SiNetlify,
  SiRedux, SiZod,
  SiGraphql, SiApollographql,
  SiStripe, SiClerk,
  SiOpenai
} from "react-icons/si";
import { FaAws } from "react-icons/fa";

const AboutSkills = () => {
  const container = useRef<HTMLDivElement>(null);

  const skillBadges = [
    { name: "React", icon: <SiReact />, level: "Expert" },
    { name: "Next.js 15", icon: <SiNextdotjs />, level: "Expert" },
    { name: "JavaScript", icon: <SiJavascript />, level: "Master" },
    { name: "TypeScript", icon: <SiTypescript />, level: "Expert" },
    { name: "Tailwind", icon: <SiTailwindcss />, level: "Master" },
    { name: "Framer Motion", icon: <SiFramer />, level: "Intermediate" },
    { name: "Redux", icon: <SiRedux />, level: "Intermediate" },
    { name: "Node.js", icon: <SiNodedotjs />, level: "Master" },
    { name: "Express", icon: <SiExpress />, level: "Expert" },

    { name: "MongoDB", icon: <SiMongodb />, level: "Intermediate" },
    { name: "PostgreSQL", icon: <SiPostgresql />, level: "Intermediate" },
    { name: "Prisma", icon: <SiPrisma />, level: "Master" },
    { name: "Supabase", icon: <SiSupabase />, level: "Expert" },
    { name: "Firebase", icon: <SiFirebase />, level: "Intermediate" },
    { name: "Git", icon: <SiGit />, level: "Master" },
    { name: "GitHub", icon: <SiGithub />, level: "Master" },
   
    { name: "AWS", icon: <FaAws />, level: "Intermediate" },
    { name: "Vercel", icon: <SiVercel />, level: "Expert" },
    { name: "Netlify", icon: <SiNetlify />, level: "Intermediate" },
    { name: "Zod", icon: <SiZod />, level: "Intermediate" },
    { name: "Stripe", icon: <SiStripe />, level: "Intermediate" },
    { name: "Clerk Auth", icon: <SiClerk />, level: "Intermediate" },
    { name: "C++", icon: <SiCplusplus />, level: "Expert" },
    { name: "OpenAI", icon: <SiOpenai />, level: "Intermediate" },
  ];

  useGSAP(
    () => {
      // 🔥 Timeline for proper sequence
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container.current,
          start: "top 80%",
        },
      });

      // Header animation with splitting effect
      tl.from(".hud-header h2", {
        x: -60,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
      })
      .from(".hud-header p", {
        x: -40,
        opacity: 0,
        duration: 0.6,
        ease: "power3.out",
      }, "-=0.5")
      .from(".hud-header .border-cyan-400", {
        scaleY: 0,
        transformOrigin: "top",
        duration: 0.8,
        ease: "power2.out",
      }, "-=1.2");

      // Staggered skill badges animation with multiple effects
      tl.from(".skill-badge", {
        y: 40,
        opacity: 0,
        duration: 0.6,
        scale: 0.8,
        rotationX: -15,
        stagger: {
          each: 0.05,
          grid: "auto",
          from: "start"
        },
        ease: "back.out(1.2)",
      }, "-=0.6");

      // Continuous hover animations for icons
      gsap.utils.toArray<HTMLElement>(".skill-badge").forEach((badge) => {
        const icon = badge.querySelector(".skill-icon");
        
        badge.addEventListener("mouseenter", () => {
          gsap.to(icon, {
            scale: 1.3,
            duration: 0.6,
            ease: "back.out(2)",
          });
          
          gsap.to(badge, {
            y: -8,
            sacle: 1.05,
            boxShadow: "0 10px 30px rgba(34, 211, 238, 0.3)",
            duration: 0.3,
            ease: "power2.out",
          });
        });

        badge.addEventListener("mouseleave", () => {
          gsap.to(icon, {
            scale: 1,
            rotation: 0,
            duration: 0.4,
            ease: "power2.out",
          });
          
          gsap.to(badge, {
            y: 0,
            boxShadow: "0 0 0 rgba(34, 211, 238, 0)",
            duration: 0.3,
            ease: "power2.out",
          });
        });
      });

      // Parallax effect on scroll
      gsap.to(".skill-badge", {
        scrollTrigger: {
          trigger: container.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
        },
        y: (i) => (i % 2 === 0 ? -30 : 30),
        ease: "none",
      });
    },
    { scope: container }
  );

  return (
    <section ref={container} className="mb-48 bg-[#030305] text-white  px-6 md:px-20 py-20 overflow-hidden">
      {/* Header */}
      <div className="hud-header mb-16 border-l border-cyan-400 pl-6 relative">
        <h2 className="text-cyan-400 text-[10px] tracking-[0.8em] uppercase mb-2">
          Technical_Arsenal
        </h2>
        <p className="text-3xl md:text-5xl font-black uppercase">
          My_Loadout.
        </p>
      </div>

      {/* Grid */}
      <div className="skills-grid grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {skillBadges.map((skill, i) => (
          <div
            key={i}
            className="skill-badge group flex flex-col items-center p-6 border border-white/10 hover:border-cyan-400/40 transition-colors duration-300 bg-black/20"
          >
            <div className="skill-icon text-4xl mb-4 transition-transform">
              {skill.icon}
            </div>

            <span className="text-xs font-bold uppercase mb-1">
              {skill.name}
            </span>

            <span className="text-[10px] text-cyan-400 uppercase tracking-widest">
              {skill.level}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AboutSkills;