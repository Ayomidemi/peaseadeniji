import React from "react";
import type { Metadata } from "next";
import AboutDetails from "@/components/about";
import Navbar from "@/components/Navbar";

// const HatModel = dynamic(() => import("@/components/models/HatModel"), {
//   ssr: false,
// });

export const metadata: Metadata = {
  title: "About Me - Software Engineer with 6+ Years Experience",
  description:
    "Learn about Peace (Pease) Adeniji, a Software Engineer with 6+ years of experience. MSc in Financial Engineering from WorldQuant University, BSc in Computer Science. Specialized in React, React Native, Node.js, and leading remote engineering teams. Available for new opportunities worldwide.",
  keywords: [
    "About Peace Pease Adeniji",
    "Pease Adeniji",
    "Peace Adeniji",
    "Pease",
    "Peace",
    "Software Engineer Background",
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
    title: "About Peace (Pease) Adeniji - Software Engineer",
    description:
      "Discover Peace (Pease) Adeniji's journey as a Software Engineer. 6+ years building scalable applications, leading remote teams, and delivering exceptional results. MSc Financial Engineering, BSc Computer Science.",
    url: "https://peaseadeniji.com/about",
  },
  twitter: {
    title: "About Peace (Pease) Adeniji - Software Engineer",
    description:
      "6+ years of software engineering excellence. Specialized in React, React Native, Node.js. Leading remote teams and building scalable applications worldwide.",
  },
  alternates: {
    canonical: "/about",
  },
};

const About = () => {
  return (
    <>
      <Navbar />
      {/* <Image
        src={bg}
        priority
        sizes="100vw"
        alt="Pease Adeniji"
        className="-z-50 fixed top-0 left-0 w-full h-full object-cover object-center opacity-[0.04]"
      /> */}
      {/* 
      <div className="w-full h-3/5 xs:h-3/4 sm:h-screen absolute top-1/2 -translate-y-1/2 left-0 z-10">
        <RenderModel>
          <HatModel />
        </RenderModel>
      </div> */}

      <div className="relative mx-auto w-full max-w-5xl px-6 pb-8 pt-28 sm:px-8 sm:pt-36">
        <p className="text-xs uppercase tracking-[0.22em] text-muted">About</p>
        <h1 className="mt-4 max-w-3xl font-serif text-5xl leading-[1.05] text-foreground sm:text-6xl">
          Peace Adeniji
        </h1>
        <p className="mt-6 max-w-xl text-sm leading-relaxed text-muted sm:text-[15px]">
          Software engineer and quantitative developer. I build products people
          use, then the models that explain the numbers underneath.
        </p>
      </div>

      <AboutDetails />
    </>
  );
};

export default About;
