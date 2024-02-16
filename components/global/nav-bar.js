"use client";

import { useState, useEffect, useRef, useLayoutEffect } from "react";
import ThemeToggle from "./theme-toggle";
import gsap, { Power3 } from "gsap";

import HomeIcon from "public/data/skills/skills-logos/home.svg";
import ProfileIcon from "public/data/skills/skills-logos/profile.svg";
import StarIcon from "public/data/skills/skills-logos/star.svg";
import CodeIcon from "public/data/skills/skills-logos/code.svg";
import MailIcon from "public/data/skills/skills-logos/mail.svg";

export default function NavBar() {
  const [mounted, setMounted] = useState(false);
  const tl = useRef();
  const navBar = useRef(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useLayoutEffect(() => {
    tl.current = gsap
      .timeline()
      .from(navBar.current, {
        y: screen.width > 768 ? "-100%" : "+100%",
        opacity: 0,
        duration: 1.5,
        ease: Power3.easeOut,
      })
      .from(
        "#sm-theme-toggle",
        {
          y: "-100%",
          opacity: 0,
          duration: 1.5,
          ease: Power3.easeOut,
        },
        "-=1",
      );
  }, [mounted]);

  if (!mounted) {
    return null;
  }

  const nav_items = [
    {
      name: "Home",
      icon: <HomeIcon className="h-7 w-7" fill="currentcolor" />,
    },
    {
      name: "About",
      icon: <ProfileIcon className="h-7 w-7" fill="currentcolor" />,
    },
    {
      name: "Skills",
      icon: <StarIcon className="h-7 w-7" fill="currentcolor" />,
    },
    {
      name: "Projects",
      icon: (
        <CodeIcon className="h-7 w-7" fill="currentcolor" fillRule="evenodd" />
      ),
    },
    {
      name: "Contact",
      icon: <MailIcon className="h-8 w-8" fill="currentcolor" />,
    },
  ];

  const scrollToAnchor = (anchorId) => {
    var element = document.getElementById(anchorId);
    element.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "start",
    });
  };

  return (
    <>
      {/* Theme Toggle for smaller screens */}
      <div id="sm-theme-toggle" className="fixed right-8 top-6 sm:hidden">
        <ThemeToggle />
      </div>

      <nav
        id="nav-bar"
        ref={navBar}
        className=" color-red-500 fixed left-0 right-0 z-50 flex flex-row justify-center gap-10 py-3 backdrop-blur-md max-sm:bottom-0 max-sm:justify-between max-sm:px-10"
      >
        {nav_items.map((item) => {
          return (
            <button
              onClick={() => scrollToAnchor(item.name.toLowerCase())}
              key={item.name}
              className="transition duration-300 ease-in-out sm:hover:scale-[120%] sm:hover:opacity-60"
            >
              {item.icon}
            </button>
          );
        })}

        {/* Theme Toggle for larger screens */}
        <div className="flex items-center max-sm:hidden">
          <ThemeToggle />
        </div>
      </nav>
    </>
  );
}
