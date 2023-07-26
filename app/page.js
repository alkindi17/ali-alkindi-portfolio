"use client";

import NavBar from "@/components/nav-bar"
import HomeSection from "@/components/home-section";
import Container from "@/components/container";

export default function Home() {

  return (
    <>
      <NavBar />

      <main className="snap-y w-screen h-screen snap-mandatory overflow-scroll">

        <Container>
          <HomeSection />
        </Container>

        <Container>
          <div id="about">
            About Section
          </div>
        </Container>

        <Container>
          <div id="skills">
            Skills Section
          </div>
        </Container>

        <Container >
          <div id="projects">
            Projects Section
          </div>
        </Container>

        <Container >
          <div id="contact">
            Contact Section
          </div>
        </Container>
        
      </main>
    </>
  )
}
