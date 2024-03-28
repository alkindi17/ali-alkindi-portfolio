import Tabs from "components/global/tabs";

import AcademicIcon from "public/data/icons/academic.svg";
import CertificateIcon from "public/data/icons/certificate.svg";
import BriefcaseIcon from "public/data/icons/briefcase.svg";
import LinkIcon from "public/data/icons/link.svg";
import experienceDataJson from "public/data/experience/experience.json";
import { useState } from "react";
import Link from "next/link";

export default function EducationSection() {
  const [activeTab, setActiveTab] = useState("Education");

  const toRender = () => {
    switch (activeTab) {
      case "Education": {
        return experienceDataJson.Education.map((education, index) => {
          return (
            <li key={index} className="mb-7 ms-7 last:mb-0 max-sm:mb-6">
              <span className="absolute -start-4 flex h-8 w-8 items-center justify-center rounded-full border border-gray-300 bg-white ring-8 ring-[var(--background)] dark:border-dark-accent dark:bg-dark-accent">
                <AcademicIcon fill="currentColor" className="h-4 w-4" />
              </span>
              <time
                className="mb-1 block
                pt-2 text-sm leading-none text-dark-accent-100 max-sm:text-xs"
              >
                {education.year}
              </time>
              <h3
                className="items -center
                flex text-lg font-semibold max-sm:text-sm"
              >
                {education.degree}
              </h3>
              <p className="text-dark-accent-100 max-sm:text-xs">
                {education.school}
              </p>
            </li>
          );
        });
      }
      case "Certificates": {
        return experienceDataJson.Certificates.map((certificate, index) => {
          return (
            <li key={index} className="mb-7 ms-7 last:mb-0 max-sm:mb-6">
              <span className="absolute -start-4 flex h-8 w-8 items-center justify-center rounded-full border border-gray-300 bg-white ring-8 ring-[var(--background)] dark:border-dark-accent dark:bg-dark-accent">
                <CertificateIcon fill="currentColor" className="h-4 w-4" />
              </span>
              <time
                className="mb-1 block
                pt-2 text-sm leading-none text-dark-accent-100 max-sm:text-xs"
              >
                {certificate.year}
              </time>
              <div className="flex justify-between">
                <h3 className="items -center flex text-lg font-semibold max-sm:text-sm ">
                  {certificate.title}
                </h3>
                {certificate.link ? (
                  <Link
                    href={certificate.link}
                    target="_blank"
                    className="text-gray-500 hover:text-gray-950 dark:text-dark-accent-100 dark:hover:text-dark-accent-200"
                  >
                    <LinkIcon
                      fill="currentColor"
                      className="h-6 w-6 max-sm:h-5 max-sm:w-5"
                    />
                  </Link>
                ) : (
                  ""
                )}
              </div>
              <p className="text-dark-accent-100 max-sm:text-xs">
                {certificate.institution}
              </p>
              <div className="mt-2 flex flex-wrap gap-1 max-sm:text-sm">
                {certificate.skills.map((skill) => (
                  <p className="card rounded-md px-2 py-1 text-xs" key={skill}>
                    {skill}
                  </p>
                ))}
              </div>
            </li>
          );
        });
      }
      case "Work":
        return experienceDataJson.Work.map((role, index) => {
          return (
            <li key={index} className="mb-7 ms-7 last:mb-0 max-sm:mb-6">
              <span className="absolute -start-4 flex h-8 w-8 items-center justify-center rounded-full border border-gray-300 bg-white ring-8 ring-[var(--background)] dark:border-dark-accent dark:bg-dark-accent">
                <BriefcaseIcon fill="currentColor" className="h-4 w-4" />
              </span>
              <time
                className="mb-1 block
                pt-2 text-sm leading-none text-dark-accent-100 max-sm:text-xs"
              >
                {role.year}
              </time>
              <h3
                className="items -center
                flex text-lg font-semibold max-sm:text-sm"
              >
                {role.position}
              </h3>
              <p className="text-dark-accent-100 max-sm:text-xs">
                {role.organisation}
              </p>
              <div className="mt-2 flex flex-wrap gap-1 max-sm:text-sm">
                {role.skills.map((skill) => (
                  <p className="card rounded-md px-2 py-1 text-xs" key={skill}>
                    {skill}
                  </p>
                ))}
              </div>
            </li>
          );
        });
    }
  };

  return (
    <div
      id="experience"
      className="flex h-full flex-col items-center pt-32 max-sm:pt-16"
    >
      <h1 className="font-enriqueta text-4xl font-bold max-md:text-3xl">
        My Experience
      </h1>
      <Tabs
        tabs={["Education", "Certificates", "Work"]}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      ></Tabs>

      <div className="mt-5 max-h-[65%] w-[38rem] overflow-auto rounded-lg border border-gray-300 px-12 py-6 dark:border-dark-accent-200 max-sm:w-80 max-sm:px-8">
        <ol className="relative border-s border-gray-200 dark:border-dark-accent-200">
          {toRender()}
        </ol>
      </div>
    </div>
  );
}
