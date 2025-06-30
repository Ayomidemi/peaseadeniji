"use client";

import React from "react";
import { motion } from "framer-motion";
import { projectsData, projectCategories } from "@/app/data";
import ProjectsShowcase from "@/components/projects/ProjectsShowcase";
import Navbar from "@/components/Navbar";

const ProjectsPage = () => {
  return (
    <>
      <Navbar />
      <section className="w-full min-h-screen pt-36 pb-20">
        <div className="container mx-auto px-0 sm:px-6 lg:px-8">
          {/* Header Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <motion.h1
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6"
            >
              All <span className="text-accent">Projects</span>
            </motion.h1>
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ delay: 0.8, duration: 1.5 }}
              className="h-1 bg-gradient-to-r from-transparent via-accent to-transparent mx-auto max-w-md mb-6"
            />
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.8 }}
              className="text-lg md:text-xl text-muted max-w-3xl mx-auto leading-relaxed"
            >
              Dive deep into my complete portfolio of software engineering
              projects. From fintech applications to AI-powered tools, each
              project showcases technical expertise and innovative
              problem-solving.
            </motion.p>
          </motion.div>

          {/* Projects Showcase Component */}
          <ProjectsShowcase
            projects={projectsData}
            categories={projectCategories}
          />

          {/* Call to Action */}
          <div className="mt-20 text-center">
            <div className="rounded-lg p-8 border border-accent/20">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                Ready to Collaborate?
              </h2>
              <p className="text-muted mb-6 max-w-2xl mx-auto">
                I&apos;m always excited to work on innovative projects that push
                technological boundaries. Let&apos;s discuss how we can bring
                your ideas to life.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a
                  href="/contact"
                  className="flex justify-center items-center text-center w-full sm:w-[200px] px-6 py-3 bg-accent text-background font-semibold rounded-lg hover:bg-accent/90 transition-colors"
                >
                  Start a Project
                </a>
                <a
                  href="https://github.com/Ayomidemi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex justify-center items-center text-center w-full sm:w-[200px] px-6 py-3 border border-accent text-accent font-semibold rounded-lg hover:bg-accent/10 transition-colors"
                >
                  View GitHub
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProjectsPage;
