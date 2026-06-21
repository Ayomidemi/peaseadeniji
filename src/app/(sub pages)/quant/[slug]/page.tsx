import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import QuantViewer from "@/components/quant/QuantViewer";
import { getQuantProject, quantProjects } from "@/app/quantData";

import bg from "../../../../../public/background/Pease.png";

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
      <Image
        src={bg}
        priority
        sizes="100vw"
        alt={project.title}
        className="-z-50 fixed top-0 left-0 w-full h-full object-cover object-center opacity-[0.04]"
      />

      <div className="relative w-full min-h-screen pt-0 sm:pt-16">
        <QuantViewer project={project} />
      </div>
    </>
  );
};

export default QuantProjectPage;
