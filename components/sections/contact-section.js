import { sendForm } from "@emailjs/browser";

import GitHubIcon from "public/data/skills/skills-logos/github.svg";
import LinkedinIcon from "public/data/skills/skills-logos/linkedin.svg";
import InstagramIcon from "public/data/skills/skills-logos/instagram.svg";
import Link from "next/link";
import { useState } from "react";

export default function ContactSection() {
  const [headline, setHeadline] = useState("Let's talk.");

  const sendEmails = (e) => {
    e.preventDefault();

    setHeadline("Sending...");

    sendForm(
      process.env.EMAILJS_SERVICE_ID,
      process.env.EMAILJS_TEMPLATE_ID_MESSAGE_RECEIVED,
      e.target,
      {
        publicKey: process.env.EMAILJS_PUBLIC_KEY,
      },
    ).then(
      () => {
        sendEmailToMe(e);
      },
      (error) => {
        setHeadline("Oops! Please try again.");
      },
    );

    const sendEmailToMe = (x) => {
      sendForm(
        process.env.EMAILJS_SERVICE_ID,
        process.env.EMAILJS_TEMPLATE_ID_NEW_MESSAGE,
        x.target,
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

    e.target.reset();
  };

  return (
    <div
      id="contact"
      className="flex w-full flex-col items-center max-sm:mb-20"
    >
      <h1 className="font-enriqueta text-6xl font-bold max-sm:text-3xl">
        {headline}
      </h1>
      <form
        className="mt-8 flex w-96 flex-col gap-4 max-sm:mt-5 max-sm:max-w-xs max-sm:gap-2"
        onSubmit={sendEmails}
      >
        <div class="relative">
          <input
            type="text"
            id="name"
            name="name"
            class="card peer w-full rounded-lg pt-5 focus:border-blue-600 focus:outline-none focus:ring-0 dark:focus:border-white"
            placeholder=" "
            required
          />
          <label
            for="name"
            class="absolute start-2.5 top-4 z-10 origin-[0] -translate-y-4 scale-75 transform text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:text-blue-600 rtl:peer-focus:left-auto rtl:peer-focus:translate-x-1/4 dark:text-gray-400 peer-focus:dark:text-white"
          >
            Name
          </label>
        </div>

        <div class="relative">
          <input
            type="email"
            id="email"
            name="email"
            class="card peer w-full rounded-lg pt-5 focus:border-blue-600 focus:outline-none focus:ring-0 dark:focus:border-white"
            placeholder=" "
            required
          />
          <label
            for="email"
            class="absolute start-2.5 top-4 z-10 origin-[0] -translate-y-4 scale-75 transform text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:text-blue-600 rtl:peer-focus:left-auto rtl:peer-focus:translate-x-1/4 dark:text-gray-400 peer-focus:dark:text-white"
          >
            Email
          </label>
        </div>

        <div class="relative">
          <textarea
            type="email"
            id="message"
            name="message"
            class="card peer w-full resize-none rounded-lg pt-5 focus:border-blue-600 focus:outline-none focus:ring-0 dark:focus:border-white"
            placeholder=" "
            required
            rows={5}
            maxLength={500}
          ></textarea>
          <label
            for="message"
            class="absolute start-2.5 top-4 z-10 origin-[0] -translate-y-4 scale-75 transform text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:text-blue-600 rtl:peer-focus:left-auto rtl:peer-focus:translate-x-1/4 dark:text-gray-400 peer-focus:dark:text-white"
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
        <a
          className="font-bold underline"
          href="mailto:alkindialimasoud@gmail.com"
        >
          alkindialimasoud@gmail.com
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
