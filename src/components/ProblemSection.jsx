import React, { useEffect, useRef, useState } from 'react';
import { motion, useReducedMotion, useScroll, useSpring, useTransform } from 'framer-motion';

/* Decorative dashed line behind the card row. Off by default — flip to true to
   evaluate. When false the subtree is never rendered, so it costs nothing. */
const SHOW_BROKEN_CONNECTOR = false;

/* GSAP power2.out is an ease-out cubic. */
const EASE_OUT_CUBIC = [0.215, 0.61, 0.355, 1];

/* ScrollTrigger `start: "top 72%"` — the section fires when its top crosses 72%
   of the viewport. Shrinking the viewport root by the remaining 28% is the
   equivalent, and `once` matches ScrollTrigger's `once: true`. */
const VIEWPORT = { once: true, margin: '0px 0px -28% 0px' };

/* Card stagger is the whole sequence now; last card lands at 0.77s. */
const STAGGER = 0.09;
const CARD_DURATION = 0.5;
const REDUCED_FADE = 0.3;

const PROBLEM_CARDS = [
  {
    quote: '"What\'s our actual stock?"',
    body: "The register shows one number. Excel shows another. The storekeeper remembers a third. The real number comes out only on audit day.",
    icon: (
      <>
        <path d="M21 8l-9-5-9 5v8l9 5 9-5V8z" />
        <path d="M3 8l9 5 9-5M12 13v8" />
      </>
    ),
  },
  {
    quote: '"Check the WhatsApp group."',
    body: 'Production updates come as photos and voice notes. By the time someone reads them, they are already two days old.',
    icon: (
      <>
        <path d="M21 12a8 8 0 0 1-8 8H4l2-3a8 8 0 1 1 15-5z" />
        <path d="M8 11h8M8 14h5" />
      </>
    ),
  },
  {
    quote: '"The QC file is with Ramesh."',
    body: 'Quality records are on paper, in one file. Tracing one complaint back to its batch and machine takes days.',
    icon: (
      <>
        <path d="M9 4h6v3H9zM7 4H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1" />
        <path d="M8 12h8M8 16h6" />
      </>
    ),
  },
  {
    quote: '"We\'ll confirm delivery by tomorrow."',
    body: "Sales cannot see production. Production cannot see stock. So nobody can give the customer a firm date.",
    icon: (
      <>
        <rect x="3" y="5" width="18" height="16" rx="2" />
        <path d="M3 9h18M8 3v4M16 3v4M12 13v5M9.5 15.5L12 18l2.5-2.5" />
      </>
    ),
  },
];

/* Four segments with gaps where the cards sit: the line is interrupted between
   every card and stops short of the right edge, so it never completes. */
const CONNECTOR_PATH =
  'M8 1 H236 M264 1 H492 M520 1 H748 M776 1 H960';
const CONNECTOR_LENGTH = 1080;

/* Hidden-first entrance animations only work if the browser will actually run
   them. requestAnimationFrame and IntersectionObserver are both suspended while
   the document is not being rendered (background tab, bfcache restore,
   prerender, screenshot capture) — and whileInView is driven by an
   IntersectionObserver, so in that state nothing would ever fade in and the
   section would render as four empty cards.
   This probes for a real animation frame before we hide anything; if it never
   arrives, the section renders in its final state instead of blank.
   NOTE: How.jsx carries the same guard for its stage rail. Worth extracting to
   a shared hook next time either one is touched. */
function useAnimationReady() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    let disposed = false;
    let everHidden = document.visibilityState === 'hidden';
    const onVisibility = () => {
      if (document.visibilityState === 'hidden') everHidden = true;
    };
    document.addEventListener('visibilitychange', onVisibility);

    const id = requestAnimationFrame(() => {
      if (!disposed && !everHidden) setReady(true);
    });

    return () => {
      disposed = true;
      cancelAnimationFrame(id);
      document.removeEventListener('visibilitychange', onVisibility);
    };
  }, []);

  return ready;
}

function BrokenConnector({ sectionRef, reduced }) {
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    // ScrollTrigger start "top 60%" / end "bottom 70%".
    offset: ['start 0.6', 'end 0.7'],
  });

  // Stands in for ScrollTrigger's `scrub: 0.6` — the draw trails the scroll.
  const smoothed = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 26,
    restDelta: 0.001,
  });

  const dashOffset = useTransform(smoothed, [0, 1], [CONNECTOR_LENGTH, 0]);

  return (
    <div className="broken-line" aria-hidden="true">
      <svg viewBox="0 0 1000 2" preserveAspectRatio="none" focusable="false">
        <motion.path
          d={CONNECTOR_PATH}
          strokeDasharray="6 7"
          style={{ strokeDashoffset: reduced ? 0 : dashOffset }}
        />
      </svg>
    </div>
  );
}

export default function ProblemSection() {
  const sectionRef = useRef(null);
  const reduced = useReducedMotion();
  const animationReady = useAnimationReady();

  const cardVariants = {
    hidden: { opacity: 0, y: reduced ? 0 : 28 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: reduced
        ? { duration: REDUCED_FADE, delay: 0 }
        : { duration: CARD_DURATION, ease: EASE_OUT_CUBIC, delay: i * STAGGER },
    }),
  };

  /* Tweening a custom property keeps the wipe theme-aware: color-mix resolves
     against whichever --ink / --accent the active theme supplies. */
  const wipeVariants = {
    hidden: { '--wipe': 0 },
    visible: {
      '--wipe': 1,
      transition: reduced ? { duration: 0 } : { duration: 0.4, ease: EASE_OUT_CUBIC },
    },
  };

  return (
    <motion.section
      ref={sectionRef}
      className="section alt problem-section"
      initial={animationReady ? 'hidden' : false}
      animate={animationReady ? undefined : 'visible'}
      whileInView={animationReady ? 'visible' : undefined}
      viewport={VIEWPORT}
    >
      <div className="wrap">
        <div className="section-head reveal">
          <h2>
            The business grew.{' '}
            <motion.em className="grad problem-wipe" variants={wipeVariants}>
              The Excel sheets didn't.
            </motion.em>
          </h2>
          <p className="lede">
            Orders are coming. Machines are running. But the plant's information is spread across registers, Excel and WhatsApp.
          </p>
        </div>

        {/* Lead-in to the card row — sits with the cards, not the section head. */}
        <p className="problem-cue">You hear these every day when there is no system:</p>

        <div className="problem-grid-wrap">
          {SHOW_BROKEN_CONNECTOR && (
            <BrokenConnector sectionRef={sectionRef} reduced={reduced} />
          )}

          <div className="grid-4">
            {PROBLEM_CARDS.map((card, i) => (
              <motion.div
                key={card.quote}
                className="card problem-card"
                custom={i}
                variants={cardVariants}
              >
                <div className="glyph">
                  <svg viewBox="0 0 24 24">{card.icon}</svg>
                </div>
                <h3>{card.quote}</h3>
                <p>{card.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
}
