// This function is used to fetch data from JSON file
export async function fetcher(url) {
  const response = await fetch(url, { cache: "force-cache" });

  return await response.json();
}

// This function is used to fetch the icons for the skills
export async function skillsIconsLoader(skillsData) {
  const updatedSkillsData = {};

  for (let skillType in skillsData) {
    updatedSkillsData[skillType] = await Promise.all(
      skillsData[skillType].map(async (skill) => {
        const iconObject = await import(
          `public/data/skills-logos/${skill.icon}`
        );
        return { ...skill, icon: iconObject.default };
      }),
    );
  }

  return updatedSkillsData;
}

export default async function fetchSkills(url) {
  const rawSkillsData = await fetcher(url);

  const skillsData = await skillsIconsLoader(rawSkillsData);

  return skillsData;
}
