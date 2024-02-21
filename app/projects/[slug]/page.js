import { getDisplayName } from "next/dist/shared/lib/utils";
import Link from "next/link";

import projectsDataJson from "public/data/projects/projects.json";
import GitHubIcon from "public/data/icons/github.svg";
import WebIcon from "public/data/icons/web.svg";

export const dynamicParams = false;

export async function generateStaticParams() {
  return projectsDataJson.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = params;

  const project = projectsDataJson.find((project) => project.slug === slug);

  return {
    title: project.fullTitle + " | Ali Al Kindi Projects",
    description: project.summary,
    openGraph: {
      title: project.fullTitle + " | Ali Al Kindi Projects",
      description: project.summary,
      url: `https://alialkindi.dev/projects/${slug}`,
      article: {
        publishedTime: project.dateCreated,
        modifiedTime: project.dateModified,
        authors: ["Ali Al Kindi"],
        tags: project.technologiesUsed,
      },
      images: [
        {
          url: "https://alialkindi.dev/data/metadata/og-image.jpg",
          width: 1200,
          height: 627,
          alt: "Ali Al Kindi Portfolio",
          type: "image/jpeg",
          itemprop: "image",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: project.fullTitle + " | Ali Al Kindi Projects",
      description: project.summary,
      creator: "@alkindi17",
      image: "https://alialkindi.dev/data/metadata/og-image.jpg",
    },
  };
}

export default async function Page({ params }) {
  const { slug } = params;

  const project = projectsDataJson.find((project) => project.slug === slug);

  const Markdown = await import(`public/data/projects/mdx/${slug}.mdx`)
    .then((res) => res.default)
    .catch(() => () => {});

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

      <div className="mb-10 flex flex-wrap gap-3 max-sm:gap-2 max-sm:text-sm">
        {project.technologiesUsed.map((technology) => (
          <p
            className="card rounded-xl px-4 py-2 max-sm:rounded-md max-sm:px-2 max-sm:py-1 max-sm:text-xs"
            key={technology}
          >
            {technology}
          </p>
        ))}
      </div>

      <div className="prose dark:prose-invert max-sm:prose-sm prose-p:text-justify max-sm:prose-p:text-left">
        <Markdown />
      </div>
    </article>
  );
}
