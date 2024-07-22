import React from "react";

import Image from "next/image";

import bg from "../../../../public/background/bg-img.png";
import RenderModel from "@/components/RenderModel";
import { projectsData } from "@/app/data";
import ProjectsList from "@/components/projects";
import Staff from "@/components/models/Staff";

const Projects = () => {
  return (
    <section>
      <Image
        priority
        sizes="100vw"
        src={bg}
        alt="background-image"
        fill
        className="-z-50 w-full h-full object-cover object-center opacity-40"
      />

      <div className="flex items-center justify-center">
        <ProjectsList projects={projectsData} />
      </div>

      <div className="flex items-center justify-center fixed  top-16  lg:top-20 -translate-x-1/2 lg:translate-x-0 -z-10 left-1/2 lg:-left-24 h-screen">
        <RenderModel>
          <Staff />
        </RenderModel>
      </div>
    </section>
  );
};

export default Projects;
