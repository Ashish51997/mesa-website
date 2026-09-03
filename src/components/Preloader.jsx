import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import logoMark from '../assets/login-logo-mark.svg';
import logoMarkMobile from '../assets/login-logo-mark-mobile.svg';
import wordmark from '../assets/login-wordmark.svg';
import wordmarkMobile from '../assets/login-wordmark-mobile.svg';

/* The intro reuses the sign-in screen's plate and vector lockup. The lockup was
   previously baked into a 1440x1024 PNG, which went soft as soon as the plate
   was scaled to cover the viewport — SVG stays sharp at every size and drops
   the JS that had to measure the image to place the bar under it. */

function ProgressBar({ progress }) {
  return (
    <div className="preloader-loader-container">
      <div
        className="preloader-bar-container"
        role="progressbar"
        aria-label="Loading"
        aria-valuenow={Math.round(progress)}
        aria-valuemin={0}
        aria-valuemax={100}
      >
        <div className="preloader-bar-fill" style={{ width: `${progress}%` }} />
      </div>
      <span className="preloader-loader-text">Loading {Math.round(progress)}%</span>
    </div>
  );
}

export default function Preloader({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Animate progress bar from 0 to 100. Driven by elapsed time rather than a
    // tick count so a busy main thread can't stretch the intro past 2s.
    const duration = 2000;
    const start = performance.now();

    const timer = setInterval(() => {
      const elapsed = performance.now() - start;
      const next = Math.min(100, (elapsed / duration) * 100);
      setProgress(next);
      if (next >= 100) {
        clearInterval(timer);
        setTimeout(() => {
          setIsVisible(false);
        }, 300);
      }
    }, 30);

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
          {/* Same lockup as the sign-in screen: each breakpoint loads the
              artwork drawn at its own proportions, not a scaled copy. */}
          <div className="preloader-brand">
            <picture>
              <source srcSet={logoMarkMobile} media="(max-width: 767px)" />
              <img src={logoMark} alt="" className="preloader-brand-mark" />
            </picture>
            <picture>
              <source srcSet={wordmarkMobile} media="(max-width: 767px)" />
              <img
                src={wordmark}
                alt="MesaOrigins — One Platform. Every Operation."
                className="preloader-brand-wordmark"
              />
            </picture>
          </div>

          <ProgressBar progress={progress} />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
