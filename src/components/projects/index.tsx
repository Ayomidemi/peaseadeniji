"use client";

import React from "react";
import { motion } from "framer-motion";
import ProjectLayout from "./ProjectLayout";

type Props = {
  projects: {
    name: string;
    description: string;
    date: string;
    demoLink: string;
  }[];
};

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 1.5,
    },
  },
};

const ProjectsList = ({ projects }: Props) => {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="w-full max-w-auto xl:max-w-4xl px-4 mx-auto lg:px-16 space-y-6 md:space-y-8 flex flex-col items-center"
    >
      {projects.map(
        (
          project: React.JSX.IntrinsicAttributes & {
            name: string;
            description: string;
            date: string;
            demoLink: string;
          },
          index: React.Key | null | undefined
        ) => {
          return <ProjectLayout key={index} {...project} />;
        }
      )}
    </motion.div>
  );
};

export default ProjectsList;
