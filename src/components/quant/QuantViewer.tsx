"use client";

import React from "react";
import Link from "next/link";
import type { QuantProject } from "@/app/quantData";

interface QuantViewerProps {
  project: QuantProject;
}

const QuantViewer = ({ project }: QuantViewerProps) => {
  return (
    <div>
      <Link
        href="/quant"
        className="text-sm text-foreground underline decoration-blush decoration-2 underline-offset-4 hover:decoration-accent"
      >
        All notebooks
      </Link>

      <header className="mt-8 mb-8 max-w-3xl">
        <p className="text-xs uppercase tracking-[0.22em] text-muted">
          {project.category}
        </p>
        <h1 className="mt-3 font-serif text-4xl leading-tight text-foreground sm:text-5xl">
          {project.title}
        </h1>
        <p className="mt-4 text-sm leading-relaxed text-muted">
          {project.description}
        </p>
        <a
          href={project.htmlPath}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-5 inline-block text-sm text-foreground underline decoration-blush decoration-2 underline-offset-4 hover:decoration-accent"
        >
          Open full notebook
        </a>
      </header>

      <iframe
        src={project.htmlPath}
        title={project.title}
        className="min-h-[80vh] w-full border border-blush bg-white"
      />
    </div>
  );
};

export default QuantViewer;
