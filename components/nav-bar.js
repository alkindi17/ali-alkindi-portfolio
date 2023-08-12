"use client";

import { useState, useEffect, useRef, useLayoutEffect } from "react";
import ThemeToggle from "./theme-toggle";
import gsap, { Power3 } from "gsap";

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
        "-=1"
      );
  }, [mounted]);

  if (!mounted) {
    return null;
  }

  const nav_items = [
    {
      name: "Home",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="w-7 h-7"
        >
          <path
            fillRule="evenodd"
            d="M9.293 2.293a1 1 0 011.414 0l7 7A1 1 0 0117 11h-1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-3a1 1 0 00-1-1H9a1 1 0 00-1 1v3a1 1 0 01-1 1H5a1 1 0 01-1-1v-6H3a1 1 0 01-.707-1.707l7-7z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      name: "About",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="w-7 h-7"
        >
          <path d="M10 8a3 3 0 100-6 3 3 0 000 6zM3.465 14.493a1.23 1.23 0 00.41 1.412A9.957 9.957 0 0010 18c2.31 0 4.438-.784 6.131-2.1.43-.333.604-.903.408-1.41a7.002 7.002 0 00-13.074.003z" />
        </svg>
      ),
    },
    {
      name: "Skills",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="w-7 h-7"
        >
          <path
            fillRule="evenodd"
            d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      name: "Projects",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="w-7 h-7"
        >
          <path
            fillRule="evenodd"
            d="M4.25 2A2.25 2.25 0 002 4.25v11.5A2.25 2.25 0 004.25 18h11.5A2.25 2.25 0 0018 15.75V4.25A2.25 2.25 0 0015.75 2H4.25zm4.03 6.28a.75.75 0 00-1.06-1.06L4.97 9.47a.75.75 0 000 1.06l2.25 2.25a.75.75 0 001.06-1.06L6.56 10l1.72-1.72zm4.5-1.06a.75.75 0 10-1.06 1.06L13.44 10l-1.72 1.72a.75.75 0 101.06 1.06l2.25-2.25a.75.75 0 000-1.06l-2.25-2.25z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      name: "Contact",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="w-7 h-7"
        >
          <path d="M3 4a2 2 0 00-2 2v1.161l8.441 4.221a1.25 1.25 0 001.118 0L19 7.162V6a2 2 0 00-2-2H3z" />
          <path d="M19 8.839l-7.77 3.885a2.75 2.75 0 01-2.46 0L1 8.839V14a2 2 0 002 2h14a2 2 0 002-2V8.839z" />
        </svg>
      ),
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
      <div id="sm-theme-toggle" className="sm:hidden fixed top-6 right-8">
        <ThemeToggle />
      </div>

      <nav
        id="nav-bar"
        ref={navBar}
        className=" z-50 flex fixed flex-row gap-10 justify-center py-3 max-sm:justify-between max-sm:px-10 max-sm:bottom-0 left-0 right-0 color-red-500 backdrop-blur-md"
      >
        {nav_items.map((item) => {
          return (
            <button
              onClick={() => scrollToAnchor(item.name.toLowerCase())}
              key={item.name}
              className="sm:hover:opacity-60 sm:hover:scale-[120%] transition ease-in-out duration-300"
            >
              {item.icon}
            </button>
          );
        })}

        {/* Theme Toggle for larger screens */}
        <div className="max-sm:hidden items-center flex">
          <ThemeToggle />
        </div>
      </nav>
    </>
  );
}
