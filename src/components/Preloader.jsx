import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import loadingImage from '../assets/loading.png';
import stackedLockup from '../assets/loading-lockup-stacked.svg';

// The lockup is baked into loading.png (1440x1024). These are its bounds inside
// the plate, as fractions of the rendered image — used to sit the progress bar
// directly under it on wide viewports.
const PLATE_ASPECT = 1440 / 1024;
const LOCKUP_LEFT = 0.2326;
const LOCKUP_WIDTH = 0.5347;
const LOCKUP_BOTTOM = 0.601;

// Hook to calculate the rendered dimensions of the background image (object-fit: cover)
function useImageDimensions() {
  const [dimensions, setDimensions] = useState({ width: 0, height: 0, left: 0, top: 0 });

  useEffect(() => {
    const calculate = () => {
      const vw = window.innerWidth;
      const vh = window.innerHeight;
      const viewportAspect = vw / vh;

      let width, height, left, top;

      if (viewportAspect > PLATE_ASPECT) {
        // Viewport is wider than image aspect ratio: image fills width, height scales up
        width = vw;
        height = vw / PLATE_ASPECT;
        left = 0;
        top = (vh - height) / 2;
      } else {
        // Viewport is taller than image aspect ratio: image fills height, width scales up
        height = vh;
        width = vh * PLATE_ASPECT;
        left = (vw - width) / 2;
        top = 0;
      }

      setDimensions({ width, height, left, top });
    };

    calculate();
    window.addEventListener('resize', calculate);
    return () => window.removeEventListener('resize', calculate);
  }, []);

  return dimensions;
}

function ProgressBar({ progress }) {
  return (
    <>
      <div className="preloader-bar-container">
        <div
          className="preloader-bar-fill"
          style={{ width: `${progress}%` }}
        />
      </div>
      <span className="preloader-loader-text">Loading {Math.round(progress)}%</span>
    </>
  );
}

export default function Preloader({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const imgDim = useImageDimensions();

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

  // Compute precise positions matching the logo and text baked into loading.png
  const plateStyle = {
    left: `${imgDim.left + imgDim.width * LOCKUP_LEFT}px`,
    top: `${imgDim.top + imgDim.height * LOCKUP_BOTTOM}px`,
    width: `${imgDim.width * LOCKUP_WIDTH}px`,
  };

  return (
    <AnimatePresence onExitComplete={onComplete}>
      {isVisible && (
        <motion.div
          className="preloader-overlay"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] }}
        >
          <img
            src={loadingImage}
            alt="Loading"
            className="preloader-image"
          />

          {/* Wide viewports: the lockup comes from the plate, so the bar only
              has to line up underneath it. */}
          <div className="preloader-loader-container preloader-plate-loader" style={plateStyle}>
            <ProgressBar progress={progress} />
          </div>

          {/* Narrow viewports: the plate is cropped to the clean band left of
              the baked lockup, and the lockup is drawn as vector instead — it
              stays sharp and is laid out in flow so it can't run off-screen. */}
          <div className="preloader-loader-container preloader-mobile-loader">
            <img src={stackedLockup} alt="MesaOrigins" className="preloader-mobile-lockup" />
            <ProgressBar progress={progress} />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
