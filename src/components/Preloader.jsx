import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import loadingImage from '../assets/loading.png';

export default function Preloader({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Animate progress bar from 0 to 100
    const duration = 2000; // 2 seconds total loading time
    const intervalTime = 30;
    const steps = duration / intervalTime;
    const increment = 100 / steps;

    const timer = setInterval(() => {
      setProgress((prev) => {
        const next = prev + increment;
        if (next >= 100) {
          clearInterval(timer);
          // Allow progress bar to sit at 100% for a brief moment before hiding
          setTimeout(() => {
            setIsVisible(false);
          }, 300);
          return 100;
        }
        return next;
      });
    }, intervalTime);

    return () => clearInterval(timer);
  }, []);

  return (
    <AnimatePresence onExitComplete={onComplete}>
      {isVisible && (
        <motion.div
          className="preloader-overlay"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] }}
        >
          {/* Subtle background glow effect matching brand */}
          <div className="preloader-glow" />

          <div className="preloader-content">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="preloader-logo-container"
            >
              <img
                src={loadingImage}
                alt="Loading logo"
                className="preloader-logo"
              />
            </motion.div>

            {/* Premium, sleek loader progress indicator */}
            <div className="preloader-bar-container">
              <motion.div
                className="preloader-bar-fill"
                style={{ width: `${progress}%` }}
                layout
              />
            </div>
            
            <motion.span 
              className="preloader-text"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            >
              Initializing Systems {Math.round(progress)}%
            </motion.span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
