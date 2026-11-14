import { sendContactMessage } from "@/app/actions/send-contact-message";
import { FILL_TIME_FIELD, HONEYPOT_FIELD } from "@/functions/contact-form";

import GitHubIcon from "public/data/icons/github.svg";
import LinkedinIcon from "public/data/icons/linkedin.svg";
import InstagramIcon from "public/data/icons/instagram.svg";
import Link from "next/link";
import { useState, useRef, useLayoutEffect } from "react";
import ScrollTrigger from "gsap/ScrollTrigger";

import Typewriter from "typewriter-effect/dist/core";

export default function ContactSection() {
  const [headline, setHeadline] = useState("");
  const typewriterRef = useRef(null);
  const formLoadedAt = useRef(Date.now());

  const typeHeadline = (text = headline) => {
    typewriterRef.current.deleteAll().typeString(text).start();
  };

  useLayoutEffect(() => {
    // only create typewriter once and only after headline is mounted
    if (!typewriterRef.current) {
      typewriterRef.current = new Typewriter("#headline", {});
    }

    typeHeadline();
  }, [headline]);

  useLayoutEffect(() => {
    // ScrollTrigger for headline to start typing when it enters the viewport only the first time
    const scrollTrigger = ScrollTrigger.create({
      trigger: "#contact",
      markers: false,
      scroller: ".overflow-scroll",
      onEnter: () => {
        typeHeadline("Let's talk!");
        scrollTrigger.kill(); // kill the trigger after the first time
      },
    });

    return () => scrollTrigger.kill();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    setHeadline("Sending...");

    // Read the values before the form is reset
    const formData = new FormData(e.target);
    formData.set(FILL_TIME_FIELD, String(Date.now() - formLoadedAt.current));

    e.target.reset();

    try {
      const { ok } = await sendContactMessage(formData);
      setHeadline(ok ? "Received! Thank you." : "Oops! Please try again.");
    } catch {
      setHeadline("Oops! Please try again.");
    }
  };

  return (
    <div id="contact" className="flex w-full flex-col items-center">
      <h1
        id="headline"
        className="font-enriqueta text-6xl font-bold max-sm:text-3xl"
      >
        {/* {headline} */}
      </h1>
      <form
        className="mt-8 flex w-96 flex-col gap-4 max-sm:mt-5 max-sm:max-w-xs max-sm:gap-2"
        onSubmit={handleSubmit}
      >
        {/* Honeypot: hidden from people, but bots fill it in */}
        <div
          aria-hidden="true"
          className="absolute -left-[9999px] h-px w-px overflow-hidden"
        >
          <label htmlFor={HONEYPOT_FIELD}>Website</label>
          <input
            type="text"
            id={HONEYPOT_FIELD}
            name={HONEYPOT_FIELD}
            tabIndex={-1}
            autoComplete="off"
          />
        </div>

        <div className="relative">
          <input
            type="text"
            id="name"
            name="name"
            className="card peer w-full rounded-lg pt-5 focus:border-blue-600 focus:outline-none focus:ring-0 dark:focus:border-white"
            placeholder=" "
            required
          />
          <label
            htmlFor="name"
            className="absolute start-2.5 top-4 z-10 origin-[0] -translate-y-4 scale-75 transform text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:text-blue-600 rtl:peer-focus:left-auto rtl:peer-focus:translate-x-1/4 dark:text-gray-400 peer-focus:dark:text-white"
          >
            Name
          </label>
        </div>

        <div className="relative">
          <input
            type="email"
            id="email"
            name="email"
            className="card peer w-full rounded-lg pt-5 focus:border-blue-600 focus:outline-none focus:ring-0 dark:focus:border-white"
            placeholder=" "
            required
          />
          <label
            htmlFor="email"
            className="absolute start-2.5 top-4 z-10 origin-[0] -translate-y-4 scale-75 transform text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:text-blue-600 rtl:peer-focus:left-auto rtl:peer-focus:translate-x-1/4 dark:text-gray-400 peer-focus:dark:text-white"
          >
            Email
          </label>
        </div>

        <div className="relative">
          <textarea
            type="email"
            id="message"
            name="message"
            className="card peer w-full resize-none rounded-lg pt-5 focus:border-blue-600 focus:outline-none focus:ring-0 dark:focus:border-white"
            placeholder=" "
            required
            rows={5}
            maxLength={500}
          ></textarea>
          <label
            htmlFor="message"
            className="absolute start-2.5 top-4 z-10 origin-[0] -translate-y-4 scale-75 transform text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:text-blue-600 rtl:peer-focus:left-auto rtl:peer-focus:translate-x-1/4 dark:text-gray-400 peer-focus:dark:text-white"
          >
            Message
          </label>
        </div>

        <button className="secondary-button rounded-lg py-3">
          <div type="submit">Send</div>
        </button>
      </form>

      <div className="mt-2 text-sm">
        <span className="max-sm:hidden">Or email me at: &nbsp;</span>
        <a className="font-bold underline" href="mailto:contact@alialkindi.dev">
          contact@alialkindi.dev
        </a>
      </div>

      <div className="mt-6 flex items-center gap-2">
        <Link href={"https://github.com/alkindi17"} target="_blank">
          <GitHubIcon
            className="h-10 w-10 max-sm:h-8 max-sm:w-8"
            fill="currentcolor"
          />
        </Link>
        <Link href={"https://www.instagram.com/a__kindi/"} target="_blank">
          <InstagramIcon
            className="h-10 w-10 max-sm:h-8 max-sm:w-8"
            fill="currentcolor"
          />
        </Link>
        <Link href={"https://www.linkedin.com/in/alialkindi/"} target="_blank">
          <LinkedinIcon
            className="h-10 w-10 max-sm:h-8 max-sm:w-8"
            fill="currentcolor"
          />
        </Link>
      </div>
    </div>
  );
}
