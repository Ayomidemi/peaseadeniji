"use client";

import React from "react";
import { motion } from "framer-motion";

import useScreenSize from "../hooks/useScreenSize";
import { BtnList } from "@/app/data";
import NavButton from "./NavButton";

type Props = {};

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const Navigation = (props: Props) => {
  const size = useScreenSize();

  return (
    <div className="fixed top-0 right-2 h-screen flex items-center justify-center z-[9] pointer-events-none">
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="flex flex-col space-y-4 items-end justify-center relative pointer-events-auto"
        style={{ width: "auto", height: "auto" }}
      >
        {BtnList?.map((btn) => (
          <NavButton
            key={btn.label}
            x={0}
            y={0}
            {...btn}
            labelDirection="left"
          />
        ))}
      </motion.div>
    </div>
  );
};

export default Navigation;
