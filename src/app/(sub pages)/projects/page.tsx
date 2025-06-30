import React from "react";
import type { Metadata } from "next";
import ProjectsPage from "@/components/projects/ProjectsPage";

export const metadata: Metadata = {
  title: "Projects - React, Next.js, Fintech, AI & Web3 Development",
  description:
    "Explore Peace (Pease) Adeniji's diverse software engineering portfolio: Fintech banking apps, e-commerce platforms, social impact projects, Web3 NFT marketplaces, AI-powered applications, and modern web development. Built with React, Next.js, Python, C++, and cutting-edge technologies.",
  keywords: [
    "Peace Adeniji",
    "Pease Adeniji",
    "Peace Pease Adeniji",
    "Peace Pease Adeniji Projects",
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
    "Chess in Slums Africa",
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
      "Projects Portfolio - Peace (Pease) Adeniji Software Engineer & Quantitative Developer",
    description:
      "Discover innovative software projects by Peace (Pease) Adeniji: fintech banking apps, AI-powered applications, Web3 platforms, social impact technology, and modern web development solutions.",
    url: "https://peaseadeniji.com/projects",
  },
  twitter: {
    title:
      "Software Engineering & Quantitative Development Projects by Peace (Pease) Adeniji",
    description:
      "Innovative projects showcasing React, Next.js, AI, Web3, fintech expertise. Banking apps, NFT marketplaces, social impact platforms, and quantitative finance solutions.",
  },
  alternates: {
    canonical: "/projects",
  },
};

const Projects = () => {
  return <ProjectsPage />;
};

export default Projects;
