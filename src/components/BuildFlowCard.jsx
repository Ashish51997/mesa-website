import React, { useEffect, useRef, useState } from 'react';

const STEPS = [
  { title: 'Inquiry & order', note: 'Sales enters it once. It never gets re-typed.' },
  { title: 'Production plan', note: 'Plan vs actual, visible per machine.' },
  { title: 'Quality checks', note: 'QC recorded at the station, with photos.' },
  { title: 'Inventory & stores', note: 'Stock moves when material moves. No register.' },
  { title: 'Dispatch', note: 'Batch-traceable, weighbridge-linked, invoiced.' },
];

const STEP_MS = 1500;   // dwell on each step
const PAUSE_MS = 2200;  // hold once complete, before restarting
const RESET_MS = 650;

const Tick = () => (
  <svg className="tick" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M5 13l4 4 10-10" />
  </svg>
);

export default function BuildFlowCard() {
  // -1 = nothing reached yet, STEPS.length = every step complete
  const [active, setActive] = useState(-1);
  const timer = useRef(null);
  const cardRef = useRef(null);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setActive(STEPS.length);
      return undefined;
    }

    let disposed = false;
    let i = -1;

    const advance = () => {
      if (disposed) return;
      i += 1;
      if (i < STEPS.length) {
        setActive(i);
        timer.current = setTimeout(advance, STEP_MS);
      } else {
        setActive(STEPS.length);
        timer.current = setTimeout(() => {
          if (disposed) return;
          i = -1;
          setActive(-1);
          timer.current = setTimeout(advance, RESET_MS);
        }, PAUSE_MS);
      }
    };

    // Only run the loop once the card has been seen, and never while the tab is
    // in the background — there is nothing to watch there.
    const start = () => {
      if (!disposed && timer.current === null) timer.current = setTimeout(advance, 500);
    };

    let io;
    if ('IntersectionObserver' in window) {
      io = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting) {
            io.disconnect();
            start();
          }
        },
        { threshold: 0.4 }
      );
      if (cardRef.current) io.observe(cardRef.current);
    } else {
      start();
    }

    return () => {
      disposed = true;
      clearTimeout(timer.current);
      if (io) io.disconnect();
    };
  }, []);

  const complete = active >= STEPS.length;
  const fill = complete ? 1 : Math.max(0, active) / (STEPS.length - 1);

  return (
    <div
      className="flow-card reveal"
      ref={cardRef}
      aria-label="One connected flow, from inquiry to dispatch"
    >
      <div className="flow-head">
        <span className="flow-label">One connected flow</span>
        <span className="live-badge">
          <span className="live-dot" aria-hidden="true" />
          LIVE
        </span>
      </div>

      <div className="flow-steps">
        <div className="flow-rail" aria-hidden="true">
          <div className="flow-rail-fill" style={{ transform: `scaleY(${fill})` }} />
        </div>

        {STEPS.map((step, i) => {
          const done = complete || i < active;
          const isActive = !complete && i === active;
          return (
            <div
              className={`flow-step${done ? ' is-done' : ''}${isActive ? ' is-active' : ''}`}
              key={step.title}
            >
              <div className="flow-node">
                <span className="num">{i + 1}</span>
                <Tick />
              </div>
              <div>
                <h4>{step.title}</h4>
                <p>{step.note}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
