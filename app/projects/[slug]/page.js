import Link from "next/link";

import projectsDataJson from "public/data/projects/projects.json";
import GitHubIcon from "public/data/skills/skills-logos/github.svg";
import WebIcon from "public/data/skills/skills-logos/web.svg";

export const dynamicParams = false;

export async function generateStaticParams() {
  return projectsDataJson.map((project) => ({
    slug: project.slug,
  }));
}

export default async function Page({ params }) {
  const { slug } = params;

  const project = projectsDataJson.find((project) => project.slug === slug);

  const Markdown = await import(`public/data/projects/mdx/${slug}.mdx`)
    .then((res) => res.default)
    .catch(() => () => {
      return <p className="font-bold">Content Not Found!</p>;
    });

  return (
    <article>
      <div className="flex justify-between">
        <h1 className="mb-2 font-enriqueta text-5xl font-bold max-sm:text-4xl">
          {project.fullTitle}
        </h1>

        <div className="mb-5 flex items-center gap-1 max-lg:hidden">
          {/* Render the GitHub and Website icons if the project has a GitHub URL or a website address */}
          {project.githubUrl ? (
            <Link href={project.githubUrl} target="_blank">
              <GitHubIcon className="h-9 w-9" fill="currentcolor" />
            </Link>
          ) : (
            ""
          )}

          {project.websiteAddress ? (
            <Link href={project.websiteAddress} target="_blank">
              <WebIcon className="h-7 w-7" fill="currentcolor" />
            </Link>
          ) : (
            ""
          )}
        </div>
      </div>

      <div className="flex items-end justify-between">
        <div className="mb-6 flex gap-2 font-bold opacity-75">
          <p>{project.type}</p>
          <p className="font-bold">•</p>
          <p>{project.yearCreated}</p>
        </div>

        <div className="mb-5 flex items-center gap-1 lg:hidden">
          {/* Render the GitHub and Website icons if the project has a GitHub URL or a website address */}
          {project.githubUrl ? (
            <Link href={project.githubUrl} target="_blank">
              <GitHubIcon className="h-7 w-7" fill="currentcolor" />
            </Link>
          ) : (
            ""
          )}

          {project.websiteAddress ? (
            <Link href={project.websiteAddress} target="_blank">
              <WebIcon className="h-6 w-6" fill="currentcolor" />
            </Link>
          ) : (
            ""
          )}
        </div>
      </div>

      <div className="mb-10 flex flex-wrap gap-3 max-sm:text-sm">
        {project.technologiesUsed.map((technology) => (
          <p className="card rounded-xl px-4 py-2" key={technology}>
            {technology}
          </p>
        ))}
      </div>

      <div className="prose dark:prose-invert max-sm:prose-sm prose-p:text-justify">
        <Markdown />
      </div>
    </article>
  );
}
