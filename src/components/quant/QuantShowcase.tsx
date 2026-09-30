"use client";

import React from "react";
import Link from "next/link";
import { quantCategories, quantProjects } from "@/app/quantData";

const QuantShowcase = () => {
  return (
    <div>
      <header className="mb-16 max-w-xl">
        <h1 className="font-serif text-5xl text-foreground sm:text-6xl">
          Quant
        </h1>
        <p className="mt-4 text-sm leading-relaxed text-muted sm:text-[15px]">
          Notebooks on deep learning, stochastic modeling, and derivatives
          pricing. The work, the data, and the method.
        </p>
      </header>

      <div className="space-y-16">
        {quantCategories.map((category) => {
          const projects = quantProjects.filter(
            (project) => project.category === category.name
          );

          return (
            <section key={category.id}>
              <div className="border-b border-blush pb-4">
                <h2 className="font-serif text-3xl text-foreground">
                  {category.name}
                </h2>
                <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted">
                  {category.description}
                </p>
              </div>

              <div className="divide-y divide-blush/80">
                {projects.map((project) => (
                  <Link
                    key={project.id}
                    href={`/quant/${project.slug}`}
                    className="group block py-8"
                  >
                    <h3 className="font-serif text-2xl text-foreground">
                      {project.title}
                    </h3>
                    <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted">
                      {project.description}
                    </p>
                    <p className="mt-3 text-xs tracking-wide text-muted/80">
                      {project.topics.join(" · ")}
                    </p>
                    <span className="mt-4 inline-block text-sm text-foreground underline decoration-blush decoration-2 underline-offset-4 group-hover:decoration-accent">
                      Read notebook
                    </span>
                  </Link>
                ))}
              </div>
            </section>
          );
        })}
      </div>
    </div>
  );
};

export default QuantShowcase;
