import React, { lazy, Suspense } from 'react';

// Lazy so the WebGL library stays out of the main bundle; the canvas also
// suspends itself when the section is off-screen.
const Prism = lazy(() => import('./ui/Prism'));

/* Shared closing CTA. Every page uses this so the treatment — animated
   backdrop, frosted card, contact column — stays identical; only the heading
   and lede change per page. `className` lets a page tighten its spacing when
   the CTA is meant to read as part of the section above it. */
export default function FinalCta({ heading, lede, className = '' }) {
  return (
    <section className={`section final-cta${className ? ` ${className}` : ''}`}>
      <Suspense fallback={null}>
        <Prism
          animationType="rotate"
          timeScale={0.5}
          height={3.5}
          baseWidth={5.5}
          scale={3.6}
          hueShift={0}
          colorFrequency={1}
          noise={0.5}
          glow={1}
          suspendWhenOffscreen
        />
      </Suspense>
      <div className="wrap">
        <div className="reveal">
          <h2>{heading}</h2>
          {lede && <p className="lede">{lede}</p>}
          <div className="hero-ctas" style={{ marginTop: '32px' }}>
            {/* Opens a pre-addressed email rather than routing to the contact form. */}
            <a
              className="btn"
              href="mailto:sales@mesaorigins.com?subject=Operations%20walkthrough"
            >
              Book Consultation
            </a>
          </div>
        </div>
        <div className="reveal">
          <a className="contact-big" href="tel:+918338081502">+91 83380 81502</a><br />
          <a className="contact-big" href="mailto:sales@mesaorigins.com">sales@mesaorigins.com</a>
        </div>
      </div>
    </section>
  );
}
