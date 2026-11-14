import Link from "next/link";
import PrimaryButton from "../global/PrimaryButton";
import { useLayoutEffect, useRef } from "react";
import gsap, { Power3 } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Peep2 from "@/public/peep-2.svg";
import getCurrentTheme from "@/functions/theme";
import { Bot } from "lucide-react";
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
      className="flex h-fit flex-row items-center justify-center gap-20 max-md:flex-col max-md:gap-8 max-md:text-center"
    >
      {/* Image */}
      <Peep2
        id="peep-2"
        className="max-w-[300px] basis-1/2 max-md:w-[150px] max-sm:w-[120px]"
        fill={getCurrentTheme() == "dark" ? "currentcolor" : "white"}
      />

      {/* Text */}
      <div className="flex h-full basis-1/2 flex-col">
        <div
          id="about-text"
          className="flex flex-col gap-4 text-left text-lg max-md:gap-3 max-md:text-sm"
        >
          <p>
            I am a{" "}
            <span className="font-bold">full-stack software engineer</span>{" "}
            building national healthcare systems at Trifork, and feeding my
            startup obsession at Jawla on the side.{" "}
            <span className="font-bold">
              Cracking complex problems with the simplest solutions is what gets
              me going.
            </span>{" "}
            I graduated from Cardiff University with First-Class Honours.
          </p>
          <p>
            At the end of the day, I just want to{" "}
            <span className="font-bold">
              build things people are glad exist!
            </span>
          </p>
        </div>

        <div className="flex flex-col items-center gap-1 sm:flex-row sm:gap-2">
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

          <Link
            id="about-resume-button"
            href={"https://chat.alialkindi.dev"}
            target="_blank"
          >
            <PrimaryButton className="max-sm:mt-0">
              <div className="flex flex-row items-center gap-3">
                <Bot className="h-6 w-6" />
                Chat With Me
              </div>
            </PrimaryButton>
          </Link>
        </div>
      </div>
    </div>
  );
}
