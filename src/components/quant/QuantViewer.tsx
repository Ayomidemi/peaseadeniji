"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import type { QuantProject } from "@/app/quantData";

interface QuantViewerProps {
  project: QuantProject;
}

const QuantViewer = ({ project }: QuantViewerProps) => {
  return (
    <div className="relative w-full max-w-7xl mx-auto px-4 py-8 sm:py-12 lg:py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-6"
      >
        <Link
          href="/quant"
          className="inline-flex items-center gap-2 text-sm font-medium text-accent hover:underline mb-6"
        >
          ← Back to Quant Work
        </Link>

        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4 mb-6">
          <div>
            <p className="text-sm text-muted mb-2">{project.category}</p>
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground">
              {project.title}
            </h1>
            <p className="text-muted mt-3 max-w-3xl">{project.description}</p>
          </div>

          <a
            href={project.htmlPath}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-4 py-2 rounded-lg border border-accent/60 text-sm font-medium text-accent hover:bg-accent/10 transition-colors shrink-0"
          >
            Open full notebook ↗
          </a>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.15, duration: 0.6 }}
        className="rounded-xl overflow-hidden border border-accent/20 bg-background shadow-sm"
      >
        <iframe
          src={project.htmlPath}
          title={project.title}
          className="w-full min-h-[80vh] bg-white"
        />
      </motion.div>
    </div>
  );
};

export default QuantViewer;
