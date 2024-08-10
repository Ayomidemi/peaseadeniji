"use client";

import React, { useEffect, useRef, useState } from "react";
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
      // delayChildren: 0.5,
    },
  },
};

const ProjectsList = ({ projects }: Props) => {
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

  return (
    <motion.div
      ref={ref}
      variants={container}
      initial="hidden"
      animate={isVisible ? "show" : "hidden"}
      className="w-full max-w-auto xl:max-w-4xl mx-auto lg:px-16 space-y-6 md:space-y-8 flex flex-col items-center"
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
