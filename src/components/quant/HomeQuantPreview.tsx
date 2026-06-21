"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { quantProjects } from "@/app/quantData";

const HomeQuantPreview = () => {
  const topProjects = quantProjects.slice(0, 2);

  return (
    <section className="w-full py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <p className="text-xs uppercase tracking-[0.2em] text-muted mb-3">
            Notebooks
          </p>
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground">
              Quant <span className="text-accent">work</span>
            </h2>
            <Link
              href="/quant"
              className="text-sm font-medium text-accent hover:underline underline-offset-4"
            >
              Browse all notebooks
            </Link>
          </div>
        </div>

        <div className="rounded-2xl border border-foreground/10 bg-background/60 overflow-hidden divide-y divide-foreground/10">
          {topProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, x: -12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.4 }}
            >
              <Link
                href={`/quant/${project.slug}`}
                className="group flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8 px-5 sm:px-8 py-6 sm:py-7 border-l-4 border-transparent hover:border-accent hover:bg-accent/[0.04] transition-all duration-300"
              >
                <span className="text-3xl sm:text-4xl font-bold text-accent/30 group-hover:text-accent/60 tabular-nums shrink-0 w-12">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <div className="flex-1 min-w-0">
                  <p className="text-[11px] uppercase tracking-widest text-muted mb-1.5">
                    {project.category}
                  </p>
                  <h3 className="text-base sm:text-lg font-semibold text-foreground group-hover:text-accent transition-colors mb-2">
                    {project.title}
                  </h3>
                  <p className="text-sm text-muted leading-relaxed line-clamp-2 sm:line-clamp-1">
                    {project.description}
                  </p>
                </div>

                <div className="sm:text-right shrink-0 sm:max-w-[200px]">
                  <p className="text-xs text-muted/80 leading-relaxed hidden sm:block mb-3">
                    {project.topics.join(" · ")}
                  </p>
                  <span className="inline-flex items-center gap-1.5 text-sm font-medium text-accent">
                    Open notebook
                    <span
                      className="transition-transform group-hover:translate-x-1"
                      aria-hidden
                    >
                      →
                    </span>
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeQuantPreview;
