"use client";

import React from "react";
import Link from "next/link";

interface Category {
  id: string;
  name: string;
  description: string;
  icon: string;
  color: string;
}

interface ProjectCategoriesOverviewProps {
  categories: Category[];
  projects: any[];
}

const ProjectCategoriesOverview: React.FC<ProjectCategoriesOverviewProps> = ({
  categories,
  projects,
}) => {
  const getProjectCount = (categoryId: string) => {
    return projects.filter((project) => project.category === categoryId).length;
  };

  return (
    <section className="w-full py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
            My <span className="text-accent">Projects</span>
          </h1>
          <p className="text-lg md:text-xl text-muted max-w-3xl mx-auto leading-relaxed">
            Explore my diverse portfolio spanning fintech, AI, Web3, and social
            impact. Each category demonstrates expertise in modern technologies
            and problem-solving approaches.
          </p>
        </div>

        {/* Project Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {categories.map((category) => {
            const projectCount = getProjectCount(category.id);
            if (projectCount === 0) return null;

            return (
              <div key={category.id} className="w-full">
                <Link href="/projects" className="block group w-full">
                  <div
                    className={`${category.color} rounded-xl p-6 hover:scale-105 transition-all duration-300 cursor-pointer border border-accent/20 hover:border-accent/40 hover:shadow-lg hover:shadow-accent/10 w-full min-h-[200px] flex flex-col`}
                  >
                    <div className="text-4xl mb-4">{category.icon}</div>
                    <h3 className="font-bold text-xl mb-2 group-hover:text-accent transition-colors">
                      {category.name}
                    </h3>
                    <p className="text-sm opacity-80 mb-4 leading-relaxed flex-grow">
                      {category.description}
                    </p>
                    <div className="flex items-center justify-between mt-auto">
                      <span className="text-xs font-medium">
                        {projectCount} Project{projectCount !== 1 ? "s" : ""}
                      </span>
                      <svg
                        className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </div>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <Link
            href="/projects"
            className="inline-flex items-center px-8 py-4 bg-accent text-background font-semibold rounded-lg hover:bg-accent/90 transition-colors text-lg"
          >
            View All Projects
            <svg
              className="w-5 h-5 ml-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProjectCategoriesOverview;
