import React from "react";
import Link from "next/link";
import Image from "next/image";

interface Project {
  id: number;
  name: string;
  description: string;
  longDescription: string;
  date: string;
  demoLink: string;
  category: string;
  technologies: string[];
  featured: boolean;
  status: string;
  image: string;
}

interface FeaturedProjectsProps {
  projects: Project[];
}

const FeaturedProjects: React.FC<FeaturedProjectsProps> = ({ projects }) => {
  const featuredProjects = projects
    .filter((project) => project.featured)
    .slice(0, 5);

  return (
    <section className="mt-24 sm:mt-32">
      <div className="mb-10 flex items-end justify-between gap-6 border-b border-blush pb-4">
        <h2 className="font-serif text-3xl text-foreground sm:text-4xl">
          Selected work
        </h2>
        <Link
          href="/projects"
          className="text-sm text-foreground underline decoration-blush decoration-2 underline-offset-4 hover:decoration-accent"
        >
          All projects
        </Link>
      </div>

      <div className="flex flex-col">
        {featuredProjects.map((project, index) => {
          const imageOnRight = index % 2 === 1;

          return (
            <a
              key={project.id}
              href={project.demoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="group grid grid-cols-1 gap-5 border-b border-blush py-8 last:border-b-0 md:grid-cols-12 md:items-center md:gap-10 md:py-10"
            >
              <div
                className={`relative aspect-[4/3] overflow-hidden bg-blush/30 md:col-span-7 md:aspect-[16/10] ${
                  imageOnRight ? "md:order-2" : ""
                }`}
              >
                <Image
                  src={project.image}
                  alt={project.name}
                  fill
                  className="object-contain"
                  sizes="(min-width: 768px) 55vw, 100vw"
                />
              </div>
              <div className={`md:col-span-5 ${imageOnRight ? "md:order-1" : ""}`}>
                <h3 className="font-serif text-2xl text-foreground sm:text-3xl">
                  {project.name}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {project.description}
                </p>
                <span className="mt-5 inline-block text-sm text-foreground underline decoration-blush decoration-2 underline-offset-4 group-hover:decoration-accent">
                  Visit
                </span>
              </div>
            </a>
          );
        })}
      </div>
    </section>
  );
};

export default FeaturedProjects;
