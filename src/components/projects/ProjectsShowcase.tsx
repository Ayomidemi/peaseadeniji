"use client";

import React, { useEffect, useRef, useState } from "react";
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
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const filteredProjects =
    activeCategory === "all"
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  const visibleCategories = categories.filter(
    (category) => projects.some((project) => project.category === category.id)
  );

  const categoryName = (id: string) =>
    categories.find((category) => category.id === id)?.name ?? id;

  const activeLabel =
    activeCategory === "all" ? "All" : categoryName(activeCategory);

  useEffect(() => {
    if (!menuOpen) return;

    const close = (event: PointerEvent) => {
      if (!menuRef.current?.contains(event.target as Node)) {
        setMenuOpen(false);
      }
    };

    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };

    document.addEventListener("pointerdown", close);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("pointerdown", close);
      document.removeEventListener("keydown", onKey);
    };
  }, [menuOpen]);

  const chooseCategory = (id: string) => {
    setActiveCategory(id);
    setMenuOpen(false);
  };

  return (
    <div>
      <div className="relative mb-10 flex justify-end md:hidden" ref={menuRef}>
        <button
          type="button"
          aria-expanded={menuOpen}
          aria-haspopup="listbox"
          onClick={() => setMenuOpen((open) => !open)}
          className="inline-flex items-center gap-3 border border-blush bg-background px-4 py-2.5 text-sm text-foreground"
        >
          {activeLabel}
          <svg
            className={`h-3 w-3 text-accent transition-transform ${
              menuOpen ? "rotate-180" : ""
            }`}
            viewBox="0 0 12 12"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M2 4.5 6 8.5 10 4.5"
              stroke="currentColor"
              strokeWidth="1.4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
        {menuOpen ? (
          <ul
            role="listbox"
            className="absolute right-0 top-full z-20 mt-2 min-w-[15rem] border border-blush bg-background py-1"
          >
            <li>
              <button
                type="button"
                role="option"
                aria-selected={activeCategory === "all"}
                onClick={() => chooseCategory("all")}
                className={`block w-full px-4 py-2.5 text-left text-sm ${
                  activeCategory === "all"
                    ? "bg-blush/40 text-foreground"
                    : "text-muted hover:bg-blush/20 hover:text-foreground"
                }`}
              >
                All
              </button>
            </li>
            {visibleCategories.map((category) => (
              <li key={category.id}>
                <button
                  type="button"
                  role="option"
                  aria-selected={activeCategory === category.id}
                  onClick={() => chooseCategory(category.id)}
                  className={`block w-full px-4 py-2.5 text-left text-sm ${
                    activeCategory === category.id
                      ? "bg-blush/40 text-foreground"
                      : "text-muted hover:bg-blush/20 hover:text-foreground"
                  }`}
                >
                  {category.name}
                </button>
              </li>
            ))}
          </ul>
        ) : null}
      </div>

      <div className="mb-12 hidden flex-wrap gap-x-6 gap-y-3 border-b border-blush pb-4 md:flex">
        <button
          onClick={() => chooseCategory("all")}
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
            onClick={() => chooseCategory(category.id)}
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
