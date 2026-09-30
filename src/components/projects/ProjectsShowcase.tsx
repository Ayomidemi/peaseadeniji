"use client";

import React, { useState } from "react";
import Image from "next/image";

interface Project {
  id: number;
  name: string;
  description: string;
  longDescription: string;
  date: string;
  demoLink: string;
  githubLink: string;
  category: string;
  technologies: string[];
  features: string[];
  featured: boolean;
  status: string;
  image: string;
}

interface Category {
  id: string;
  name: string;
  description: string;
  icon: string;
  color: string;
}

interface ProjectsShowcaseProps {
  projects: Project[];
  categories: Category[];
}

const ProjectsShowcase: React.FC<ProjectsShowcaseProps> = ({
  projects,
  categories,
}) => {
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const filteredProjects =
    activeCategory === "all"
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  const visibleCategories = categories.filter(
    (category) => projects.some((project) => project.category === category.id)
  );

  const categoryName = (id: string) =>
    categories.find((category) => category.id === id)?.name ?? id;

  return (
    <div>
      <div className="mb-12 hidden flex-wrap gap-x-6 gap-y-3 border-b border-blush pb-4 md:flex">
        <button
          onClick={() => setActiveCategory("all")}
          className={`text-sm ${
            activeCategory === "all"
              ? "text-foreground underline decoration-blush decoration-2 underline-offset-8"
              : "text-muted hover:text-foreground"
          }`}
        >
          All
        </button>
        {visibleCategories.map((category) => (
          <button
            key={category.id}
            onClick={() => setActiveCategory(category.id)}
            className={`text-sm ${
              activeCategory === category.id
                ? "text-foreground underline decoration-blush decoration-2 underline-offset-8"
                : "text-muted hover:text-foreground"
            }`}
          >
            {category.name}
          </button>
        ))}
      </div>

      <div className="flex flex-col gap-14 md:gap-20">
        {filteredProjects.map((project, index) => {
          const imageOnRight = index % 2 === 1;
          const isLast = index === filteredProjects.length - 1;
          const isAppStoreLink = project.demoLink.includes("apps.apple.com");
          const isPlayStoreLink = project.githubLink.includes("play.google.com");
          const year = project.date.slice(0, 4);

          return (
            <article
              key={project.id}
              className={`grid grid-cols-1 gap-5 pb-14 md:grid-cols-12 md:items-end md:gap-10 md:pb-20 ${
                isLast ? "" : "border-b border-blush"
              }`}
            >
              <a
                href={project.demoLink}
                target="_blank"
                rel="noopener noreferrer"
                className={`relative aspect-[4/3] overflow-hidden bg-blush/30 md:col-span-8 md:aspect-[16/10] ${
                  imageOnRight ? "md:order-2" : ""
                }`}
              >
                <Image
                  src={project.image}
                  alt={project.name}
                  fill
                  className="object-contain"
                  sizes="(min-width: 768px) 60vw, 100vw"
                />
              </a>
              <div
                className={`md:col-span-4 md:pb-2 ${
                  imageOnRight ? "md:order-1" : ""
                }`}
              >
                <p className="text-xs uppercase tracking-[0.18em] text-muted">
                  {categoryName(project.category)}
                  <span className="mx-2 text-blush">·</span>
                  {year}
                </p>
                <h2 className="mt-3 font-serif text-3xl text-foreground sm:text-4xl">
                  <a
                    href={project.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-accent"
                  >
                    {project.name}
                  </a>
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {project.description}
                </p>
                <div className="mt-5 flex gap-5 text-sm">
                  <a
                    href={project.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-foreground underline decoration-blush decoration-2 underline-offset-4 hover:decoration-accent"
                  >
                    {isAppStoreLink ? "App Store" : "Visit"}
                  </a>
                  {project.githubLink ? (
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted underline decoration-blush decoration-2 underline-offset-4 hover:text-foreground"
                    >
                      {isPlayStoreLink ? "Google Play" : "Code"}
                    </a>
                  ) : null}
                </div>
              </div>
            </article>
          );
        })}
      </div>

      {filteredProjects.length === 0 && (
        <p className="py-16 text-sm text-muted">Nothing in this category yet.</p>
      )}
    </div>
  );
};

export default ProjectsShowcase;
