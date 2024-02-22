import { register } from "swiper/element/bundle";
import { useEffect, useRef } from "react";
import Link from "next/link";
import GitHubIcon from "public/data/icons/github.svg";
import WebIcon from "public/data/icons/web.svg";

import projectsDataJson from "public/data/projects/projects.json";

register();

export default function ProjectsSwiper() {
  const swiperEl = useRef(null);

  useEffect(() => {
    const swiperEl = document.querySelector("swiper-container");

    // Swiper parameters
    const swiperParams = {
      className: "swiper-container w-[80%]",
      slidesPerView: 1,
      spaceBetween: 10,
      pagination: true,
      pagination: {
        el: "#custom-pagination",
        type: "custom",
        renderCustom: customPagination,
      },
      mousewheel: {
        Control: true,
      },
      breakpoints: {
        640: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 40,
        },
      },
      navigation: true,
      navigation: {
        prevEl: "#custom-prev-button",
        nextEl: "#custom-next-button",
      },
      loop: true,
    };

    // Initialize swiper
    Object.assign(swiperEl, swiperParams);
    swiperEl.initialize();

    // Fix loop issue, when there are less slides than slidesPerView * 2,
    // by disabling loop when there are less slides than slidesPerView * 2.
    addEventListener("resize", () => {
      const swiper = swiperEl.swiper;
      if (swiper.params.slidesPerView * 2 > swiper.slides.length) {
        swiper.params.loop = false;
      } else {
        swiper.params.loop = true;
      }
    });
  }, []);

  return (
    <>
      <swiper-container init="false" ref={swiperEl}>
        <div slot="container-end" className="flex justify-center gap-5">
          <SwiperControls />
        </div>

        <Slides />
      </swiper-container>
    </>
  );
}

// customPagination function that takes in swiper and current slide index as parameters and returns the custom pagination HTML.
function customPagination(swiper, current) {
  const slidesPerView = swiper.params.slidesPerView;
  const totalNumOfSlides = swiper.slides.length;
  let paginationHtml = "";

  for (let i = 1; i <= totalNumOfSlides; i++) {
    paginationHtml += `
                <span class="custom-pagination-bullet ${
                  (i - current < slidesPerView && i - current >= 0) || // when current slide is in the start or middle of the slides array
                  slidesPerView - totalNumOfSlides > i - current // when current slide is at the end of the slides array and the slides loops
                    ? "custom-pagination-bullet-active"
                    : ""
                }"}>
                </span> 
              `;
  }

  return `<div class="custom-pagination">${paginationHtml}</div>`;
}

// SwiperControls component that renders the pagination, and custom prev and next buttons.
function SwiperControls({}) {
  return (
    <>
      <button
        id="custom-prev-button"
        className="primary-button m-0 flex h-8 w-8 items-center justify-center rounded-md p-0"
      >
        <svg
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="h-7 w-7"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 19.5L8.25 12l7.5-7.5"
          />
        </svg>
      </button>

      <div id="custom-pagination"></div>

      <button
        id="custom-next-button"
        className="primary-button m-0 flex h-8 w-8 items-center justify-center rounded-md p-0"
      >
        <svg
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="h-7 w-7"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8.25 4.5l7.5 7.5-7.5 7.5"
          />
        </svg>
      </button>
    </>
  );
}

function Slides({}) {
  const slides = projectsDataJson.map((project) => {
    return (
      <swiper-slide
        class="card mb-6 box-border h-[270px] rounded-2xl px-4 py-5 max-sm:w-[230px]"
        key={project.slug}
      >
        <h1 className="text-2xl font-bold">{project.shortTitle}</h1>
        <div className="flex gap-2 text-xs font-bold opacity-70">
          <p>{project.type}</p>
          <p className="font-bold">•</p>
          <p>{project.yearCreated}</p>
        </div>
        <p className="mt-5 line-clamp-5 text-sm font-thin leading-5 opacity-70">
          {project.summary}
        </p>
        <div className="absolute bottom-5 left-0 mt-0 flex w-full items-center justify-between px-4">
          <Link
            href={`/projects/${project.slug}`}
            target="_blank"
            className="secondary-button rounded-lg px-3 py-1 text-xs"
          >
            Read More
          </Link>

          <div className="flex items-center gap-1">
            {/* Render the GitHub and Website icons if the project has a GitHub URL or a website address */}
            {project.githubUrl ? (
              <Link href={project.githubUrl} target="_blank">
                <GitHubIcon className="h-6 w-6" fill="currentcolor" />
              </Link>
            ) : (
              ""
            )}

            {project.websiteAddress ? (
              <Link href={project.websiteAddress} target="_blank">
                <WebIcon className="h-5 w-5" fill="currentcolor" />
              </Link>
            ) : (
              ""
            )}
          </div>
        </div>
      </swiper-slide>
    );
  });

  return slides;
}
