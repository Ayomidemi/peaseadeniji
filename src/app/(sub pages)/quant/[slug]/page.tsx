import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import QuantViewer from "@/components/quant/QuantViewer";
import { getQuantProject, quantProjects } from "@/app/quantData";

interface QuantProjectPageProps {
  params: { slug: string };
}

export function generateStaticParams() {
  return quantProjects.map((project) => ({ slug: project.slug }));
}

export function generateMetadata({ params }: QuantProjectPageProps): Metadata {
  const project = getQuantProject(params.slug);

  if (!project) {
    return { title: "Quant Project Not Found" };
  }

  return {
    title: `${project.title} | Quant Work`,
    description: project.description,
    alternates: {
      canonical: `/quant/${project.slug}`,
    },
  };
}

const QuantProjectPage = ({ params }: QuantProjectPageProps) => {
  const project = getQuantProject(params.slug);

  if (!project) {
    notFound();
  }

  return (
    <>
      <Navbar />
      <div className="mx-auto max-w-5xl px-6 pb-24 pt-28 sm:px-8 sm:pt-36">
        <QuantViewer project={project} />
      </div>
    </>
  );
};

export default QuantProjectPage;
