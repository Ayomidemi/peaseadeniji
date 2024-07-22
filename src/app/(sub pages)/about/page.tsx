import React from "react";

import Image from "next/image";

import bg from "../../../../public/background/bg-img.png";
import RenderModel from "@/components/RenderModel";
import HatModel from "@/components/models/HatModel";
import AboutDetails from "@/components/about";

const About = () => {
  return (
    <>
      <Image
        src={bg}
        priority
        sizes="100vw"
        alt="Pease Adeniji"
        className="-z-50 fixed top-0 left-0 w-full h-full object-cover object-center opacity-40"
      />

      <div className="w-full h-3/5 xs:h-3/4 sm:h-screen absolute top-1/2 -translate-y-1/2 left-0 z-10">
        <RenderModel>
          <HatModel />
        </RenderModel>
      </div>

      <div className="relative w-full h-screen flex flex-col items-center justify-center">
        <div className="absolute flex flex-col items-center text-center top-1/2 sm:top-[60%] left-1/2 -translate-y-1/2 -translate-x-1/2 w-max">
          <h1 className="font-bold text-4xl xs:text-5xl sm:text-6xl lg:text-7xl text-blue-300">
            Pease Adeniji
          </h1>
          <p className="font-light text-foreground text-lg">
            A Web & Mobile Developer
          </p>
        </div>
      </div>

      <AboutDetails />
    </>
  );
};

export default About;
