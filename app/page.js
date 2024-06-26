"use client";

import NavBar from "@/components/global/nav-bar";
import HomeSection from "@/components/sections/home-section";
import AboutSection from "@/components/sections/about-section";
import ExperienceSection from "@/components/sections/experience-section";
import SkillsSection from "@/components/sections/skills-section";
import Section from "@/components/sections/section";
import ProjectsSection from "@/components/sections/projects-section";
import ContactSection from "@/components/sections/contact-section";

export default function Page() {
  return (
    <>
      <NavBar />

      <main className="h-[100dvh] w-screen snap-y snap-mandatory overflow-scroll">
        <Section>
          <HomeSection />
        </Section>

        <Section>
          <AboutSection />
        </Section>

        <Section>
          <ExperienceSection />
        </Section>

        <Section>
          <SkillsSection />
        </Section>

        <Section>
          <ProjectsSection />
        </Section>

        <Section>
          <ContactSection />
        </Section>
      </main>
    </>
  );
}
