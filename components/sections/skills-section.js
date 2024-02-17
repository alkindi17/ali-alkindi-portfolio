import { useState } from "react";
import useSWR from "swr";

import Tabs from "../global/tabs";
import skillsIconsLoader from "@/functions/skils-section-fetcher";

import skillsDataJson from "public/data/skills/skills.json";

export default function SkillsSection() {
  const [activeSkill, setActiveSkill] = useState("Software");

  var skills = "Loading...";

  // Load skills icons
  const {
    data: skillsData,
    error: skillsError,
    isLoading: skillsIsLoading,
  } = useSWR(skillsDataJson, skillsIconsLoader);

  // Render skills
  if (skillsData && !skillsError && !skillsIsLoading) {
    skills = (
      <div className="mt-6 grid grid-cols-2 gap-4 max-sm:gap-3 md:grid-cols-3 lg:grid-cols-4">
        {skillsData[activeSkill].map((skill) => {
          return (
            <div
              key={skill.name}
              className="card flex h-16 w-52 items-center gap-4 px-4 py-4 leading-4 max-md:h-14 max-md:gap-1 max-md:text-sm max-sm:h-12 max-sm:w-32 max-sm:pl-1 max-sm:pr-0 max-sm:text-xs"
            >
              <skill.icon
                fill="currentcolor"
                className="h-6 w-6 max-sm:h-4 max-sm:w-4"
              />
              {skill.name}
            </div>
          );
        })}
      </div>
    );
  } else if (skillsError) {
    skills = "Error loading skills";
  }

  return (
    <div
      id="skills"
      className="flex h-full flex-col items-center pt-32 max-sm:pt-14"
    >
      <h1 className="font-enriqueta text-4xl font-bold max-md:text-3xl">
        My Skills
      </h1>

      <Tabs
        tabs={["Software", "Personal", "Other"]}
        activeTab={activeSkill}
        setActiveTab={setActiveSkill}
      ></Tabs>

      {skills}
    </div>
  );
}
