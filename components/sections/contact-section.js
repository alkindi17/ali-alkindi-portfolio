import { sendForm } from "@emailjs/browser";

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
  const form = useRef();

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
  }, []);

  // EmailJS
  const sendEmails = (e) => {
    e.preventDefault();

    setHeadline("Sending...");

    // Clone form to avoid losing input values if reset is called before the email is sent
    const formData = form.current.cloneNode(true);

    // Send confirmation email to the user
    sendForm(
      process.env.EMAILJS_SERVICE_ID,
      process.env.EMAILJS_TEMPLATE_ID_MESSAGE_RECEIVED,
      formData,
      {
        publicKey: process.env.EMAILJS_PUBLIC_KEY,
      },
    ).then(
      () => {
        setHeadline("Received! Thank you.");
      },
      (error) => {
        setHeadline("Oops! Please try again.");
      },
    );

    // Send message to me
    const sendEmailToMe = (formData) => {
      sendForm(
        process.env.EMAILJS_SERVICE_ID,
        process.env.EMAILJS_TEMPLATE_ID_NEW_MESSAGE,
        formData,
        {
          publicKey: process.env.EMAILJS_PUBLIC_KEY,
        },
      ).then(
        () => {
          setHeadline("Received! Thank you.");
        },
        (error) => {
          setHeadline("Oops! Please try again.");
        },
      );
    };

    // Reset form
    e.target.reset();
  };

  return (
    <div
      id="contact"
      className="flex w-full flex-col items-center max-sm:mb-20"
    >
      <h1
        id="headline"
        className="font-enriqueta text-6xl font-bold max-sm:text-3xl"
      >
        {/* {headline} */}
      </h1>
      <form
        ref={form}
        className="mt-8 flex w-96 flex-col gap-4 max-sm:mt-5 max-sm:max-w-xs max-sm:gap-2"
        onSubmit={sendEmails}
      >
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
