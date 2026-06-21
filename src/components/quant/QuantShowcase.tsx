"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { quantCategories, quantProjects } from "@/app/quantData";

const QuantShowcase = () => {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <div className="relative w-full max-w-7xl mx-auto px-4 py-12 sm:py-16 lg:py-20">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
          Quant <span className="text-accent">Work</span>
        </h1>
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ delay: 0.8, duration: 1.5 }}
          className="h-1 bg-gradient-to-r from-transparent via-accent to-transparent mx-auto max-w-md mb-6"
        />
        <p className="text-lg md:text-xl text-muted max-w-3xl mx-auto leading-relaxed">
          Technical notebooks on stochastic modeling and derivatives pricing —
          from Heston calibration and regime allocation to binomial trees, jump
          diffusion, and American option pricing.
        </p>
      </motion.div>

      <div className="space-y-16">
        {quantCategories.map((category) => {
          const projects = quantProjects.filter(
            (project) => project.category === category.name
          );

          return (
            <section key={category.id}>
              <div className="mb-8">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-2xl" aria-hidden>
                    {category.icon}
                  </span>
                  <h2 className="text-2xl md:text-3xl font-semibold text-foreground">
                    {category.name}
                  </h2>
                </div>
                <p className="text-muted max-w-3xl">{category.description}</p>
              </div>

              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-80px" }}
                className="grid grid-cols-1 lg:grid-cols-2 gap-6"
              >
                {projects.map((project) => (
                  <motion.article
                    key={project.id}
                    variants={cardVariants}
                    onHoverStart={() => setHoveredCard(project.id)}
                    onHoverEnd={() => setHoveredCard(null)}
                    className="group relative"
                  >
                    <Link href={`/quant/${project.slug}`} className="block h-full">
                      <motion.div
                        whileHover={{ y: -5 }}
                        transition={{ duration: 0.3 }}
                        className="relative h-full bg-background/50 backdrop-blur-sm border border-accent/20 rounded-xl p-8 hover:border-accent/40 hover:shadow-lg hover:shadow-accent/10 transition-all duration-300"
                      >
                        <div className="flex items-center gap-3 mb-4 text-sm text-muted">
                          <span className="px-2 py-1 bg-accent/10 text-accent rounded-full text-xs">
                            {project.category}
                          </span>
                        </div>

                        <h3 className="text-xl md:text-2xl font-bold text-foreground mb-4 group-hover:text-accent transition-colors">
                          {project.title}
                        </h3>

                        <p className="text-muted leading-relaxed mb-6">
                          {project.description}
                        </p>

                        <div className="flex flex-wrap gap-2 mb-6">
                          {project.topics.map((topic) => (
                            <span
                              key={topic}
                              className="px-3 py-1 bg-muted/20 text-foreground rounded-full text-xs"
                            >
                              {topic}
                            </span>
                          ))}
                        </div>

                        <div className="flex items-center gap-2 text-accent font-medium">
                          <span>Read notebook</span>
                          <motion.span
                            animate={{
                              x: hoveredCard === project.id ? 5 : 0,
                            }}
                            transition={{ duration: 0.2 }}
                          >
                            →
                          </motion.span>
                        </div>
                      </motion.div>
                    </Link>
                  </motion.article>
                ))}
              </motion.div>
            </section>
          );
        })}
      </div>
    </div>
  );
};

export default QuantShowcase;
