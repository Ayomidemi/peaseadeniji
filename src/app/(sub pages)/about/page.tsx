import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
// import dynamic from "next/dynamic";

import bg from "../../../../public/background/Pease.png";
// import RenderModel from "@/components/RenderModel";
import AboutDetails from "@/components/about";
import Navbar from "@/components/Navbar";

// const HatModel = dynamic(() => import("@/components/models/HatModel"), {
//   ssr: false,
// });

export const metadata: Metadata = {
  title: "About Me - Software Engineer with 5+ Years Experience",
  description:
    "Learn about Peace (Pease) Adeniji, a Software Engineer with 5+ years of experience. MSc in Financial Engineering from WorldQuant University, BSc in Computer Science. Specialized in React, React Native, Node.js, and leading remote engineering teams. Available for new opportunities worldwide.",
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
      "Discover Peace (Pease) Adeniji's journey as a Software Engineer. 5+ years building scalable applications, leading remote teams, and delivering exceptional results. MSc Financial Engineering, BSc Computer Science.",
    url: "https://peaseadeniji.com/about",
  },
  twitter: {
    title: "About Peace (Pease) Adeniji - Software Engineer",
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
      <Navbar />
      <Image
        src={bg}
        priority
        sizes="100vw"
        alt="Pease Adeniji"
        className="-z-50 fixed top-0 left-0 w-full h-full object-cover object-center opacity-[0.05]"
      />
      {/* 
      <div className="w-full h-3/5 xs:h-3/4 sm:h-screen absolute top-1/2 -translate-y-1/2 left-0 z-10">
        <RenderModel>
          <HatModel />
        </RenderModel>
      </div> */}

      <div className="relative w-full h-screen flex flex-col items-center justify-center pt-12 sm:pt-16">
        <div className="absolute flex flex-col items-center text-center top-1/2 sm:top-[60%] left-1/2 -translate-y-1/2 -translate-x-1/2 w-full max-w-4xl px-4">
          {/* Newwww */}
          <p className="uppercase text-sm xs:text-base tracking-widest text-gray-300 mb-4">
            LET&#39;S BUILD SOMETHING COOL.
          </p>

          <h1 className="font-bold text-4xl lg:text-6xl">
            Hi, I&#39;m{" "}
            <span className="text-accent"> Peace (Pease) Adeniji</span>
          </h1>
          <h1 className="font-bold text-base xs:text-2xl sm:text-3xl lg:text-4xl mt-2 text-gray-400">
            Software Engineer
          </h1>
          <div className="pt-8 max-w-full">
            <div className="bg-gray-800/60 rounded-lg p-6 font-mono text-left border border-accent/30">
              <div className="text-gray-300 mb-2">
                <span className="text-accent/80">const</span>{" "}
                <span className="text-gray-200">Pease</span> = &#123;
              </div>
              <div className="ml-4 space-y-1 text-sm">
                <div>
                  <span className="text-accent/70">expertise</span>:{" "}
                  <span className="text-gray-300">
                    &quot;Building scalable apps that impact thousands&quot;
                  </span>
                  ,
                </div>
                <div>
                  <span className="text-accent/70">techStack</span>: [
                  <span className="text-gray-300">&quot;React&quot;</span>,{" "}
                  <span className="text-gray-300">&quot;Node.js&quot;</span>,{" "}
                  <span className="text-gray-300">&quot;Python&quot;</span>,{" "}
                  <span className="text-gray-300">&quot;C++&quot;</span>],
                </div>
                <div>
                  <span className="text-accent/70">passion</span>:{" "}
                  <span className="text-gray-300">
                    &quot;Fintech &amp; Social Impact&quot;
                  </span>
                  ,
                </div>
                <div>
                  <span className="text-accent/70">collaborate</span>:{" "}
                  <span className="text-gray-200">()</span>{" "}
                  <span className="text-accent/80">=&gt;</span> &#123;
                  <div className="ml-4">
                    <span className="text-accent/80">return</span>{" "}
                    <span className="text-gray-300">
                      &quot;Let&apos;s build something amazing&quot;
                    </span>
                    ;
                  </div>
                  &#125;
                </div>
              </div>
              <div className="text-gray-300 mt-2">&#125;;</div>
            </div>
          </div>
        </div>
      </div>

      <AboutDetails />
    </>
  );
};

export default About;
