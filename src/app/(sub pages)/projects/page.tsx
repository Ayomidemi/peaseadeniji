import React from "react";
import type { Metadata } from "next";
// import Image from "next/image";
import dynamic from "next/dynamic";

// import bg from "../../../../public/background/bg-img.png";
// import RenderModel from "@/components/RenderModel";
import { projectsData, projectCategories } from "@/app/data";
import ProjectsShowcase from "@/components/projects/ProjectsShowcase";

// const Staff = dynamic(() => import("@/components/models/Staff"), {
//   ssr: false,
// });

export const metadata: Metadata = {
  title: "Projects Portfolio - React, Next.js, Fintech, AI & Web3 Development",
  description:
    "Explore Peace Adeniji's diverse software engineering portfolio: Fintech banking apps, e-commerce platforms, social impact projects, Web3 NFT marketplaces, AI-powered applications, and modern web development. Built with React, Next.js, Python, C++, and cutting-edge technologies.",
  keywords: [
    "Peace Adeniji Projects",
    "Software Engineering Portfolio",
    "Fintech Applications",
    "React Projects",
    "Next.js Applications",
    "AI Projects",
    "Web3 Development",
    "Blockchain Applications",
    "Social Impact Technology",
    "E-commerce Development",
    "Banking Applications",
    "NFT Marketplace",
    "Three.js Projects",
    "Mobile Development",
    "Quantitative Finance Projects",
    "Python Projects",
    "C++ Applications",
    "Full Stack Development",
    "ChessInSlums Africa",
    "Eze Wholesale",
    "Horizon Banking App",
    "AI T-Shirt Generator",
    "Peniel Day Foundation",
    "JavaScript Portfolio",
    "TypeScript Projects",
    "Node.js Applications",
  ],
  openGraph: {
    title:
      "Projects Portfolio - Peace Adeniji Software Engineer & Quantitative Developer",
    description:
      "Discover innovative software projects by Peace Adeniji: fintech banking apps, AI-powered applications, Web3 platforms, social impact technology, and modern web development solutions.",
    url: "https://peaseadeniji.com/projects",
  },
  twitter: {
    title:
      "Software Engineering & Quantitative Development Projects by Peace Adeniji",
    description:
      "Innovative projects showcasing React, Next.js, AI, Web3, fintech expertise. Banking apps, NFT marketplaces, social impact platforms, and quantitative finance solutions.",
  },
  alternates: {
    canonical: "/projects",
  },
};

const Projects = () => {
  return (
    <section className="w-full min-h-screen py-20">
      {/* <Image
        priority
        sizes="100vw"
        src={bg}
        alt="background-image"
        fill
        className="-z-50 w-full h-full object-cover object-center opacity-40"
      /> */}

      <div className="container mx-auto px-0 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
            All <span className="text-accent">Projects</span>
          </h1>
          <p className="text-lg md:text-xl text-muted max-w-3xl mx-auto leading-relaxed">
            Dive deep into my complete portfolio of software engineering
            projects. From fintech applications to AI-powered tools, each
            project showcases technical expertise and innovative
            problem-solving.
          </p>
        </div>

        {/* Category Overview */}
        <div className="mb-16">
          <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-8 text-center">
            Project Categories
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {projectCategories.map((category) => (
              <div
                key={category.id}
                className={`${category.color} rounded-lg p-4 text-center hover:scale-105 transition-transform duration-300 cursor-pointer border border-accent/20`}
              >
                <div className="text-2xl mb-2">{category.icon}</div>
                <h3 className="font-semibold text-sm mb-1">{category.name}</h3>
                <p className="text-xs opacity-80">{category.description}</p>
              </div>
            ))}
          </div>
        </div>

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
              technological boundaries. Let&apos;s discuss how we can bring your
              ideas to life.
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
  );
};

export default Projects;
