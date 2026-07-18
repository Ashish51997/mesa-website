"use client";

import React from "react";
import { motion } from "framer-motion";

interface FloatingGradientProps {
  children?: React.ReactNode;
}

export function FloatingGradient({ children }: FloatingGradientProps) {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Circle 1: Royal Blue to Indigo */}
      <motion.div
        className="absolute h-96 w-96 rounded-full bg-gradient-to-r from-[#0050FB] to-indigo-500 opacity-20 blur-3xl"
        animate={{
          x: [0, 120, 0],
          y: [0, 60, 0],
          scale: [1, 1.25, 1],
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{ top: "5%", left: "10%" }}
      />
      
      {/* Circle 2: Deep Violet to Purple */}
      <motion.div
        className="absolute h-96 w-96 rounded-full bg-gradient-to-r from-violet-600 to-purple-500 opacity-20 blur-3xl"
        animate={{
          x: [0, -120, 0],
          y: [0, -60, 0],
          scale: [1, 1.35, 1],
        }}
        transition={{
          duration: 11,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{ bottom: "10%", right: "15%" }}
      />
      
      {/* Circle 3: Cyan to Royal Blue */}
      <motion.div
        className="absolute h-96 w-96 rounded-full bg-gradient-to-r from-cyan-500 to-[#0050FB] opacity-20 blur-3xl"
        animate={{
          x: [0, 60, 0],
          y: [0, -120, 0],
          scale: [1, 1.15, 1],
        }}
        transition={{
          duration: 13,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{ top: "45%", left: "45%" }}
      />
      
      <div className="relative z-10 w-full h-full flex items-center justify-center">
        {children ? (
          children
        ) : (
          <div className="relative z-10 flex h-96 items-center justify-center">
            <div className="text-center">
              <h2 className="text-4xl font-bold">Floating Gradient</h2>
              <p className="mt-2 text-[var(--foreground)]/70">
                Animated background effect
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default FloatingGradient;
