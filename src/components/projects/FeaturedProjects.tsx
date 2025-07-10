"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

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
}

interface FeaturedProjectsProps {
  projects: Project[];
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const FeaturedProjects: React.FC<FeaturedProjectsProps> = ({ projects }) => {
  // Get the top 2 featured projects
  const featuredProjects = projects
    .filter((project) => project.featured)
    .slice(0, 2);

  const getCategoryIcon = (category: string) => {
    const icons: { [key: string]: string } = {
      web3: "🔗",
      mobile: "📱",
      fintech: "💰",
      web: "🌐",
      webflow: "🎨",
      quant: "📊",
    };
    return icons[category] || "💻";
  };

  const getCategoryColor = (category: string) => {
    const colors: { [key: string]: string } = {
      web3: "bg-orange-500/10 text-orange-400 border-orange-500/20",
      mobile: "bg-pink-500/10 text-pink-400 border-pink-500/20",
      fintech: "bg-green-500/10 text-green-400 border-green-500/20",
      web: "bg-blue-500/10 text-blue-400 border-blue-500/20",
      webflow: "bg-indigo-500/10 text-indigo-400 border-indigo-500/20",
      quant: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
    };
    return (
      colors[category] || "bg-gray-500/10 text-gray-400 border-gray-500/20"
    );
  };

  return (
    <section className="w-full py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={itemVariants}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Featured <span className="text-accent">Projects</span>
          </h2>
          <p className="text-base md:text-lg text-muted max-w-2xl mx-auto leading-relaxed">
            Showcasing innovative solutions in fintech, healthcare, and Web3
            technologies
          </p>
        </motion.div>

        {/* Featured Projects Grid */}
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              className="group relative"
            >
              <div className="bg-background border border-accent/20 rounded-2xl p-8 hover:border-accent/40 transition-all duration-300 hover:shadow-xl hover:shadow-accent/5 h-full">
                {/* Project Header */}
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center space-x-3">
                    <span className="text-2xl">
                      {getCategoryIcon(project.category)}
                    </span>
                    <div>
                      <h3 className="text-xl font-bold text-foreground group-hover:text-accent transition-colors">
                        {project.name}
                      </h3>
                      <div className="flex items-center space-x-2 mt-1">
                        <span
                          className={`px-2 py-1 rounded-full text-xs font-medium border ${getCategoryColor(
                            project.category
                          )}`}
                        >
                          {project.category.charAt(0).toUpperCase() +
                            project.category.slice(1)}
                        </span>
                        <span className="px-2 py-1 rounded-full text-xs font-medium bg-green-500/10 text-green-400 border border-green-500/20">
                          {project.status}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Project Description */}
                <p className="text-muted text-sm md:text-base leading-relaxed mb-6">
                  {project.longDescription}
                </p>

                {/* Technologies */}
                <div className="mb-6">
                  <p className="text-foreground font-medium text-sm mb-3">
                    Technologies:
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.slice(0, 4).map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-accent/10 text-accent text-xs rounded-lg border border-accent/20"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="px-3 py-1 bg-muted/20 text-muted text-xs rounded-lg">
                        +{project.technologies.length - 4} more
                      </span>
                    )}
                  </div>
                </div>

                {/* Project Footer */}
                <div className="flex items-center justify-end pt-4 border-t border-accent/10">
                  <Link
                    href={project.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 text-accent hover:text-accent/80 transition-colors font-medium text-sm"
                  >
                    <span>View Project</span>
                    <svg
                      className="w-4 h-4 group-hover:translate-x-1 transition-transform"
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
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          className="text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={itemVariants}
        >
          <Link
            href="/projects"
            className="inline-flex items-center space-x-3 px-8 py-4 bg-accent text-background font-semibold rounded-xl hover:bg-accent/90 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-accent/20 text-lg"
          >
            <span>View All Projects</span>
            <div className="flex items-center space-x-1">
              <span className="text-sm opacity-80">({projects.length})</span>
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </div>
          </Link>

          <p className="text-sm text-muted mt-4 max-w-md mx-auto">
            Explore my complete portfolio spanning Web3, fintech, healthcare,
            and more
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
