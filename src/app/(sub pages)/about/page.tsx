import React from "react";
// import Image from "next/image";
// import dynamic from "next/dynamic";

// import bg from "../../../../public/background/about-bg.png";
// import RenderModel from "@/components/RenderModel";
import AboutDetails from "@/components/about";

// const HatModel = dynamic(() => import("@/components/models/HatModel"), {
//   ssr: false,
// });

export const metadata = {
  title: "About Me",
};

const About = () => {
  return (
    <>
      {/* <Image
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
      </div> */}

      <div className="relative w-full h-screen flex flex-col items-center justify-center">
        <div className="absolute flex flex-col items-center text-center top-1/2 sm:top-[60%] left-1/2 -translate-y-1/2 -translate-x-1/2 w-max">
          {/* Newwww */}
          <p className="uppercase text-xs xs:text-sm tracking-widest text-gray-300 mb-4">
            LET&#39;S BUILD SOMETHING COOL.
          </p>

          <h1 className="font-bold text-2xl xs:text-4xl sm:text-5xl lg:text-6xl ">
            Hi, I&#39;m <span className="text-accent"> Peace Adeniji</span>
          </h1>
          <h1 className="font-bold text-base xs:text-2xl sm:text-3xl lg:text-4xl mt-2 text-gray-400">
            A Web & Mobile Developer
          </h1>
          <p className="py-8 text-gray-300 hidden lg:flex sm:max-w-[65%]">
            Every line of code I write is a step toward making the web not just
            functional, but beautiful. This is my space—where design meets
            innovation. Let’s collaborate and create something extraordinary
            together!
          </p>
        </div>
      </div>

      <AboutDetails />
    </>
  );
};

export default About;
