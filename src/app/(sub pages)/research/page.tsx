import React from "react";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Research",
  description:
    "Research notes are not published yet.",
  robots: {
    index: false,
    follow: true,
  },
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
      <div className="mx-auto max-w-5xl px-6 pb-24 pt-28 sm:px-8 sm:pt-36">
        <h1 className="font-serif text-5xl text-foreground sm:text-6xl">
          Research
        </h1>
        <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted sm:text-[15px]">
          Notes on quantitative finance and machine learning are collected on
          the quant page for now.
        </p>
        <a
          href="/quant"
          className="mt-8 inline-block text-sm text-foreground underline decoration-blush decoration-2 underline-offset-4 hover:decoration-accent"
        >
          Read the notebooks
        </a>
      </div>
    </>
  );
};

export default Research;
