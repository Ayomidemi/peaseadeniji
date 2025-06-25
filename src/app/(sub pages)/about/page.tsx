import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
// import dynamic from "next/dynamic";

import bg from "../../../../public/background/Pease.png";
// import RenderModel from "@/components/RenderModel";
import AboutDetails from "@/components/about";

// const HatModel = dynamic(() => import("@/components/models/HatModel"), {
//   ssr: false,
// });

export const metadata: Metadata = {
  title: "About Me - Senior Software Engineer with 5+ Years Experience",
  description:
    "Learn about Peace Adeniji, a Senior Software Engineer with 5+ years of experience. MSc in Financial Engineering from WorldQuant University, BSc in Computer Science. Specialized in React, React Native, Node.js, and leading remote engineering teams. Available for new opportunities worldwide.",
  keywords: [
    "About Peace Adeniji",
    "Pease Adeniji",
    "Peace Adeniji",
    "Senior Software Engineer Background",
    "React Developer Experience",
    "Remote Team Leadership",
    "Financial Engineering",
    "Computer Science Graduate",
    "WorldQuant University",
    "Miva Open University",
    "Nigerian Software Engineer",
    "Full Stack Developer Bio",
    "Software Engineering Career",
    "Technology Leadership",
    "International Development Team",
  ],
  openGraph: {
    title: "About Peace Adeniji - Senior Software Engineer",
    description:
      "Discover Peace Adeniji's journey as a Senior Software Engineer. 5+ years building scalable applications, leading remote teams, and delivering exceptional results. MSc Financial Engineering, BSc Computer Science.",
    url: "https://peaseadeniji.com/about",
  },
  twitter: {
    title: "About Peace Adeniji - Senior Software Engineer",
    description:
      "5+ years of software engineering excellence. Specialized in React, React Native, Node.js. Leading remote teams and building scalable applications worldwide.",
  },
  alternates: {
    canonical: "/about",
  },
};

const About = () => {
  return (
    <>
      <Image
        src={bg}
        priority
        sizes="100vw"
        alt="Pease Adeniji"
        className="-z-50 fixed top-0 left-0 w-full h-full object-cover object-center opacity-[0.03]"
      />
      {/* 
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
            Hi, I&#39;m{" "}
            <span className="text-accent"> Peace (Pease) Adeniji</span>
          </h1>
          <h1 className="font-bold text-base xs:text-2xl sm:text-3xl lg:text-4xl mt-2 text-gray-400">
            Senior Software Engineer
          </h1>
          <p className="py-8 text-gray-300 hidden lg:flex sm:max-w-[65%]">
            Results-driven Senior Software Engineer with 5+ years of experience
            building scalable, high-performance web and mobile applications.
            Passionate about leading remote engineering teams, mentoring
            developers, and driving impactful software solutions.
          </p>
        </div>
      </div>

      <AboutDetails />
    </>
  );
};

export default About;
