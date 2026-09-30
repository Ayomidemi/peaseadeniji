"use client";

import React from "react";
import { projectsData, projectCategories } from "@/app/data";
import ProjectsShowcase from "@/components/projects/ProjectsShowcase";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const ProjectsPage = () => {
  return (
    <>
      <Navbar />
      <section className="min-h-screen bg-background pb-20 pt-28 sm:pt-36">
        <div className="mx-auto max-w-5xl px-6 sm:px-8">
          <header className="mb-14 max-w-xl">
            <h1 className="font-serif text-5xl text-foreground sm:text-6xl">
              Projects
            </h1>
            <p className="mt-4 text-sm leading-relaxed text-muted sm:text-[15px]">
              Product work across fintech, web, and mobile. Each one is live.
            </p>
          </header>

          <ProjectsShowcase
            projects={projectsData}
            categories={projectCategories}
          />
        </div>
      </section>
      <Footer />
    </>
  );
};

export default ProjectsPage;
