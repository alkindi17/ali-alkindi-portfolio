import Image from "next/image";
import Link from "next/link";
import PrimaryButton from "./PrimaryButton";
import { useLayoutEffect, useRef } from "react";
import gsap, { Power3 } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Peep2 from "@/public/peep-2.svg";
import getCurrentTheme from "@/functions/theme";

export default function AboutSection() {
  gsap.registerPlugin(ScrollTrigger);
  const tl = useRef();

  // GSAP Animations
  useLayoutEffect(() => {
    // text animation options
    const animationOptions = {
      y: 5,
      opacity: 0,
      duration: 0.6,
      ease: Power3.easeOut,
    };

    tl.current = gsap
      .timeline({
        scrollTrigger: {
          trigger: "#about",
          markers: false,
          scroller: ".overflow-scroll",
          toggleActions: "restart none none reset",
        },
      })
      .from("#peep-2", {
        x: -80,
        opacity: 0,
        duration: 0.6,
        ease: Power3.easeInOut,
      })
      .from("#about-text", animationOptions, "-=0.2")
      .from("#about-resume-button", animationOptions, "-=0.4");
  }, []);

  return (
    <div
      id="about"
      className="flex h-fit flex-row items-center justify-center gap-20 max-md:flex-col max-md:gap-8 max-md:text-center max-sm:-translate-y-10"
    >
      {/* Image */}
      <Peep2
        id="peep-1"
        className="max-w-[300px] basis-1/2 max-md:w-[150px] max-sm:w-[120px]"
        fill={getCurrentTheme() == "dark" ? "currentcolor" : "white"}
      />

      {/* Text */}
      <div className="h-full basis-1/2">
        <p id="about-text" className="text-justify text-lg max-md:text-sm">
          I am a passionate and skilled Software Developer specializing in
          Mobile and Web development with a strong dedication to quality and
          attention to detail. I am constantly seeking new challenges and
          opportunities to improve my craft. I stay updated with the latest
          industry trends and best practices by attending conferences, taking
          online courses, and experimenting with new technologies. I build
          functional, beautiful and user-friendly designs. My commitment to
          innovation ensures that clients receive cutting-edge and effective
          solutions.
        </p>

        <Link
          id="about-resume-button"
          href={"/ali-alkindi-resume.pdf"}
          target="_blank"
        >
          <PrimaryButton>
            <div className="flex flex-row items-center gap-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-6 w-6"
              >
                <path d="M5.625 1.5c-1.036 0-1.875.84-1.875 1.875v17.25c0 1.035.84 1.875 1.875 1.875h12.75c1.035 0 1.875-.84 1.875-1.875V12.75A3.75 3.75 0 0016.5 9h-1.875a1.875 1.875 0 01-1.875-1.875V5.25A3.75 3.75 0 009 1.5H5.625z" />
                <path d="M12.971 1.816A5.23 5.23 0 0114.25 5.25v1.875c0 .207.168.375.375.375H16.5a5.23 5.23 0 013.434 1.279 9.768 9.768 0 00-6.963-6.963z" />
              </svg>
              View Resume
            </div>
          </PrimaryButton>
        </Link>
      </div>
    </div>
  );
}
