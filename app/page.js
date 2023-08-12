"use client";

import NavBar from "@/components/nav-bar";
import HomeSection from "@/components/home-section";
import AboutSection from "@/components/about-section";
import SkillsSection from "@/components/skills-section";
import Section from "@/components/section";

export default function Page() {
  return (
    <>
      <NavBar />

      <main className="h-screen w-screen snap-y snap-mandatory overflow-scroll">
        <Section>
          <HomeSection />
        </Section>

        <Section>
          <AboutSection />
        </Section>

        <Section>
          <SkillsSection />
        </Section>

        <Section>
          <div id="projects">Projects Section</div>
        </Section>

        <Section>
          <div id="contact">Contact Section</div>
        </Section>
      </main>
    </>
  );
}
