"use client";

import Link from "next/link";
import { useRef } from "react";
import ThemeToggle from "./theme-toggle";
import useIsMounted from "@/functions/use-is-mounted";

export default function NavBar() {
  const mounted = useIsMounted();
  const navBar = useRef(false);

  if (!mounted) {
    return null;
  }

  return (
    <>
      <nav
        id="nav-bar"
        ref={navBar}
        className=" color-red-500 container z-50 mx-auto flex flex-row justify-between border-b px-10 py-3 dark:border-dark-accent max-sm:px-6 lg:max-w-5xl"
      >
        <Link href="/">
          <h1 className="font-enriqueta text-3xl font-bold max-sm:text-2xl">
            Ali Al Kindi
          </h1>
        </Link>
        {/* Theme Toggle for larger screens */}
        <div className="flex items-center">
          <ThemeToggle />
        </div>
      </nav>
    </>
  );
}
