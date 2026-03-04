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

      <div className="relative w-full h-screen flex flex-col items-center justify-center pt-12 sm:pt-16">
        <div className="absolute flex flex-col items-center text-center top-1/2 sm:top-[50%] left-1/2 -translate-y-1/2 -translate-x-1/2 w-full max-w-5xl px-4">
          {/* Newwww */}
          <p className="uppercase text-sm xs:text-base tracking-widest text-black mb-6">
            LET&#39;S BUILD SOMETHING COOL.
          </p>

          <h1 className="font-bold text-4xl lg:text-6xl text-foreground">
            Hi, I&#39;m{" "}
            <span className="text-accent"> Peace (Pease) Adeniji</span>
          </h1>
          <h1 className="font-bold text-base xs:text-2xl sm:text-3xl lg:text-4xl mt-3 text-black">
            A Software Engineer
          </h1>
          <div className="pt-8 max-w-full">
            <div className="bg-background rounded-lg p-6 font-mono text-left border border-accent/30 shadow-sm">
              <div className="text-foreground mb-2">
                <span className="text-accent">const</span>{" "}
                <span className="text-foreground">Pease</span> = &#123;
              </div>
              <div className="ml-4 space-y-1 text-sm">
                <div>
                  <span className="text-accent">expertise</span>:{" "}
                  <span className="text-black">
                    &quot;Building scalable apps that impact thousands&quot;
                  </span>
                  ,
                </div>
                <div>
                  <span className="text-accent">techStack</span>: [
                  <span className="text-black">&quot;React&quot;</span>,{" "}
                  <span className="text-black">&quot;Node.js&quot;</span>,{" "}
                  <span className="text-black">&quot;Python&quot;</span>,{" "}
                  <span className="text-black">&quot;C++&quot;</span>],
                </div>
                <div>
                  <span className="text-accent">passion</span>:{" "}
                  <span className="text-black">
                    &quot;Fintech &amp; Social Impact&quot;
                  </span>
                  ,
                </div>
                <div>
                  <span className="text-accent">collaborate</span>:{" "}
                  <span className="text-foreground">()</span>{" "}
                  <span className="text-accent">=&gt;</span> &#123;
                  <div className="ml-4">
                    <span className="text-accent">return</span>{" "}
                    <span className="text-black">
                      &quot;Let&apos;s build something amazing&quot;
                    </span>
                    ;
                  </div>
                  &#125;
                </div>
              </div>
              <div className="text-black mt-2">&#125;;</div>
            </div>
          </div>
        </div>
      </div>

      <AboutDetails />
    </>
  );
};

export default About;
