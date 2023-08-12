import { useState } from "react";
import useSWR from "swr";

import Tabs from "./tabs";
import fetchSkills from "@/functions/skils-section-fetcher";

export default function SkillsSection() {
  const [activeSkill, setActiveSkill] = useState("Software");

  var skills;

  // fetch skills
  const {
    data: skillsData,
    error: skillsError,
    isLoading: skillsIsLoading,
  } = useSWR("/data/skills.json", fetchSkills);

  // Render skills
  if (skillsData !== undefined) {
    skills = (
      <div className="mt-6 grid grid-cols-2 gap-4 max-sm:gap-3 md:grid-cols-3 lg:grid-cols-4">
        {skillsData[activeSkill].map((skill) => {
          return (
            <div
              key={skill.name}
              className="card flex h-16 w-52 items-center gap-4 rounded-lg px-4 py-4 leading-4 max-md:h-14 max-md:gap-1 max-md:text-sm max-sm:h-12 max-sm:w-32 max-sm:pl-1 max-sm:pr-0 max-sm:text-xs"
            >
              <skill.icon fill="currentcolor" className="max-sm:scale-75" />
              {skill.name}
            </div>
          );
        })}
      </div>
    );
  }

  return (
    <div
      id="skills"
      className="mt-44 flex h-full flex-col items-center max-sm:mt-24"
    >
      <h1 className="font-enriqueta text-4xl max-md:text-3xl">My Skills</h1>

      <Tabs
        tabs={["Software", "Personal", "Other"]}
        activeTab={activeSkill}
        setActiveTab={setActiveSkill}
      ></Tabs>

      {skills}
    </div>
  );
}
