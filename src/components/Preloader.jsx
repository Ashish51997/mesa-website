import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import loadingImage from '../assets/loading-1.png';

// Hook to calculate the rendered dimensions of the background image (object-fit: cover)
function useImageDimensions() {
  const [dimensions, setDimensions] = useState({ width: 0, height: 0, left: 0, top: 0 });

  useEffect(() => {
    const calculate = () => {
      const vw = window.innerWidth;
      const vh = window.innerHeight;
      const imageAspect = 4862 / 2721;
      const viewportAspect = vw / vh;

      let width, height, left, top;

      if (viewportAspect > imageAspect) {
        // Viewport is wider than image aspect ratio: image fills width, height scales up
        width = vw;
        height = vw / imageAspect;
        left = 0;
        top = (vh - height) / 2;
      } else {
        // Viewport is taller than image aspect ratio: image fills height, width scales up
        height = vh;
        width = vh * imageAspect;
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

export default function Preloader({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const imgDim = useImageDimensions();

  useEffect(() => {
    // Animate progress bar from 0 to 100
    const duration = 2000; // 2 seconds loading duration
    const intervalTime = 30;
    const steps = duration / intervalTime;
    const increment = 100 / steps;

    const timer = setInterval(() => {
      setProgress((prev) => {
        const next = prev + increment;
        if (next >= 100) {
          clearInterval(timer);
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

  // Compute precise positions matching the logo and text in Loading.png
  const containerStyle = {
    position: 'absolute',
    left: `${imgDim.left + imgDim.width * 0.2678}px`,
    top: `${imgDim.top + imgDim.height * 0.640}px`,
    width: `${imgDim.width * 0.433}px`,
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
          
          {/* Progress bar container and status text aligned exactly below the My Desk logo */}
          <div className="preloader-loader-container" style={containerStyle}>
            <div className="preloader-bar-container">
              <div
                className="preloader-bar-fill"
                style={{ width: `${progress}%` }}
              />
            </div>
            <span className="preloader-loader-text">Loading {Math.round(progress)}%</span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
