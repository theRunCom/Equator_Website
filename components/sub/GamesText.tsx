"use client";
import React from "react";
import { motion } from "framer-motion";
import { slideInFromLeft, slideInFromRight } from "@/utils/motion";

const GamesText = () => {
  return (
    <div className="w-full h-auto flex flex-col items-center justify-center">
      <motion.div
        variants={slideInFromLeft(0.5)}
        className="text-[70px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500"
      >
        Fully On-chain Games
      </motion.div>
      <motion.div
        variants={slideInFromRight(0.5)}
        className="sancreek-regular text-[30px] text-theme mb-1 mt-[1px] text-center"
      >
        Try the games we developed. Have fun!
      </motion.div>
    </div>
  );
};

export default GamesText;
