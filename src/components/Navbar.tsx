"use client";

import React, { useRef } from "react";
import { 
  HiOutlineHome, 
  HiOutlineUser, 
  HiOutlineCode 
} from "react-icons/hi";
import {
  SiGithub, 
  SiLeetcode 
} from "react-icons/si";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { SlSocialLinkedin } from "react-icons/sl";

const Navbar = () => {
  const container = useRef<HTMLDivElement>(null);

  const navItems = [
    { name: "Home", icon: <HiOutlineHome />, href: "/" },
    { name: "About", icon: <HiOutlineUser />, href: "/about" },
    { name: "Projects", icon: <HiOutlineCode />, href: "/projects" },
    { name: "LinkedIn", icon: <SlSocialLinkedin />, href: "https://linkedin.com/in/AniketKumarMourya", external: true },
    { name: "GitHub", icon: <SiGithub />, href: "https://github.com/Aniketkumar64", external: true },
    { name: "LeetCode", icon: <SiLeetcode />, href: "https://leetcode.com/Aniketkumar64", external: true },
  ];

  useGSAP(() => {
    // Initial entrance animation
    gsap.from(".nav-bar", {
      y: 100,
      opacity: 0,
      duration: 1.5,
      ease: "expo.out",
      delay: 0.5
    });
  }, { scope: container });

  const handleMouseEnter = (e: React.MouseEvent) => {
    const target = e.currentTarget;
    const text = target.querySelector(".nav-text");
    const icon = target.querySelector(".nav-icon");
    const glow = target.querySelector(".nav-glow");

    // Prevent animation overlap
    gsap.killTweensOf([text, icon, glow]);

    const tl = gsap.timeline();
    tl.to(text, { 
      width: "auto", 
      opacity: 1, 
      marginLeft: 12, 
      duration: 0.5, 
      ease: "power3.out" 
    }, 0)
    .to(icon, { 
      color: "#00f2fe", 
      scale: 1.15, 
      duration: 0.3 
    }, 0)
    .to(glow, { 
      opacity: 1, 
      scale: 1.2, 
      duration: 0.4 
    }, 0);
  };

  const handleMouseLeave = (e: React.MouseEvent) => {
    const target = e.currentTarget;
    const text = target.querySelector(".nav-text");
    const icon = target.querySelector(".nav-icon");
    const glow = target.querySelector(".nav-glow");

    gsap.killTweensOf([text, icon, glow]);

    const tl = gsap.timeline();
    tl.to(text, { 
      width: 0, 
      opacity: 0, 
      marginLeft: 0, 
      duration: 0.4, 
      ease: "power3.in" 
    }, 0)
    .to(icon, { 
      color: "rgba(0, 242, 254, 0.4)", 
      scale: 1, 
      duration: 0.3 
    }, 0)
    .to(glow, { 
      opacity: 0, 
      scale: 0.8, 
      duration: 0.3 
    }, 0);
  };

  return (
    <div ref={container} className="fixed bottom-10 left-0 w-full flex justify-center z-[999] pointer-events-none px-4">
      <nav className="nav-bar pointer-events-auto flex items-center gap-1 p-1.5 
        bg-black/20 backdrop-blur-2xl 
        border border-white/10 
        rounded-full 
        shadow-[0_10px_30px_rgba(0,0,0,0.5),0_0_20px_rgba(0,242,254,0.1)]
      ">
        {navItems.map((item) => (
          <a
            key={item.name}
            href={item.href}
            target={item.external ? "_blank" : "_self"}
            rel={item.external ? "noopener noreferrer" : ""}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className="group relative flex items-center px-5 py-3 rounded-full cursor-pointer overflow-hidden transition-all duration-300"
          >
            {/* The Internal "Pill" Glow */}
            <div className="nav-glow absolute inset-0 bg-[#00f2fe]/10 opacity-0 blur-xl rounded-full pointer-events-none" />
            
            {/* Hover Indicator Line (Top) */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-0 h-[1px] bg-[#00f2fe] opacity-0 group-hover:w-1/2 group-hover:opacity-100 transition-all duration-500" />

            {/* Icon */}
            <span className="nav-icon relative z-10 text-lg text-[#00f2fe]/40">
              {item.icon}
            </span>

            {/* Expanding Text Label */}
            <span className="nav-text relative z-10 w-0 opacity-0 overflow-hidden whitespace-nowrap text-[10px] font-bold uppercase tracking-[0.4em] text-[#00f2fe] drop-shadow-[0_0_10px_rgba(0,242,254,0.6)]">
              {item.name}
            </span>
          </a>
        ))}
      </nav>
    </div>
  );
};

export default Navbar;