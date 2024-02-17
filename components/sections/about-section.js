import Link from "next/link";
import PrimaryButton from "../global/PrimaryButton";
import { useLayoutEffect, useRef } from "react";
import gsap, { Power3 } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Peep2 from "@/public/peep-2.svg";
import getCurrentTheme from "@/functions/theme";

import DocumentIcon from "public/data/icons/document.svg";

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
      className="flex h-fit flex-row items-center justify-center gap-20 max-md:flex-col max-md:gap-8 max-md:text-center max-sm:mb-20"
    >
      {/* Image */}
      <Peep2
        id="peep-2"
        className="max-w-[300px] basis-1/2 max-md:w-[150px] max-sm:w-[120px]"
        fill={getCurrentTheme() == "dark" ? "currentcolor" : "white"}
      />

      {/* Text */}
      <div className="h-full basis-1/2">
        <p id="about-text" className="text-justify text-lg max-md:text-sm">
          I am a{" "}
          <span className="font-bold">passionate and hardworking student</span>,
          currently studying Software Engineering at Cardiff University. As a
          quick learner, I&apos;m perpetually on the lookout for opportunities
          to enhance my skill set.{" "}
          <span className="font-bold">
            I&apos;m all about soaking up new knowledge and unleashing my
            creativity.{" "}
          </span>{" "}
          Collaborating with others to crack tough problems is what gets me
          going.{" "}
          <span className="font-bold">
            Bring on the challenges—I&apos;m ready to dive in and make things
            happen!
          </span>
        </p>

        <Link
          id="about-resume-button"
          href={"/ali-alkindi-resume.pdf"}
          target="_blank"
        >
          <PrimaryButton>
            <div className="flex flex-row items-center gap-3">
              <DocumentIcon fill="currentColor" className="h-6 w-6" />
              View Resume
            </div>
          </PrimaryButton>
        </Link>
      </div>
    </div>
  );
}
