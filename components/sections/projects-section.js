import ProjectsSwiper from "../projects-section/projects-swiper";

export default function ProjectsSection() {
  return (
    <div
      id="projects"
      className="flex w-screen flex-col items-center gap-10 md:max-w-screen-md lg:max-w-screen-lg"
    >
      <h1 className="font-enriqueta text-4xl font-bold max-md:text-3xl">
        My Projects
      </h1>

      <ProjectsSwiper />
    </div>
  );
}
