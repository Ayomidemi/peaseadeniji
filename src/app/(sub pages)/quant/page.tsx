import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import QuantShowcase from "@/components/quant/QuantShowcase";
import Navbar from "@/components/Navbar";

import bg from "../../../../public/background/Pease.png";

export const metadata: Metadata = {
  title: "Quant Work - Stochastic Modeling & Derivatives Pricing",
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
    title: "Quant Work - Peace (Pease) Adeniji",
    description:
      "Quantitative finance notebooks on stochastic modeling and derivatives pricing.",
    url: "https://peaseadeniji.com/quant",
  },
  twitter: {
    title: "Quant Work - Peace (Pease) Adeniji",
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
      <Image
        src={bg}
        priority
        sizes="100vw"
        alt="Peace (Pease) Adeniji Quant Work"
        className="-z-50 fixed top-0 left-0 w-full h-full object-cover object-center opacity-[0.04]"
      />

      <div className="relative w-full min-h-screen flex flex-col items-center justify-center pt-0 sm:pt-16">
        <QuantShowcase />
      </div>
    </>
  );
};

export default Quant;
