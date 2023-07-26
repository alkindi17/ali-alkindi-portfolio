"use client";

import NavBar from "@/components/nav-bar"
import HomeSection from "@/components/home-section";
import AboutSection from "@/components/about-section";
import Section from "@/components/section";

export default function Home() {

  return (
    <>
      <NavBar />

      <main className="snap-y w-screen h-screen snap-mandatory overflow-scroll">

        <Section>
          <HomeSection />
        </Section>

        <Section>
          <AboutSection />
        </Section>

        <Section>
          <div id="skills">
            Skills Section
          </div>
        </Section>

        <Section >
          <div id="projects">
            Projects Section
          </div>
        </Section>

        <Section >
          <div id="contact">
            Contact Section
          </div>
        </Section>
        
      </main>
    </>
  )
}
