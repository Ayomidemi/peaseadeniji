import React from "react";
import type { Metadata } from "next";
import QuantShowcase from "@/components/quant/QuantShowcase";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Quant",
  description:
    "Explore Peace (Pease) Adeniji's quantitative finance notebooks on stochastic modeling, Heston calibration, regime-based allocation, binomial trees, and derivatives pricing.",
  keywords: [
    "Peace Adeniji",
    "Pease Adeniji",
    "Quantitative Finance",
    "Stochastic Modeling",
    "Derivatives Pricing",
    "Heston Model",
    "Monte Carlo",
    "Binomial Trees",
    "Financial Engineering",
    "WorldQuant University",
    "Quant Work",
  ],
  openGraph: {
    title: "Quant · Peace Adeniji",
    description:
      "Quantitative finance notebooks on stochastic modeling and derivatives pricing.",
    url: "https://peaseadeniji.com/quant",
  },
  twitter: {
    title: "Quant · Peace Adeniji",
    description:
      "Stochastic modeling and derivatives pricing notebooks by Peace (Pease) Adeniji.",
  },
  alternates: {
    canonical: "/quant",
  },
};

const Quant = () => {
  return (
    <>
      <Navbar />
      <div className="mx-auto max-w-5xl px-6 pb-24 pt-28 sm:px-8 sm:pt-36">
        <QuantShowcase />
      </div>
    </>
  );
};

export default Quant;
