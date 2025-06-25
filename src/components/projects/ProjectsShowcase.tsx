"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
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

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

const ProjectCard: React.FC<{ project: Project; category: Category }> = ({
  project,
  category,
}) => {
  return (
    <motion.div
      variants={item}
      className="group relative bg-background/50 backdrop-blur-sm rounded-xl overflow-hidden border border-accent/20 hover:border-accent/40 transition-all duration-300 hover:shadow-lg hover:shadow-accent/10"
    >
      {/* Project Image Placeholder */}
      <div className="aspect-video bg-gradient-to-br from-accent/20 to-muted/20 relative overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-4xl">{category.icon}</div>
        </div>
        {project.featured && (
          <div className="absolute top-4 left-4 bg-accent text-background px-3 py-1 rounded-full text-xs font-semibold">
            Featured
          </div>
        )}
        <div className="absolute top-4 right-4 bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-xs font-semibold">
          {project.status}
        </div>
      </div>

      {/* Project Content */}
      <div className="p-6">
        <div className="flex items-start justify-between mb-3">
          <h3 className="text-xl font-semibold text-foreground group-hover:text-accent transition-colors">
            {project.name}
          </h3>
          <span
            className={`${category.color} px-2 py-1 rounded-md text-xs font-medium`}
          >
            {category.name}
          </span>
        </div>

        <p className="text-muted text-sm mb-4 leading-relaxed">
          {project.description}
        </p>

        {/* Technologies */}
        <div className="mb-4">
          <div className="flex flex-wrap gap-2">
            {project.technologies.slice(0, 4).map((tech, index) => (
              <span
                key={index}
                className="px-2 py-1 bg-muted/20 text-foreground rounded text-xs"
              >
                {tech}
              </span>
            ))}
            {project.technologies.length > 4 && (
              <span className="px-2 py-1 bg-muted/20 text-muted rounded text-xs">
                +{project.technologies.length - 4} more
              </span>
            )}
          </div>
        </div>

        {/* Features */}
        <div className="mb-6">
          <h4 className="text-sm font-medium text-foreground mb-2">
            Key Features:
          </h4>
          <ul className="space-y-1">
            {project.features.slice(0, 3).map((feature, index) => (
              <li
                key={index}
                className="text-xs text-muted flex items-center gap-2"
              >
                <span className="w-1 h-1 bg-accent rounded-full"></span>
                {feature}
              </li>
            ))}
          </ul>
        </div>

        {/* Actions */}
        <div className="flex gap-3">
          <a
            href={project.demoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 inline-flex items-center justify-center px-4 py-2 bg-accent text-background font-medium rounded-lg hover:bg-accent/90 transition-colors text-sm"
          >
            View Live
            <svg
              className="w-4 h-4 ml-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
              />
            </svg>
          </a>
          {project.githubLink && (
            <a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 border border-accent text-accent font-medium rounded-lg hover:bg-accent/10 transition-colors text-sm"
            >
              Code
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

const ProjectsShowcase: React.FC<ProjectsShowcaseProps> = ({
  projects,
  categories,
}) => {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        observer.unobserve(ref.current);
      }
    };
  }, []);

  const filteredProjects =
    activeCategory === "all"
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  const featuredProjects = projects.filter((project) => project.featured);

  const getCategoryById = (categoryId: string) => {
    return categories.find((cat) => cat.id === categoryId) || categories[0];
  };

  return (
    <div ref={ref} className="space-y-16">
      {/* Featured Projects */}
      {featuredProjects.length > 0 && (
        <div>
          <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-8 text-center">
            Featured Projects
          </h2>
          <motion.div
            variants={container}
            initial="hidden"
            animate={isVisible ? "show" : "hidden"}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {featuredProjects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                category={getCategoryById(project.category)}
              />
            ))}
          </motion.div>
        </div>
      )}

      {/* Category Filter */}
      <div className="text-center">
        <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-8">
          All Projects
        </h2>
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          <button
            onClick={() => setActiveCategory("all")}
            className={`px-4 py-2 rounded-lg font-medium transition-colors ${
              activeCategory === "all"
                ? "bg-accent text-background"
                : "bg-muted/20 text-foreground hover:bg-accent/20"
            }`}
          >
            All Projects ({projects.length})
          </button>
          {categories.map((category) => {
            const count = projects.filter(
              (p) => p.category === category.id
            ).length;
            if (count === 0) return null;

            return (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-4 py-2 rounded-lg font-medium transition-colors flex items-center gap-2 ${
                  activeCategory === category.id
                    ? "bg-accent text-background"
                    : "bg-muted/20 text-foreground hover:bg-accent/20"
                }`}
              >
                <span>{category.icon}</span>
                {category.name} ({count})
              </button>
            );
          })}
        </div>
      </div>

      {/* Filtered Projects Grid */}
      <motion.div
        variants={container}
        initial="hidden"
        animate={isVisible ? "show" : "hidden"}
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {filteredProjects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            category={getCategoryById(project.category)}
          />
        ))}
      </motion.div>

      {/* Empty State */}
      {filteredProjects.length === 0 && (
        <div className="text-center py-12">
          <div className="text-4xl mb-4">🔍</div>
          <h3 className="text-xl font-semibold text-foreground mb-2">
            No Projects Found
          </h3>
          <p className="text-muted">
            Try selecting a different category or check back later for new
            projects.
          </p>
        </div>
      )}
    </div>
  );
};

export default ProjectsShowcase;
