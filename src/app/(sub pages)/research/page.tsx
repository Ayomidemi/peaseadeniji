import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import ResearchComingSoon from "@/components/research/ResearchComingSoon";
import Navbar from "@/components/Navbar";

import bg from "../../../../public/background/Pease.png";

export const metadata: Metadata = {
  title:
    "Research - Data Science & Quantitative Finance Research | Coming Soon",
  description:
    "Peace (Pease) Adeniji's research hub focusing on quantitative finance, machine learning, financial engineering, and data science. Currently collecting and analyzing data for upcoming research publications and insights.",
  keywords: [
    "Peace Adeniji",
    "Pease Adeniji",
    "Peace Pease Adeniji",
    "Peace Pease Adeniji Research",
    "Quantitative Finance Research",
    "Financial Engineering Research",
    "Machine Learning Research",
    "Data Science Research",
    "Algorithmic Trading Research",
    "Risk Management Research",
    "Portfolio Optimization",
    "Mathematical Modeling",
    "Statistical Analysis",
    "Time Series Analysis",
    "Derivatives Pricing",
    "Financial Data Analysis",
    "Quantitative Research",
    "Academic Research",
    "WorldQuant University Research",
    "Coming Soon",
    "Data Collection",
    "Research Publications",
    "Financial Technology Research",
    "AI Finance Research",
  ],
  openGraph: {
    title: "Research Hub - Peace (Pease) Adeniji | Coming Soon",
    description:
      "Explore upcoming research in quantitative finance, machine learning, and financial engineering. Currently collecting data for groundbreaking insights in fintech and AI.",
    url: "https://peaseadeniji.com/research",
  },
  twitter: {
    title: "Research - Peace (Pease) Adeniji | Data Collection in Progress",
    description:
      "Quantitative finance and AI research coming soon. Currently analyzing data for innovative insights in financial engineering and machine learning.",
  },
  alternates: {
    canonical: "/research",
  },
};

const Research = () => {
  return (
    <>
      <Navbar />
      <Image
        src={bg}
        priority
        sizes="100vw"
        alt="Peace Adeniji Research"
        className="-z-50 fixed top-0 left-0 w-full h-full object-cover object-center opacity-[0.03]"
      />

      <div className="relative w-full min-h-screen flex flex-col items-center justify-center pt-10 sm:pt-16">
        <ResearchComingSoon />
      </div>
    </>
  );
};

export default Research;
