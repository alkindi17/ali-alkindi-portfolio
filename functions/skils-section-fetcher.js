// This function is used to fetch the icons for the skills
export async function skillsIconsLoader(skillsData) {
  const updatedSkillsData = {};

  for (let skillType in skillsData) {
    updatedSkillsData[skillType] = await Promise.all(
      skillsData[skillType].map(async (skill) => {
        const iconObject = await import(`public/data/icons/${skill.icon}`);
        return { ...skill, icon: iconObject.default };
      }),
    );
  }

  return updatedSkillsData;
}

export default async function fetchSkills(rawSkillsData) {
  const skillsData = await skillsIconsLoader(rawSkillsData);

  return skillsData;
}
