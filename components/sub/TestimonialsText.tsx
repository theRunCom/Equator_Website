"use client";
import React from "react";
import { motion } from "framer-motion";
import { slideInFromLeft, slideInFromRight } from "@/utils/motion";

const TestimonialsText = () => {
  return (
    <div className="w-full h-auto flex flex-col items-center justify-center">
      <motion.div
        variants={slideInFromLeft(0.5)}
        className="text-[70px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500"
      >
        The Visions Of the Future
      </motion.div>
      <motion.div
        variants={slideInFromRight(0.5)}
        className="cursive text-[30px] text-theme mb-1 mt-[1px] text-center"
      >
        They speak about Fully On-chain Games
      </motion.div>
    </div>
  );
};

export default TestimonialsText;
