"use client";

import React, { useRef } from "react";
import { HiOutlineHome, HiOutlineUser, HiOutlineCode } from "react-icons/hi";
import { SiGithub, SiLeetcode } from "react-icons/si";
import { SlSocialLinkedin } from "react-icons/sl";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Navbar = () => {
  const container = useRef<HTMLDivElement>(null);

  const navItems = [
    { name: "Home", icon: <HiOutlineHome />, href: "/" },
    { name: "About", icon: <HiOutlineUser />, href: "/about-me" },
    { name: "Projects", icon: <HiOutlineCode />, href: "/projects" },
    { name: "LinkedIn", icon: <SlSocialLinkedin />, href: "https://linkedin.com/in/AniketKumarMourya", external: true },
    { name: "GitHub", icon: <SiGithub />, href: "https://github.com/Aniketkumar64", external: true },
    { name: "LeetCode", icon: <SiLeetcode />, href: "https://leetcode.com/Aniketkumar64", external: true },
  ];

  useGSAP(() => {
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

    gsap.killTweensOf([text, icon]);

    const tl = gsap.timeline();
    tl.to(text, { 
      width: "auto", 
      opacity: 1, 
      marginLeft: 12, 
      duration: 0.5, 
      ease: "power3.out" 
    }, 0)
    .to(icon, { 
      scale: 1.2, 
      duration: 0.3 
    }, 0);
  };

  const handleMouseLeave = (e: React.MouseEvent) => {
    const target = e.currentTarget;
    const text = target.querySelector(".nav-text");
    const icon = target.querySelector(".nav-icon");

    gsap.killTweensOf([text, icon]);

    const tl = gsap.timeline();
    tl.to(text, { 
      width: 0, 
      opacity: 0, 
      marginLeft: 0, 
      duration: 0.4, 
      ease: "power3.in" 
    }, 0)
    .to(icon, { 
      scale: 1, 
      duration: 0.3 
    }, 0);
  };

  return (
    <div ref={container} className="fixed bottom-10 left-0 w-full flex justify-center z-[999] pointer-events-none px-4 mix-blend-difference">
      <nav className="nav-bar pointer-events-auto flex items-center gap-1 p-1.5 
        bg-white/10 backdrop-blur-lg 
        border border-white/20 
        rounded-full 
      ">
        {navItems.map((item) => (
          <a
            key={item.name}
            href={item.href}
            target={item.external ? "_blank" : "_self"}
            rel={item.external ? "noopener noreferrer" : ""}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className="group relative flex items-center px-5 py-3 rounded-full cursor-pointer overflow-hidden transition-all duration-300 text-white"
          >
            {/* Background Pill on Hover */}
            <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity rounded-full pointer-events-none" />

            {/* Icon */}
            <span className="nav-icon relative z-10 text-xl transition-transform duration-300">
              {item.icon}
            </span>

            {/* Expanding Text Label */}
            <span className="nav-text relative z-10 w-0 opacity-0 overflow-hidden whitespace-nowrap text-[10px] font-bold uppercase tracking-[0.4em] text-white">
              {item.name}
            </span>
          </a>
        ))}
      </nav>
    </div>
  );
};

export default Navbar;