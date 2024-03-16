"use client";
import React from "react";
import { motion } from "framer-motion";
import { slideInFromLeft, slideInFromRight } from "@/utils/motion";

const SponsorText = () => {
  return (
    <div className="w-full h-auto flex flex-col items-center justify-center">
      <motion.div
        variants={slideInFromLeft(0.5)}
        className="text-[70px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500"
      >
        Sponsors
      </motion.div>
      <motion.div
        variants={slideInFromRight(0.5)}
        className="east-sea text-[40px] text-theme mb-1 mt-[1px] text-center"
      >
        Seeking your sponsorship to propel our great work
      </motion.div>
    </div>
  );
};

export default SponsorText;
